import { registerTranslation } from '../utilities/localize';
import type { Translation } from '../utilities/localize';

const translation: Translation = {
  $code: 'de-CH',
  $name: 'Deutsch (Schweiz)',
  $dir: 'ltr',

  clearEntry: 'Eingabe löschen',
  close: 'Schliessen',
  copy: 'Kopieren',
  numOptionsSelected: (num: number) => {
    if (num === 0) return 'Keine Optionen ausgewählt';
    if (num === 1) return '1 Option ausgewählt';
    return `${num} optionen ausgewählt`;
  },
  currentValue: 'Aktueller Wert',
  hidePassword: 'Passwort verbergen',
  loading: 'Wird geladen',
  progress: 'Fortschritt',
  remove: 'Entfernen',
  resize: 'Grösse ändern',
  scrollToEnd: 'Zum Ende scrollen',
  scrollToStart: 'Zum Anfang scrollen',
  selectAColorFromTheScreen: 'Wähle eine Farbe vom Bildschirm',
  showPassword: 'Passwort anzeigen',
  toggleColorFormat: 'Farbformat umschalten'
};

registerTranslation(translation);

export default translation;
