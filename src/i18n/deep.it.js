// Schede di approfondimento in italiano. Una per regola, una per principio della Gestalt.
// Convenzione editoriale: niente trattini come punteggiatura, solo due punti, virgole, frasi separate.
// Struttura di ogni sezione: { t: titolo, p: [paragrafi] } oppure { t: titolo, li: [voci] }.

export const DEEP = {
  terzi: {
    kind: "rule",
    title: "Regola dei terzi",
    sections: [
      { t: "Cos’è", p: [
        "Immagina di tracciare sul mirino due linee verticali e due orizzontali, alla stessa distanza tra loro: il fotogramma si divide in nove rettangoli uguali. Le quattro linee sono le linee di forza, i quattro incroci sono i punti di forza. La regola suggerisce di collocare il soggetto principale su uno di quei punti, e gli elementi lineari, come l’orizzonte, un palo o il profilo di un edificio, lungo una delle linee.",
        "Il nome compare per la prima volta nel 1797, in un trattato sulla pittura di paesaggio di John Thomas Smith. È nata per i pittori: la fotografia l’ha ereditata."
      ] },
      { t: "Perché funziona", p: [
        "Un soggetto al centro divide l’immagine in due metà uguali: l’occhio arriva, trova equilibrio e si ferma. Spostato su un terzo, il soggetto crea uno squilibrio controllato: da una parte c’è il peso, dall’altra lo spazio.",
        "Quello spazio non è vuoto. Diventa direzione, attesa, contesto. Lo sguardo è costretto a muoversi tra soggetto e ambiente, e un’immagine che fa muovere l’occhio trattiene chi guarda più a lungo."
      ] },
      { t: "Come usarla sul campo", li: [
        "Decidi prima qual è il soggetto. Senza un soggetto chiaro nessuna griglia ti salva.",
        "Scegli l’incrocio in base alla direzione: chi guarda o cammina verso destra va messo a sinistra, così ha spazio davanti a sé.",
        "Orizzonte sulla linea bassa se il cielo racconta qualcosa, sulla linea alta se racconta la terra.",
        "Nel ritratto il punto da mettere sull’incrocio è l’occhio più vicino all’obiettivo, non il centro del viso.",
        "In Rules il cerchio verde acqua conferma quando il soggetto cade su un punto di forza."
      ] },
      { t: "Errori tipici", li: [
        "Applicarla a tutto: venti foto con il soggetto sempre in alto a destra diventano una formula.",
        "Spostare il soggetto lasciando dall’altra parte uno spazio senza funzione. Il vuoto deve dire qualcosa.",
        "Dimenticare i bordi: un elemento tagliato a metà sul margine pesa più del soggetto sul terzo.",
        "Credere che basti. Una composizione corretta di un momento senza interesse resta una foto senza interesse."
      ] },
      { t: "Quando infrangerla", p: [
        "La simmetria è il caso più evidente: architetture frontali, riflessi nell’acqua, corridoi, ritratti in cui il soggetto ti fissa. Lì il centro trasmette stabilità, solennità, confronto diretto.",
        "Si infrange anche quando si vuole disagio: un soggetto schiacciato contro il bordo crea tensione, ed è una scelta legittima. Tra errore e scelta c’è una sola differenza: sapere perché."
      ] }
    ],
    exercise: "Scegli un soggetto fermo: una panchina, un albero, una porta. Scatta quattro foto, una per ciascun punto di forza, poi una quinta con il soggetto al centro. A casa confrontale e scrivi una riga su cosa cambia in ognuna. Scoprirai che i quattro punti non sono equivalenti: dipende da dove arriva la luce e da cosa c’è intorno."
  },

  phi: {
    kind: "rule",
    title: "Griglia phi",
    sections: [
      { t: "Cos’è", p: [
        "La griglia phi divide il fotogramma come i terzi, ma con proporzioni diverse. Le linee non cadono a 0,333 e 0,666 del lato, ma a 0,382 e 0,618.",
        "Questi numeri vengono dalla sezione aurea, il rapporto di circa 1 a 1,618 che la geometria studia da più di duemila anni. Il risultato è una griglia con il riquadro centrale più stretto e i quattro punti di forza più vicini al centro."
      ] },
      { t: "Perché funziona", p: [
        "Rispetto ai terzi, la griglia phi produce composizioni più raccolte. Il soggetto non è al centro, quindi conserva la dinamica dello squilibrio, ma non viene spinto verso i margini. È un compromesso tra la stabilità della simmetria e il movimento dei terzi.",
        "Va detto con onestà: non esistono prove solide che la sezione aurea venga percepita come più bella di altre proporzioni. La griglia phi è utile non perché sia magica, ma perché offre un’alternativa più contenuta."
      ] },
      { t: "Come usarla sul campo", li: [
        "Usala quando il soggetto è grande nel fotogramma, un volto o una figura vicina: sui terzi rischierebbe di toccare i bordi.",
        "Funziona bene con le focali lunghe e gli sfondi sfocati, dove l’immagine vive soprattutto del soggetto.",
        "Nei formati quadrato e 4:5 la differenza con i terzi è minima: non perderci tempo.",
        "Ragiona per scarto: inquadra sui terzi, poi stringi leggermente verso il centro e confronta."
      ] },
      { t: "Errori tipici", li: [
        "Confonderla con la spirale aurea: nascono dallo stesso numero, ma sono strumenti diversi.",
        "Usarla per una presunta superiorità estetica. È una variante, non una versione migliorata dei terzi.",
        "Misurare al millimetro: sul mirino la differenza tra 0,333 e 0,382 è di pochi millimetri. Conta la sensazione, non il righello."
      ] },
      { t: "Quando infrangerla", p: [
        "Un soggetto piccolo in un grande spazio, una figura sola sulla spiaggia, una barca in mare aperto, chiede l’opposto: margini ampi e distanza dal centro. Lì la griglia phi stringe troppo, e i terzi, o un’ancora ancora più decentrata, lasciano respirare la scena."
      ] }
    ],
    exercise: "Fotografa la stessa persona a mezzo busto due volte: prima con gli occhi sul punto di forza dei terzi, poi spostati di poco verso il centro, come chiede la griglia phi. Riguarda le due immagini il giorno dopo e annota quale ti sembra più intima e quale più narrativa."
  },

  spirale: {
    kind: "rule",
    title: "Spirale aurea",
    sections: [
      { t: "Cos’è", p: [
        "Prendi un rettangolo in proporzione aurea e ritaglia al suo interno un quadrato: ciò che resta è un nuovo rettangolo aureo, più piccolo. Ripeti il taglio più volte e unisci con un arco gli angoli dei quadrati: ottieni una spirale che si avvolge su un punto.",
        "In fotografia la si sovrappone al fotogramma come guida. Il soggetto va nel punto in cui la spirale si chiude, l’occhio, e gli altri elementi della scena dovrebbero seguire la curva verso di esso. La spirale si può orientare in quattro versi, e anche ribaltare, a seconda di dove si trova il soggetto."
      ] },
      { t: "Perché funziona", p: [
        "Quando funziona, è perché la scena contiene già un percorso curvo: una strada che piega, una scala a chiocciola, la linea di una schiena, un’onda. L’occhio segue quel percorso come un binario e arriva al soggetto senza fatica.",
        "La spirale non crea il movimento: lo rende visibile e ti aiuta a mettere il soggetto alla fine del tragitto."
      ] },
      { t: "Come usarla sul campo", li: [
        "Cerca prima la curva nella scena. Se non c’è, lascia stare la spirale.",
        "Individua dove finisce il percorso: è lì che deve stare il soggetto.",
        "Muoviti tu, non solo l’inquadratura. Spesso basta un passo laterale perché la curva parta da un angolo del fotogramma.",
        "Funziona con architetture, paesaggi con fiumi o sentieri, ritratti a figura intera con pose morbide."
      ] },
      { t: "Errori tipici", li: [
        "Disegnare la spirale sopra una foto già scattata e dichiarare che «ci sta dentro». Con un po’ di fantasia ci sta dentro qualsiasi cosa: è il trucco più diffuso nei video sulla composizione.",
        "Considerarla una legge della natura. La sezione aurea compare in alcune strutture naturali, ma molto meno di quanto si racconti.",
        "Forzare il soggetto nell’occhio della spirale anche quando la luce dice altro."
      ] },
      { t: "Quando infrangerla", p: [
        "Nelle scene costruite su linee rette e ritmi geometrici, griglie urbane, facciate, file di finestre, la spirale non ha appigli. Lì servono simmetria, diagonali o ripetizione. Come ogni guida, la spirale è utile solo se la scena le somiglia."
      ] }
    ],
    exercise: "Per un’uscita intera fotografa solo scene che contengono una curva vera: una scala, un fiume, un ponte, una strada di montagna. Per ognuna decidi dove finisce la curva e metti lì qualcosa o qualcuno. Se dopo un’ora non hai trovato curve, anche questo è un insegnamento: la spirale non si impone, si trova."
  },

  piani: {
    kind: "rule",
    title: "I piani",
    sections: [
      { t: "Cos’è", p: [
        "Una fotografia è piatta: ha due dimensioni. La profondità è un’illusione che costruiamo disponendo gli elementi su più livelli di distanza: il primo piano, vicino all’obiettivo; il piano intermedio, dove spesso sta il soggetto; lo sfondo, che chiude la scena.",
        "Quando questi livelli sono riconoscibili, l’occhio li percorre come se camminasse dentro l’immagine."
      ] },
      { t: "Perché funziona", p: [
        "Il cervello stima la distanza attraverso alcuni indizi. Gli oggetti vicini appaiono più grandi, coprono quelli lontani, sono più nitidi e più contrastati; quelli lontani si schiariscono e si raffreddano per effetto della foschia.",
        "Una foto che offre questi indizi su tre livelli restituisce profondità e scala: capisci quanto è grande la montagna perché vedi la persona davanti. Il primo piano fa da soglia: chi guarda ha la sensazione di essere lì, appena dietro l’obiettivo."
      ] },
      { t: "Come usarli sul campo", li: [
        "Prima di scattare chiediti: cosa c’è davanti, cosa c’è in mezzo, cosa c’è dietro? Se uno dei tre manca, valuta se ti serve.",
        "Abbassati: a pochi centimetri da terra un sasso, un fiore, una pozzanghera diventano primo piano.",
        "Con il grandangolare il primo piano si ingrandisce e la profondità si esaspera; con il teleobiettivo i piani si comprimono uno sull’altro. Sono due linguaggi diversi.",
        "Usa la luce: un primo piano in ombra e un soggetto in luce separano i livelli meglio di qualsiasi diaframma.",
        "Decidi su quale piano mettere a fuoco: è lì che porti l’attenzione."
      ] },
      { t: "Errori tipici", li: [
        "Il primo piano messo per dovere: un ramo o un sasso senza relazione con il soggetto distrae invece di accompagnare.",
        "Piani che si sovrappongono male, come una testa da cui sembra spuntare un palo dello sfondo.",
        "Troppi livelli tutti nitidi e tutti importanti: l’occhio non sa dove fermarsi."
      ] },
      { t: "Quando infrangerla", p: [
        "Il piano unico, frontale, senza profondità, è una scelta forte e piena di storia. Luigi Ghirri ha costruito una poetica sulle superfici piatte, sui muri, sulle facciate guardate di fronte: lì l’immagine smette di essere una finestra e diventa una superficie da leggere.",
        "Anche la fotografia di architettura e il ritratto su fondale scelgono spesso un solo piano."
      ] }
    ],
    exercise: "Trova un soggetto e fotografalo tre volte: una con solo soggetto e sfondo, una con un primo piano scelto da te, una scendendo all’altezza delle ginocchia. Confronta la sensazione di profondità e chiediti quale primo piano aggiunge senso e quale si limita a riempire."
  },

  figura: {
    kind: "gestalt",
    title: "Figura e sfondo",
    sections: [
      { t: "Cos’è", p: [
        "È il principio più elementare della percezione. Davanti a qualsiasi scena il cervello separa subito la figura, la cosa da guardare, dallo sfondo, tutto il resto. Lo studiò nel 1915 lo psicologo danese Edgar Rubin, quello del celebre vaso che si trasforma in due profili.",
        "La figura sembra stare davanti e avere una forma definita; lo sfondo sembra continuare dietro, senza confini. Se in una fotografia questa separazione non avviene, chi guarda non sa dove posare l’occhio."
      ] },
      { t: "Perché funziona", p: [
        "La figura si stacca per differenza. Il cervello cerca contrasti: di luminosità, chiaro su scuro o il contrario; di colore, un rosso in un campo verde; di nitidezza, un soggetto a fuoco su uno sfondo sfocato; di texture, di dimensione, di movimento.",
        "Più differenze si sommano, più la figura emerge senza sforzo."
      ] },
      { t: "Come usarlo sul campo", li: [
        "Prima di guardare il soggetto, guarda lo sfondo. È lì che si vincono o si perdono la maggior parte delle foto.",
        "Cerca un fondo uniforme o in ombra dietro un soggetto illuminato: è la separazione più potente che esista.",
        "Se lo sfondo è caotico cambia punto di vista: un passo di lato, o un’inquadratura dal basso che mette il soggetto contro il cielo.",
        "Socchiudi gli occhi finché la scena diventa macchie. Se il soggetto resta una macchia distinta, la figura funziona.",
        "Il diaframma aperto aiuta, ma non sostituisce la scelta dello sfondo."
      ] },
      { t: "Errori tipici", li: [
        "Soggetto e sfondo dello stesso tono: una persona vestita di scuro contro un muro scuro scompare.",
        "Uno sfondo più interessante del soggetto: un cartellone colorato, una luce forte, una scritta leggibile rubano l’attenzione.",
        "Affidarsi solo allo sfocato. Uno sfondo sfocato ma pieno di macchie luminose resta rumoroso."
      ] },
      { t: "Quando infrangerlo", p: [
        "L’ambiguità tra figura e sfondo può essere il soggetto stesso dell’immagine. Molta fotografia astratta e di strada gioca sullo scambio: ombre che diventano figure, persone che si confondono con un muro. Funziona quando è voluta, e quando l’ambiguità è proprio ciò che vuoi far provare."
      ] }
    ],
    exercise: "Per una settimana, prima di ogni scatto, guarda solo lo sfondo per tre secondi. Poi scatta due versioni dello stesso soggetto: una con lo sfondo che capita, una dopo esserti spostato per trovarne uno pulito. Il confronto ti insegnerà più di qualsiasi teoria."
  },

  vicinanza: {
    kind: "gestalt",
    title: "Vicinanza",
    sections: [
      { t: "Cos’è", p: [
        "Elementi vicini tra loro vengono percepiti come un gruppo, anche se sono diversi. È uno dei principi formulati dagli psicologi della Gestalt, a Berlino, nei primi decenni del Novecento.",
        "Sei punti disposti in due gruppi da tre non vengono letti come sei punti, ma come due gruppi. In fotografia vale per persone, oggetti, finestre, alberi: la distanza tra le cose è informazione."
      ] },
      { t: "Perché funziona", p: [
        "Il cervello semplifica: invece di elaborare ogni elemento da solo, raggruppa ciò che sta vicino e lo tratta come un’unità.",
        "Con le persone il meccanismo diventa racconto. Due figure vicine sembrano in relazione; una figura lontana dalle altre sembra esclusa, sola, diversa. Chi guarda costruisce una storia a partire dagli spazi, prima ancora di leggere volti ed espressioni."
      ] },
      { t: "Come usarla sul campo", li: [
        "Nella fotografia di strada osserva le distanze: il momento giusto è spesso quello in cui due figure si avvicinano, o in cui una si stacca dal gruppo.",
        "Uno spazio vuoto tra due gruppi divide l’immagine in due racconti. Usalo quando vuoi un confronto.",
        "La vicinanza in foto dipende dal punto di vista: due persone lontane metri possono sovrapporsi con il teleobiettivo. Spostandoti puoi creare o rompere un gruppo.",
        "Nel ritratto di gruppo la distanza tra i corpi dice chi è legato a chi. Non metterli in fila per abitudine."
      ] },
      { t: "Errori tipici", li: [
        "Elementi sparsi a distanze tutte uguali: l’occhio non trova gruppi né gerarchie e l’immagine sembra un elenco.",
        "Fusioni involontarie: un soggetto troppo vicino a un oggetto estraneo sembra farne parte.",
        "Ignorare il fuori campo: tagliare una persona che appartiene al gruppo crea una mancanza che pesa."
      ] },
      { t: "Quando infrangerla", p: [
        "Una distribuzione regolare può essere proprio il soggetto: persone su una spiaggia viste dall’alto, sedie in una piazza vuota. Il ritmo prende il posto del gruppo. Anche lì, però, basta un elemento fuori posto per farlo diventare protagonista."
      ] }
    ],
    exercise: "Siediti in un luogo frequentato, una piazza o una stazione, e scatta solo quando le distanze tra le persone raccontano qualcosa: una coppia, qualcuno escluso, due gruppi che si guardano. Alla fine scegli tre immagini e descrivi la relazione che suggeriscono, senza guardare i volti."
  },

  somiglianza: {
    kind: "gestalt",
    title: "Somiglianza",
    sections: [
      { t: "Cos’è", p: [
        "Elementi simili per forma, colore, dimensione, texture o orientamento vengono percepiti come parte dello stesso insieme, anche se sono lontani nel fotogramma.",
        "Tre cappotti rossi in tre punti diversi della scena vengono collegati dall’occhio, come se tra loro ci fosse una linea invisibile."
      ] },
      { t: "Perché funziona", p: [
        "Il cervello cerca regolarità per risparmiare energia: ciò che si ripete viene letto come uno schema. Ne derivano due effetti utili.",
        "Il primo è il ritmo: forme simili che si ripetono, archi, finestre, ombrelli, creano una cadenza piacevole da percorrere. Il secondo è il contrasto: dentro uno schema l’elemento diverso salta all’occhio con una forza enorme. Per questo un solo ombrello rosso in una folla di ombrelli neri diventa subito il soggetto."
      ] },
      { t: "Come usarla sul campo", li: [
        "Cerca le ripetizioni: colonne, sedie, finestre, persone con lo stesso gesto. Sono il tappeto su cui costruire.",
        "Poi cerca, o aspetta, l’eccezione: una figura che rompe il ritmo, un colore che non c’entra.",
        "Usa il colore come collante: se nella scena c’è un rosso dominante, un secondo rosso lontano crea un legame e fa viaggiare l’occhio.",
        "Nel bianco e nero la somiglianza passa da toni e forme: due macchie chiare si chiamano tra loro."
      ] },
      { t: "Errori tipici", li: [
        "Ripetizioni involontarie: un secondo elemento simile al soggetto, sul bordo, divide lo sguardo in due.",
        "Ritmo senza eccezione: una facciata perfettamente ripetuta è decorazione, non ancora fotografia.",
        "Colori casuali ovunque: senza somiglianze l’immagine non ha struttura e sembra rumorosa."
      ] },
      { t: "Quando infrangerla", p: [
        "Quando il caos è il tema, un mercato, una festa, una folla, l’assenza di schemi restituisce l’energia del luogo. Anche lì, spesso, la foto migliore è quella in cui dentro il caos si intravede una piccola ripetizione, un gesto o un colore che guida l’occhio."
      ] }
    ],
    exercise: "Scegli un colore per un’intera uscita. Fotografa solo scene in cui quel colore compare almeno due volte, in punti diversi del fotogramma. Poi fai una seconda serie in cui compare una volta sola, come eccezione dentro uno schema. Sono due modi di usare lo stesso principio."
  },

  continuita: {
    kind: "gestalt",
    title: "Continuità",
    sections: [
      { t: "Cos’è", p: [
        "L’occhio segue linee e curve nella direzione in cui procedono, e percepisce come un’unica forma ciò che si allinea, anche quando è interrotto.",
        "Una strada, un corrimano, il bordo di un marciapiede, la direzione di uno sguardo o di un braccio teso: sono tutti binari su cui lo sguardo scivola."
      ] },
      { t: "Perché funziona", p: [
        "Il cervello preferisce i percorsi lisci e prevedibili alle deviazioni brusche: segue una linea finché può, e immagina che continui anche dove è nascosta.",
        "In fotografia significa che le linee decidono il percorso di lettura. Chi guarda entra dove la linea comincia ed esce dove finisce: se alla fine c’è il soggetto, l’immagine porta lì senza bisogno d’altro. Vale anche per le linee implicite: lo sguardo di una persona crea una direzione che l’occhio di chi osserva segue."
      ] },
      { t: "Come usarla sul campo", li: [
        "Fai entrare le linee da un angolo o dal bordo basso: è il punto da cui si comincia a leggere.",
        "Controlla dove portano: verso il soggetto, non fuori dal fotogramma.",
        "Le diagonali danno movimento, le orizzontali calma, le verticali forza e altezza. Scegli in base a ciò che vuoi trasmettere.",
        "Lascia spazio nella direzione dello sguardo o del movimento: la linea implicita ha bisogno di proseguire dentro l’immagine.",
        "Con il grandangolare le linee che si allontanano convergono e accentuano la profondità."
      ] },
      { t: "Errori tipici", li: [
        "Linee che portano fuori dal fotogramma, verso un angolo vuoto: l’occhio esce e non torna.",
        "Linee che tagliano il soggetto, come un orizzonte che attraversa la testa di una persona.",
        "Troppe linee in direzioni diverse: si contendono lo sguardo e nessuna conduce da nessuna parte."
      ] },
      { t: "Quando infrangerla", p: [
        "Una linea che si interrompe o che esce dal campo può creare inquietudine e mistero: una strada che sparisce dietro una curva lascia chi guarda in attesa. È una scelta narrativa precisa, utile quando vuoi che l’immagine faccia una domanda invece di dare una risposta."
      ] }
    ],
    exercise: "Fotografa per un’ora solo linee che conducono a qualcosa: una porta, una persona, una finestra illuminata. Per ogni scatto annota da dove entra l’occhio e dove arriva. Poi ripeti una scena aspettando che qualcuno si trovi alla fine della linea: vedrai la differenza tra una foto di linee e una foto con un soggetto."
  },

  chiusura: {
    kind: "gestalt",
    title: "Chiusura",
    sections: [
      { t: "Cos’è", p: [
        "Davanti a una forma incompleta, il cervello la completa da solo. Un cerchio interrotto viene visto come un cerchio; un volto per metà in ombra viene letto come un volto intero; una figura tagliata dal bordo continua, nella mente di chi guarda, oltre il limite della foto.",
        "Chi osserva aggiunge ciò che manca, senza accorgersene."
      ] },
      { t: "Perché funziona", p: [
        "Il cervello non sopporta le forme aperte: tende a chiuderle per riconoscerle in fretta. In fotografia questo trasforma chi guarda in partecipante.",
        "Ciò che non mostri lo fa immaginare, e ciò che si immagina coinvolge più di ciò che si vede. Per questo un dettaglio spesso racconta più di una scena intera, e un’ombra più di un corpo illuminato."
      ] },
      { t: "Come usarla sul campo", li: [
        "Togli invece di aggiungere: chiediti quale parte del soggetto basta a suggerire il tutto.",
        "Usa le ombre: lasciare metà di un volto nel buio non nasconde, suggerisce.",
        "Se tagli, taglia con decisione: porzioni ampie sì, articolazioni no. Un taglio deciso sembra una scelta, uno timido sembra un errore.",
        "Sfrutta le cornici naturali: una porta, una finestra, un arco racchiudono il soggetto e completano la forma.",
        "Il fuori campo esiste: una mano che entra dal bordo, l’ombra di qualcuno che non si vede, fanno immaginare una presenza."
      ] },
      { t: "Errori tipici", li: [
        "Tagliare per sbaglio: piedi amputati, la sommità della testa mozzata. Il cervello non completa, registra un errore.",
        "Togliere troppo: se mancano gli indizi necessari la forma non si chiude e l’immagine diventa illeggibile.",
        "Confondere suggestione e buio. Un’immagine scura senza un punto di riconoscimento non suggerisce nulla."
      ] },
      { t: "Quando infrangerla", p: [
        "Quando l’obiettivo è la chiarezza, documentazione, fotografia di prodotto, ritratto ufficiale, la forma deve essere intera e leggibile. Anche nel reportage, a volte, mostrare tutto è un atto di onestà: chi guarda deve poter vedere senza dover immaginare."
      ] }
    ],
    exercise: "Fotografa la stessa persona, o lo stesso oggetto, mostrandone ogni volta meno: intera, a metà, solo una mano, solo un’ombra. Fermati quando non è più riconoscibile. Il penultimo scatto, quello in cui si capisce ancora, è spesso il più interessante."
  },

  pregnanza: {
    kind: "gestalt",
    title: "Pregnanza",
    sections: [
      { t: "Cos’è", p: [
        "È il principio che riassume tutti gli altri. Davanti a un’immagine il cervello sceglie sempre l’interpretazione più semplice, regolare e stabile possibile. In tedesco si chiama Prägnanz, la buona forma.",
        "Un cerchio e un quadrato sovrapposti vengono letti come due figure semplici, non come una forma complicata. In fotografia significa che le immagini più forti sono quasi sempre quelle che si capiscono al primo sguardo."
      ] },
      { t: "Perché funziona", p: [
        "L’occhio legge una fotografia in una frazione di secondo, molto prima di analizzarla. Se in quel primo istante trova una struttura chiara, un soggetto, una forma, un contrasto, l’immagine si imprime. Se trova confusione, chi guarda passa oltre.",
        "La semplicità non è povertà: è la condizione perché l’immagine arrivi, e solo dopo si apra alle letture più profonde."
      ] },
      { t: "Come usarla sul campo", li: [
        "Prima di scattare prova a descrivere la foto in una frase. Se non ci riesci, l’immagine è ancora confusa.",
        "Elimina: ogni elemento nel fotogramma deve avere un motivo per esserci. Se non ce l’ha, avvicinati, cambia focale o punto di vista.",
        "Cerca forme semplici: triangoli, cerchi, diagonali nette, masse chiare e scure ben distinte.",
        "Riduci i colori: due o tre tonalità dominanti valgono più di un arcobaleno.",
        "Socchiudi gli occhi: se la scena ridotta a macchie ha una struttura riconoscibile, l’immagine regge."
      ] },
      { t: "Errori tipici", li: [
        "Confondere semplicità e vuoto: una foto minimalista senza un’idea è solo una foto vuota.",
        "Voler mettere tutto, paesaggio, persona, cielo, dettaglio: il risultato è un inventario.",
        "Semplificare troppo tardi. In postproduzione si può ritagliare, ma non si può aggiungere ciò che non si è visto sul campo."
      ] },
      { t: "Quando infrangerla", p: [
        "Alcune immagini vivono di complessità: scene affollate in cui a ogni lettura l’occhio scopre un dettaglio nuovo. Funzionano quando dentro il caos c’è comunque un ordine, un punto di partenza, una gerarchia. La complessità riuscita è una semplicità più difficile da trovare."
      ] }
    ],
    exercise: "Per un’uscita intera scatta solo immagini con al massimo tre elementi riconoscibili. Contali prima di premere il pulsante. Al ritorno scegli la foto più semplice e quella più ricca, e chiediti quale ricorderai tra un mese."
  }
};
