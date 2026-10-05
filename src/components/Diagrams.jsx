import { useLang } from '../i18n/LangContext.jsx';

const INK = '#141414';
const RED = '#B8232A';
const TEAL = '#12706A';
const PAPER = '#F5F2ED';
const RED_LIGHT = '#E5534B';

export function ThirdsDiagram() {
  const { t } = useLang();
  return (
    <svg viewBox="0 0 300 185" width="100%" role="img" aria-label={t('dia.thirds')}>
      <rect x="0" y="123" width="300" height="62" fill="#D9D1C5" />
      <g stroke={INK} strokeOpacity="0.35">
        <line x1="100" y1="0" x2="100" y2="185" />
        <line x1="200" y1="0" x2="200" y2="185" />
        <line x1="0" y1="62" x2="300" y2="62" />
      </g>
      <line x1="0" y1="123" x2="300" y2="123" stroke={INK} strokeWidth="1.5" />
      {[[100, 62], [200, 62], [100, 123], [200, 123]].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="5" fill={RED} />
      ))}
    </svg>
  );
}

export function PhiDiagram() {
  const { t } = useLang();
  return (
    <svg viewBox="0 0 300 185" width="100%" role="img" aria-label={t('dia.phi')}>
      <g stroke={INK} strokeOpacity="0.18" strokeDasharray="3 4">
        <line x1="100" y1="0" x2="100" y2="185" />
        <line x1="200" y1="0" x2="200" y2="185" />
        <line x1="0" y1="62" x2="300" y2="62" />
        <line x1="0" y1="123" x2="300" y2="123" />
      </g>
      <g stroke={TEAL} strokeWidth="1.5">
        <line x1="115" y1="0" x2="115" y2="185" />
        <line x1="185" y1="0" x2="185" y2="185" />
        <line x1="0" y1="71" x2="300" y2="71" />
        <line x1="0" y1="114" x2="300" y2="114" />
      </g>
      {[[115, 71], [185, 71], [115, 114], [185, 114]].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="5" fill={RED} />
      ))}
    </svg>
  );
}

export function SpiralDiagram() {
  const { t } = useLang();
  return (
    <svg viewBox="0 0 300 185" width="100%" role="img" aria-label={t('dia.spiral')}>
      <g stroke={INK} strokeOpacity="0.25" fill="none">
        <line x1="185" y1="0" x2="185" y2="185" />
        <line x1="185" y1="115" x2="300" y2="115" />
        <line x1="230" y1="115" x2="230" y2="185" />
        <line x1="185" y1="140" x2="230" y2="140" />
        <line x1="210" y1="115" x2="210" y2="140" />
      </g>
      <path
        d="M0,185 A185,185 0 0 1 185,0 A115,115 0 0 1 300,115 A70,70 0 0 1 230,185 A45,45 0 0 1 185,140 A25,25 0 0 1 210,115"
        fill="none" stroke={TEAL} strokeWidth="2"
      />
      <circle cx="207" cy="131" r="6" fill={RED} />
    </svg>
  );
}

export function PlanesDiagram() {
  const { t } = useLang();
  return (
    <svg viewBox="0 0 300 185" width="100%" role="img" aria-label={t('dia.planes')}>
      <polygon points="0,95 60,60 120,85 190,50 260,80 300,65 300,185 0,185" fill="#CFC6B8" />
      <polygon points="0,130 80,105 170,125 240,100 300,118 300,185 0,185" fill="#7FA39D" />
      <polygon points="0,185 0,150 50,138 95,160 120,185" fill={INK} />
      <g fontFamily="Gelasio, Georgia, serif" fontSize="11" fontWeight="600">
        <text x="288" y="44" textAnchor="end" fill="#5C5752">{t('dia.planes.bg')}</text>
        <text x="176" y="146" fill="#0E4F4B">{t('dia.planes.mid')}</text>
        <text x="14" y="176" fill={PAPER}>{t('dia.planes.fg')}</text>
      </g>
    </svg>
  );
}

export const RULE_DIAGRAMS = {
  terzi: ThirdsDiagram,
  phi: PhiDiagram,
  spirale: SpiralDiagram,
  piani: PlanesDiagram
};

const glyph = (children) => (
  <svg width="56" height="48" viewBox="0 0 56 48" aria-hidden="true">{children}</svg>
);

export const GESTALT_GLYPHS = {
  figura: () => glyph(<><rect x="4" y="2" width="44" height="44" rx="8" fill={PAPER} /><circle cx="26" cy="24" r="12" fill={INK} /></>),
  vicinanza: () => glyph(
    <g fill={PAPER}>
      {[6, 14, 22, 36, 44, 52].map((x) => <circle key={x} cx={x} cy="24" r="3.5" />)}
    </g>
  ),
  somiglianza: () => glyph(
    <>
      <g fill={PAPER}>
        {[10, 28, 46].map((x) => <circle key={`a${x}`} cx={x} cy="8" r="4" />)}
        {[10, 28, 46].map((x) => <circle key={`c${x}`} cx={x} cy="40" r="4" />)}
      </g>
      <g fill={RED_LIGHT}>
        {[10, 28, 46].map((x) => <circle key={`b${x}`} cx={x} cy="24" r="4" />)}
      </g>
    </>
  ),
  continuita: () => glyph(<><path d="M4,40 C16,4 36,44 52,8" fill="none" stroke={PAPER} strokeWidth="2" strokeLinecap="round" /><circle cx="52" cy="8" r="4" fill={RED_LIGHT} /></>),
  chiusura: () => glyph(<circle cx="28" cy="24" r="17" fill="none" stroke={PAPER} strokeWidth="2.5" strokeDasharray="20 7" />),
  pregnanza: () => glyph(<><circle cx="22" cy="24" r="14" fill="none" stroke={PAPER} strokeWidth="2" /><rect x="24" y="12" width="24" height="24" fill="none" stroke={RED_LIGHT} strokeWidth="2" /></>)
};

export function LogoMark({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="26" height="26" rx="7" stroke={INK} strokeWidth="1.5" />
      <g stroke={INK} strokeOpacity="0.25">
        <line x1="10" y1="2" x2="10" y2="26" />
        <line x1="18" y1="2" x2="18" y2="26" />
        <line x1="2" y1="10" x2="26" y2="10" />
        <line x1="2" y1="18" x2="26" y2="18" />
      </g>
      <circle cx="18" cy="10" r="3" fill={RED} />
    </svg>
  );
}
