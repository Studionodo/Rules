// Profili colore ispirati a pellicole e simulazioni celebri. Nomi e parametri sono nostri.
// I nomi restano in italiano in entrambe le lingue (firma dell'app, e niente collisioni con marchi altrui).
// Le note descrittive sono nel dizionario: chiave profile.<id> in src/i18n/strings.js.
// Ogni parametro è letto dallo shader in filmRenderer.js.
//   sat: saturazione (1 = neutra)      contrast: contrasto (1 = neutro)
//   bright: esposizione (1 = neutra)   temp: + caldo / - freddo   tint: + verde / - magenta
//   fade: neri sollevati (0..0.1)      grain: grana (0..0.1)       vignette: vignettatura (0..0.5)
//   mono: 0 colore / 1 bianco e nero   monoMix: peso dei canali RGB nel bianco e nero
//   shadow / high: viraggio di ombre e luci (scostamenti RGB piccoli)
const BASE = {
  sat: 1, contrast: 1, bright: 1, temp: 0, tint: 0, fade: 0, grain: 0, vignette: 0,
  mono: 0, monoMix: [0.2126, 0.7152, 0.0722], shadow: [0, 0, 0], high: [0, 0, 0]
};

export const FILM_PROFILES = [
  {
    id: 'naturale', name: 'Naturale',
    params: { ...BASE }
  },
  {
    id: 'cromo', name: 'Cromo Classico',
    params: { ...BASE, sat: 0.7, contrast: 1.14, temp: -0.04, fade: 0.025, grain: 0.02,
      shadow: [-0.015, 0.0, 0.02], high: [0.012, 0.006, -0.01] }
  },
  {
    id: 'velluto', name: 'Velluto 50',
    params: { ...BASE, sat: 1.45, contrast: 1.18, temp: 0.02, vignette: 0.18, grain: 0.012 }
  },
  {
    id: 'pelle', name: 'Pelle 160',
    params: { ...BASE, sat: 0.88, contrast: 0.94, bright: 1.03, temp: 0.12, fade: 0.04, grain: 0.03,
      high: [0.02, 0.01, -0.01] }
  },
  {
    id: 'notte', name: 'Notte 800',
    params: { ...BASE, sat: 1.15, contrast: 1.08, temp: -0.22, tint: 0.02, grain: 0.05, vignette: 0.12,
      shadow: [-0.02, 0.01, 0.03], high: [0.04, 0.01, -0.02] }
  },
  {
    id: 'argento', name: 'Argento 400',
    params: { ...BASE, mono: 1, monoMix: [0.35, 0.55, 0.1], contrast: 1.35, grain: 0.08, vignette: 0.1 }
  },
  {
    id: 'monocromo', name: 'Monocromo',
    params: { ...BASE, mono: 1, contrast: 1.04, bright: 1.03, fade: 0.02, grain: 0.02 }
  }
];

export const DEFAULT_PROFILE = 'cromo';
