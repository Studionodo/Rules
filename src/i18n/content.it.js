// Testi brevi della pagina in italiano. Modificabili senza toccare la grafica.

export const RULES = [
  {
    id: 'terzi',
    short: 'Terzi',
    num: '01',
    title: 'Regola dei terzi',
    body: 'Due linee orizzontali e due verticali dividono il fotogramma in nove parti. I quattro incroci sono i punti di forza: lì l’occhio si posa con naturalezza. L’orizzonte va su una linea, non a metà.',
    breakIt: 'Simmetria, riflessi, ritratti frontali: il centro è una scelta, non un errore.'
  },
  {
    id: 'phi',
    short: 'Phi',
    num: '02',
    title: 'Griglia phi',
    body: 'Stessa logica, proporzioni diverse: le linee cadono a 0,382 e 0,618 del lato. I punti di forza si stringono verso il centro e la composizione si fa più raccolta. In tratteggio, i terzi per confronto.',
    breakIt: 'Con un soggetto piccolo in un grande spazio i terzi lasciano più respiro.'
  },
  {
    id: 'spirale',
    short: 'Spirale',
    num: '03',
    title: 'Spirale aurea',
    body: 'Una sequenza di rettangoli aurei genera una curva che si avvolge su un punto. Il soggetto sta nell’occhio della spirale; linee e masse lo accompagnano lungo la curva. Si orienta in quattro versi.',
    breakIt: 'Se nella scena non c’è una curva da seguire, la spirale è solo un disegno sovrapposto.'
  },
  {
    id: 'piani',
    short: 'Piani',
    num: '04',
    title: 'I piani',
    body: 'Primo piano, piano intermedio, sfondo. Tre livelli danno profondità a un mezzo che ne ha due e fanno capire la scala. Un elemento vicino all’obiettivo porta dentro chi guarda.',
    breakIt: 'Il piano unico, frontale e piatto, è una scelta forte: Ghirri ne ha fatto una poetica.'
  }
];

export const GESTALT = [
  { id: 'figura', title: 'Figura e sfondo', body: 'Si legge ciò che si stacca. Tono, colore o nitidezza decidono chi è la figura.' },
  { id: 'vicinanza', title: 'Vicinanza', body: 'Ciò che è vicino fa gruppo. La distanza tra le persone racconta il loro rapporto.' },
  { id: 'somiglianza', title: 'Somiglianza', body: 'Forme e colori uguali si collegano anche a distanza. Il diverso diventa soggetto.' },
  { id: 'continuita', title: 'Continuità', body: 'L’occhio segue linee e curve fino in fondo. Strade, corrimani, sguardi guidano la lettura.' },
  { id: 'chiusura', title: 'Chiusura', body: 'Il cervello completa ciò che manca. Lasciare una parte fuori campo coinvolge chi guarda.' },
  { id: 'pregnanza', title: 'Pregnanza', body: 'Tra più letture vince la più semplice. Meno elementi, immagine più forte.' }
];

// Strumenti: come costruire l'immagine. Ognuno si appoggia a un principio della Gestalt (campo "principle").
export const TOOLS = [
  {
    id: 'linee',
    num: '05',
    title: 'Linee guida',
    body: 'Strade, recinzioni, fiumi, binari, il bordo di un muro: sono linee che l’occhio segue da sé. Falla partire da un angolo o dal bordo basso e falla arrivare al soggetto: l’immagine porta chi guarda dove vuoi tu.',
    breakIt: 'Una linea che esce dal fotogramma crea attesa e mistero, se è una scelta.',
    principle: 'continuita'
  },
  {
    id: 'cornice',
    num: '06',
    title: 'Cornice nella cornice',
    body: 'Una finestra, un arco, una porta o dei rami possono racchiudere il soggetto. La cornice lo isola, aggiunge profondità e dice a chi guarda dove posare lo sguardo. Spesso funziona meglio se è più scura del soggetto.',
    breakIt: 'Se la cornice è più interessante del soggetto, o lo schiaccia, meglio toglierla.',
    principle: 'chiusura'
  },
  {
    id: 'negativo',
    num: '07',
    title: 'Spazio negativo',
    body: 'Il vuoto intorno al soggetto non è una mancanza: è ciò che gli dà peso. Cielo, un muro liscio, acqua o nebbia fanno respirare l’immagine e raccontano solitudine, scala, silenzio.',
    breakIt: 'Se il vuoto non dice nulla, è solo un soggetto troppo piccolo: avvicinati.',
    principle: 'figura'
  },
  {
    id: 'riempi',
    num: '08',
    title: 'Riempi il fotogramma',
    body: 'Avvicinati finché il soggetto domina e il resto sparisce. Togli sfondo e distrazioni e mostra ciò che da lontano non si vede: una mano, uno sguardo, una texture. Chi guarda non ha dubbi su cosa guardare.',
    breakIt: 'Quando il contesto è parte del racconto, un ambiente intero dice più di un dettaglio.',
    principle: 'pregnanza'
  },
  {
    id: 'dispari',
    num: '09',
    title: 'Regola dei dispari',
    body: 'Tre elementi, cinque, sette: gli insiemi dispari sembrano più naturali di quelli pari, perché c’è sempre un elemento centrale e gli altri lo accompagnano. È un’euristica, non una legge: serve a sciogliere le composizioni troppo rigide.',
    breakIt: 'Una coppia è già una relazione: due persone che si guardano non hanno bisogno di un terzo.',
    principle: 'vicinanza'
  }
];
