# Rules, composizione fotografica (PWA)

Pagina unica con regola dei terzi, griglia phi, spirale aurea, piani e Gestalt.
Un pulsante apre la fotocamera: anteprima con profili colore ispirati alle pellicole,
griglia dei terzi, livella e rilevamento del soggetto sui punti di forza.

Versione 0.3.0 · React 18 + Vite 5 · deploy su Vercel · un progetto StudioNodo.

## Avvio in locale

```bash
npm install
npm run dev
```

La fotocamera richiede HTTPS. `localhost` va bene sul computer; per provare sul telefono
usa il deploy di anteprima di Vercel.

## Deploy su Vercel

```bash
vercel          # anteprima
vercel --prod   # produzione
```

Nessuna variabile d'ambiente: l'app non ha backend e non salva nulla online.

In build (`prebuild`) succedono due cose in automatico:
1. i file wasm di MediaPipe vengono copiati in `public/mediapipe`;
2. il modello di rilevamento (~4,5 MB) viene scaricato in `public/models`.

Se il download del modello fallisce la build prosegue e l'app usa il modello remoto di Google.

## Dove mettere le mani

| Cosa | File |
|---|---|
| Nome e versione app | `src/config.js` |
| Testi di interfaccia, IT e EN | `src/i18n/strings.js` |
| Testi brevi delle regole e della Gestalt | `src/i18n/content.it.js`, `src/i18n/content.en.js` |
| Schede "Approfondisci" (10) | `src/i18n/deep.it.js`, `src/i18n/deep.en.js` |
| Link Ko-fi e StudioNodo nel footer | `src/config.js` |
| Profili colore (pellicole) | `src/camera/filmProfiles.js` |
| Soglie "sul punto / quasi / lontano" | `src/camera/composition.js` |
| Colori e tipografia (Playfair Display + Gelasio, solo serif) | `src/styles.css` (variabili in `:root`) |
| Versione cache offline | `public/sw.js` (`VERSION`, va cambiata a ogni rilascio) |

## Lingue

Italiano e inglese, con selettore IT | EN in alto a destra. Il nome dell'app resta sempre "Rules".
La lingua iniziale è quella del telefono; la scelta viene ricordata. `?lang=en` nell'indirizzo apre direttamente l'inglese.
I nomi dei profili colore restano in italiano in entrambe le lingue.

`npm run check-i18n` verifica che le due lingue siano allineate (gira anche a ogni build: se manca un testo, la build si ferma).
Per aggiungere un testo: stessa chiave in `it` e in `en` dentro `strings.js`.

## Changelog

- **0.3.0**: riconoscimento del soggetto a tocco (niente più soggetti automatici che saltano da un oggetto all'altro); salvataggio automatico degli scatti nei Download su Android e pulsante "Salva in Foto" su iPhone; `npm test` per la logica di tracciamento.
- **0.2.1**: icona più grande (disegno al 54% del lato invece del 32%); footer centrato, senza la frase finale, con "un progetto StudioNodo" e link a github.com/Studionodo.
- **0.2.0**: versione inglese completa (interfaccia, regole, 10 schede, fotocamera); selettore IT | EN al posto del contatore; numeri nel formato della lingua; controllo automatico di parità tra le lingue.
- **0.1.1**: schede "Approfondisci" in finestra centrata per le 4 regole e i 6 principi Gestalt; link "Offrimi un caffè" nel footer; font solo serif (via Instrument Sans, dentro Gelasio); niente trattini nei testi.
- **0.1.0**: prima versione.

## Come funziona la fotocamera

- **Anteprima:** il video passa da uno shader WebGL che applica il profilo (temperatura, contrasto,
  saturazione, viraggio, neri sollevati, vignettatura, grana). Lo scatto rifà lo stesso calcolo
  a piena risoluzione del sensore e salva un JPEG.
- **Mirino:** mostra il fotogramma intero del sensore, senza ritagli: la griglia cade sulla foto vera.
- **Soggetto, a tocco:** all'apertura c'è solo la griglia. Tocchi il soggetto sullo schermo: l'app lo cerca sotto il dito
  con MediaPipe Object Detector (EfficientDet-Lite0) e, dopo due riconoscimenti consecutivi, lo aggancia e lo segue
  (circa 6 analisi al secondo, solo mentre cerca o segue). Non passa mai a un altro oggetto: se lo perde lo dice e
  aspetta un nuovo tocco. Per le persone il punto di riferimento è la zona testa/petto, per il resto il centro del riquadro.
  Le soglie sono in `src/config.js`; la logica è in `src/camera/subjectTracker.js` ed è coperta da `npm test`.
- **Salvataggio:** su Android ogni scatto viene salvato in automatico nella cartella Download (la Galleria di solito la mostra).
  Su iPhone il browser non scrive in Foto da solo: dalla miniatura si apre la scheda con "Salva in Foto" (foglio di condivisione).
- **Livella:** sensore di gravità. Su iOS il permesso viene chiesto al tocco su "Inquadra".

## Test da fare su dispositivo reale prima del rilascio

- [ ] iPhone, Safari e PWA installata: avvio fotocamera, permesso sensori, livella
- [ ] Android, Chrome e PWA installata: stesse verifiche
- [ ] Verso di rotazione della lineetta della livella (corretto su entrambi i sistemi?)
- [ ] Fotocamera frontale: specchiatura dell'anteprima e dello scatto
- [ ] Condividi / Salva dello scatto su iOS e Android
- [ ] Android: dopo lo scatto la foto compare nei Download e nella Galleria, senza richieste di conferma a ogni foto
- [ ] iPhone: "Salva in Foto" dalla scheda dell'ultimo scatto porta davvero la foto in Foto
- [ ] Tocco sul soggetto: riquadro stabile, nessun salto su altri oggetti, messaggio chiaro quando non riconosce nulla
- [ ] Offline: dopo una prima apertura con rete, la pagina e il rilevamento funzionano senza rete
- [ ] Batteria e temperatura dopo 5 minuti di fotocamera aperta

## Limiti noti

- Il tocco funziona solo su ciò che il modello conosce (80 categorie comuni: persone, animali, veicoli, oggetti). Su un portone, un albero o un muro risponde "Niente di riconoscibile qui".
- Gli scatti sono fotogrammi presi dal video (circa 2 o 3 megapixel, secondo il telefono) e non hanno dati EXIF. Vanno bene come appunti di composizione. La foto a piena risoluzione del sensore su Android è rimandata a una versione successiva.
- I profili sono approssimazioni via shader, non tabelle colore (LUT) calibrate su pellicola reale.
- Niente alone luminoso (halation) su "Notte 800": richiede un passaggio di sfocatura aggiuntivo.
- Il rilevamento riconosce 80 categorie comuni: un dettaglio architettonico o una texture non vengono visti come soggetto.
