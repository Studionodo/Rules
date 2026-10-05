// Verifica che italiano e inglese siano allineati: stesse chiavi, stessi contenuti, stessa struttura.
// Gira a ogni build: se manca qualcosa la build si ferma e dice cosa.
import { STRINGS } from '../src/i18n/strings.js';
import * as it from '../src/i18n/content.it.js';
import * as en from '../src/i18n/content.en.js';
import { DEEP as deepIt } from '../src/i18n/deep.it.js';
import { DEEP as deepEn } from '../src/i18n/deep.en.js';

const errors = [];
const DASHES = /[\u2013\u2014]/;

const keysIt = Object.keys(STRINGS.it);
const keysEn = Object.keys(STRINGS.en);
keysIt.filter((k) => !(k in STRINGS.en)).forEach((k) => errors.push(`inglese: manca la chiave "${k}"`));
keysEn.filter((k) => !(k in STRINGS.it)).forEach((k) => errors.push(`italiano: manca la chiave "${k}"`));

for (const list of ['RULES', 'TOOLS', 'GESTALT']) {
  const a = it[list].map((x) => x.id).join(',');
  const b = en[list].map((x) => x.id).join(',');
  if (a !== b) errors.push(`${list}: id diversi tra le lingue (${a} / ${b})`);
}

const ids = [...it.RULES, ...it.TOOLS, ...it.GESTALT].map((x) => x.id);
const KIND = {};
it.RULES.forEach((x) => { KIND[x.id] = 'rule'; });
it.TOOLS.forEach((x) => { KIND[x.id] = 'tool'; });
it.GESTALT.forEach((x) => { KIND[x.id] = 'gestalt'; });

// Ogni strumento deve indicare un principio Gestalt esistente, uguale nelle due lingue.
const gestaltIds = it.GESTALT.map((x) => x.id);
it.TOOLS.forEach((x, i) => {
  const o = en.TOOLS[i];
  if (!gestaltIds.includes(x.principle)) errors.push(`${x.id}: principio Gestalt inesistente (${x.principle})`);
  if (!o || o.principle !== x.principle) errors.push(`${x.id}: principio diverso tra le lingue`);
});
for (const id of ids) {
  const a = deepIt[id];
  const b = deepEn[id];
  if (!a) { errors.push(`scheda italiana mancante: ${id}`); continue; }
  if (!b) { errors.push(`scheda inglese mancante: ${id}`); continue; }
  if (a.kind !== b.kind) errors.push(`${id}: tipo diverso (${a.kind} / ${b.kind})`);
  if (a.kind !== KIND[id]) errors.push(`${id}: tipo atteso ${KIND[id]}, trovato ${a.kind}`);
  if (a.sections.length !== b.sections.length) errors.push(`${id}: numero di sezioni diverso`);
  a.sections.forEach((s, i) => {
    const o = b.sections[i];
    if (!o) return;
    const la = (s.p || s.li || []).length;
    const lb = (o.p || o.li || []).length;
    if (Boolean(s.li) !== Boolean(o.li) || la !== lb) errors.push(`${id}, sezione ${i + 1}: struttura diversa`);
  });
  if (!a.exercise || !b.exercise) errors.push(`${id}: esercizio mancante`);
}

// Convenzione editoriale: niente trattini lunghi o medi nei testi.
const allText = JSON.stringify([STRINGS, it, en, deepIt, deepEn]);
if (DASHES.test(allText)) errors.push('trovato un trattino lungo o medio nei testi (convenzione editoriale)');

if (errors.length) {
  console.error('[check-i18n] problemi trovati:\n  ' + errors.join('\n  '));
  process.exit(1);
}
console.log(`[check-i18n] ok: ${keysIt.length} testi di interfaccia, ${ids.length} schede, italiano e inglese allineati`);
