// Riconoscimento della piattaforma e salvataggio dello scatto.
// Android: lo scatto viene salvato in automatico nella cartella Download (la Galleria di solito la mostra).
// iPhone: il browser non scrive in Foto da solo; serve il foglio di condivisione, quindi un tocco su "Salva in Foto".
const UA = (typeof navigator !== 'undefined' && navigator.userAgent) || '';

export const IS_ANDROID = /Android/i.test(UA);
export const IS_IOS =
  /iPad|iPhone|iPod/.test(UA) ||
  (typeof navigator !== 'undefined' && navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

export function downloadUrl(url, name) {
  const a = document.createElement('a');
  a.href = url;
  a.download = name;
  a.rel = 'noopener';
  document.body.appendChild(a);
  a.click();
  a.remove();
}
