export const ESSENZIALE_SECTIONS = [
	{
		id: 'destinazione',
		number: '01',
		shortTitle: 'Destinazione e Alloggio',
		subtitle: 'Parigi & La nostra casa',
	},
	{
		id: 'voli',
		number: '02',
		shortTitle: 'I nostri voli',
		subtitle: 'ITA Airways • Andata e Ritorno',
	},
	{
		id: 'valigia',
		number: '03',
		shortTitle: 'Cosa mettere in valigia',
		subtitle: 'Checklist interattiva',
	},
	{
		id: 'disneyland',
		number: '04',
		shortTitle: 'Disneyland Paris',
		subtitle: 'Venerdì 2 luglio 2027',
	},
	{
		id: 'regalo',
		number: '05',
		shortTitle: 'Un regalo nel regalo',
		subtitle: 'Sabato 3 luglio 2027',
		isSecret: true,
	},
]

export const PARIS_HERO = {
	image: '/image/eiffel-tower-3.jeg.jpg',
	alt: 'Torre Eiffel al tramonto su Parigi',
	title: 'PARIGI',
	eyebrow: 'DESTINAZIONE • 1 – 5 LUGLIO 2027',
	intro: 'La città delle luci, delle passeggiate mano nella mano e dei tramonti dorati lungo la Senna.',
	description:
		'Dal 1° al 5 luglio 2027 Parigi sarà il cuore del nostro viaggio: quattro notti tra viali alberati, monumenti senza tempo, caffè d’angolo e scorci che restano per sempre nei ricordi.',
}

export const PARIS_GALLERY = [
	{
		src: '/image/paris-louvre.jpg.jpg',
		title: 'Museo del Louvre',
		subtitle: 'Arte e storia nel cuore della città',
		description:
			'La celebre Piramide di vetro si riflette nei cortili del palazzo reale, porta d’accesso a secoli di capolavori e scenografie monumentali.',
	},
	{
		src: '/image/montmartre-base-cinematic.jpg.jpg',
		title: 'Montmartre',
		subtitle: 'Il quartiere degli artisti',
		description:
			'Scalinate romantiche, piazzette raccolte e vicoli in salita che regalano l’atmosfera più autentica e bohémien di tutta Parigi.',
	},
	{
		src: '/image/eiffel-tower-..jpg',
		title: 'Torre Eiffel',
		subtitle: 'Il simbolo eterno di Parigi',
		description:
			'Un profilo inconfondibile che svetta nel cielo parigino, pronto a sorprenderci dal basso dei giardini fino alle sue luci serali.',
	},
	{
		src: '/image/arco-con-vista-torre-eiffel.JPG.jpg',
		title: 'Arco e vista sulla Torre Eiffel',
		subtitle: 'Prospettive parigine',
		description:
			'Uno sguardo incorniciato dall’architettura classica verso la Torre Eiffel, dove ogni scorcio sembra uscito da una pellicola cinematografica.',
	},
	{
		src: '/image/paris-seine.jpg.jpg',
		title: 'Senna',
		subtitle: 'Il fiume che abbraccia la città',
		description:
			'Ponti storici, lungofiume alberati e riflessi d’acqua al tramonto per rallentare il passo e godersi la magia della capitale.',
	},
	{
		src: '/image/paris-notredame.jpg.jpg',
		title: 'Notre-Dame',
		subtitle: 'Nel cuore dell’Île de la Cité',
		description:
			'Tra guglie gotiche e rosoni leggendari, la cattedrale custodisce l’anima storica di Parigi fin dal Medioevo.',
	},
	{
		src: '/image/paris-quartier-latin.jpg.jpg',
		title: 'Quartiere Latino',
		subtitle: 'Librerie storiche e bistrot',
		description:
			'Stradine vivaci sulla Rive Gauche tra facciate eleganti, profumo di croissant e serate illuminate dalle insegne dei bistrot.',
	},
]

export const HOUSE_GALLERY = [
	{
		src: '/image/casa-1.jpeg',
		title: 'La nostra casa a Parigi — Vista 1',
		subtitle: '84 Rue du Mont-Cenis • Montmartre',
		description: 'Un ambiente accogliente pensato per rilassarci dopo le nostre giornate tra le vie di Parigi.',
	},
	{
		src: '/image/casa-2.jpeg',
		title: 'La nostra casa a Parigi — Vista 2',
		subtitle: 'Spazi curati e luminosi',
		description: 'Dettagli caldi e funzionali per sentirci subito a casa durante le quattro notti del soggiorno.',
	},
	{
		src: '/image/casa-3.jpeg',
		title: 'La nostra casa a Parigi — Vista 3',
		subtitle: 'Comfort nel 18° arrondissement',
		description: 'Il punto di partenza ideale per esplorare Montmartre e raggiungere facilmente tutta la città.',
	},
	{
		src: '/image/casa-4.jpeg',
		title: 'La nostra casa a Parigi — Vista 4',
		subtitle: 'Il nostro rifugio parigino',
		description: 'Tutto pronto per accoglierci dal giovedì pomeriggio fino al rientro di lunedì mattina.',
	},
]

export const ACCOMMODATION_INFO = {
	address: '84 Rue du Mont-Cenis, 75018 Paris, Francia',
	checkIn: 'Giovedì 1 luglio 2027, ore 16:00',
	checkOut: 'Lunedì 5 luglio 2027, ore 11:00',
	duration: '4 notti',
	notices: [
		'Non è disponibile il deposito bagagli prima del check-in o dopo il check-out.',
		'Non è disponibile il parcheggio presso la struttura.',
		'Struttura non fumatori.',
	],
}

export const FLIGHTS_DATA = {
	airline: 'ITA Airways',
	heroImage: '/image/aereo-linea.jpg.jpg',
	passengersLabel: '2 passeggeri — Viaggiamo insieme',
	outbound: {
		dateLabel: 'ANDATA — GIOVEDÌ 1 LUGLIO 2027',
		firstLeg: {
			flightNumber: 'AZ1278',
			fromCity: 'Napoli Capodichino',
			fromCode: 'NAP',
			toCity: 'Milano Linate',
			toCode: 'LIN',
			departureTime: '06:20',
			arrivalTime: '07:40',
			timeRange: '06:20 – 07:40',
		},
		layover: {
			airport: 'Milano Linate (LIN)',
			label: 'Coincidenza a Milano',
			waitTime: '07:40 → 08:30 (50 min)',
		},
		secondLeg: {
			flightNumber: 'AZ350',
			fromCity: 'Milano Linate',
			fromCode: 'LIN',
			toCity: 'Parigi Orly',
			toCode: 'ORY',
			departureTime: '08:30',
			arrivalTime: '09:55',
			timeRange: '08:30 – 09:55',
		},
	},
	inbound: {
		dateLabel: 'RITORNO — LUNEDÌ 5 LUGLIO 2027',
		firstLeg: {
			flightNumber: 'AZ325',
			fromCity: 'Parigi Charles de Gaulle',
			fromCode: 'CDG',
			toCity: 'Roma Fiumicino',
			toCode: 'FCO',
		},
		connection: {
			label: 'Successiva coincidenza',
			route: 'Roma Fiumicino (FCO) → Napoli (NAP)',
			expectedArrival: 'Arrivo previsto a Napoli: ore 22:40',
		},
	},
	baggage: [
		{
			id: 'trolley',
			name: 'TROLLEY',
			dimensions: '55 × 40 × 23 cm',
			perPersonNote: '1 per ciascuno dei 2 viaggiatori',
		},
		{
			id: 'zaino',
			name: 'ZAINO',
			dimensions: '40 × 30 × 15 cm',
			perPersonNote: '1 per ciascuno dei 2 viaggiatori',
		},
	],
}

export const PACKING_CATEGORIES = [
	{
		id: 'documenti',
		title: 'DOCUMENTI',
		image: '/image/documenti-.jpg.JPG',
		imageAlt: 'Documenti di viaggio pronti per la partenza',
		items: [
			{ id: 'doc-1', label: "Carta d'identità valida per l'espatrio" },
			{ id: 'doc-2', label: 'Documenti di viaggio' },
			{ id: 'doc-3', label: "Carte d'imbarco" },
			{ id: 'doc-4', label: 'Conferme delle prenotazioni' },
		],
	},
	{
		id: 'elettronica',
		title: 'ELETTRONICA',
		image: '/image/power-bank-.png.png',
		imageAlt: 'Power bank e dispositivi elettronici per il viaggio',
		items: [
			{ id: 'ele-1', label: 'Smartphone' },
			{ id: 'ele-2', label: 'Power bank' },
			{ id: 'ele-3', label: 'Caricabatterie' },
			{ id: 'ele-4', label: 'Cavi di ricarica' },
			{ id: 'ele-5', label: 'Altri accessori utili' },
		],
	},
	{
		id: 'abbigliamento',
		title: 'ABBIGLIAMENTO',
		image: '/image/valigia-.jpg.jpg',
		imageAlt: 'Valigia pronta per il viaggio a Parigi',
		items: [
			{ id: 'abb-1', label: 'Vestiti per i giorni del viaggio' },
			{ id: 'abb-2', label: 'Intimo e calze' },
			{ id: 'abb-3', label: 'Pigiama' },
			{ id: 'abb-4', label: 'Scarpe comode' },
			{ id: 'abb-5', label: 'Giacca o indumenti adatti al clima' },
		],
	},
]

export const SPECIAL_EVENING_CATEGORY = {
	id: 'serata-speciale',
	badge: 'SERATA SPECIALE',
	title: 'UN OUTFIT ELEGANTE',
	subtitle: 'Prepara qualcosa di davvero speciale in valigia per una sera indimenticabile.',
	items: [
		{ id: 'ser-1', label: 'Vestito elegante' },
		{ id: 'ser-2', label: 'Scarpe eleganti' },
		{ id: 'ser-3', label: 'Accessori' },
		{ id: 'ser-4', label: 'Tutto il necessario per una serata speciale' },
	],
}

export const DISNEYLAND_DATA = {
	title: 'UNA GIORNATA DA FAVOLA',
	dateLabel: 'Venerdì 2 luglio 2027',
	intro:
		'Una giornata intera immersi nella magia Disney: venerdì 2 luglio esploreremo entrambi i parchi di Disneyland Paris tra castelli incantati, mondi cinematografici ed emozioni da vivere insieme.',
	castleSpotlight: {
		title: 'Il Castello della Bella Addormentata',
		subtitle: 'Il cuore fiabesco di Disneyland Park',
		dayImage: '/image/castello%20disney.jpg',
		nightImage: '/image/castello%20al%20buoio.jpg',
		description:
			'Con le sue torri rosate e i dettagli dorati, il Castello della Bella Addormentata accoglie i visitatori al centro del parco, trasformandosi dal sogno luminoso del mattino allo spettacolo di luci quando scende la sera.',
	},
	parks: [
		{
			id: 'disneyland-park',
			name: 'Disneyland Park',
			image: '/image/entrata%20parco.jpg',
			description:
				'Il parco classico dove ogni terra tematica racconta una fiaba diversa: da Main Street, U.S.A. fino a Fantasyland, Adventureland, Frontierland e Discoveryland, intorno all’iconico castello.',
		},
		{
			id: 'walt-disney-studios',
			name: 'Walt Disney Studios Park',
			image: '/image/disney-f-2-.jpg.jpg',
			description:
				'Il parco dedicato al grande cinema, all’animazione Pixar e alle avventure più spettacolari, tra set immersivi e attrazioni ricche di adrenalina.',
		},
	],
	gallery: [
		{
			src: '/image/castello%20disney.jpg',
			title: 'Castello della Bella Addormentata',
			subtitle: 'Disneyland Park',
			description: 'Le torri fiabesche che dominano la piazza centrale di Fantasyland.',
		},
		{
			src: '/image/castello%202.jpg',
			title: 'Scorcio sul Castello',
			subtitle: 'Architettura da fiaba',
			description: 'Guglie blu e riflessi dorati nel cuore del regno incantato.',
		},
		{
			src: '/image/castello%203.jpg',
			title: 'Il Castello nel cielo parigino',
			subtitle: 'Panoramica del parco',
			description: 'L’atmosfera incantata lungo i viali che conducono verso la magia.',
		},
		{
			src: '/image/castello%20al%20buoio.jpg',
			title: 'Il Castello illuminato di notte',
			subtitle: 'Magia serale',
			description: 'Proiezioni, colori e luci soffuse che avvolgono il castello al calar della sera.',
		},
		{
			src: '/image/entrata%20parco.jpg',
			title: 'Ingresso di Disneyland Paris',
			subtitle: 'Il grande arco di benvenuto',
			description: 'Il primo passo oltre i cancelli per iniziare una giornata da favola.',
		},
		{
			src: '/image/disney-f-2-.jpg.jpg',
			title: 'Mondi e scenografie Disney',
			subtitle: 'Atmosfera cinematografica',
			description: 'Colori vibranti, scenografie spettacolari e dettagli curati fino all’ultima luce.',
		},
		{
			src: '/image/imm.%20fatina.jpg',
			title: 'Le Fate della Bella Addormentata',
			subtitle: 'Dettagli incantati',
			description: 'Vetrate artistiche e polvere di stelle che richiamano i classici Disney più amati.',
		},
	],
	attractionsAndShows: [
		{
			title: 'Orari di apertura dei parchi',
			status: 'Da aggiornare',
			description: 'Gli orari ufficiali di ingresso ed estensione serale per venerdì 2 luglio 2027 verranno aggiornati a ridosso della partenza.',
		},
		{
			title: 'Attrazioni da scoprire',
			status: 'Da aggiornare',
			description: 'L’elenco definitivo delle attrazioni preferite in entrambi i parchi verrà definito e aggiornato prima del viaggio.',
		},
		{
			title: 'Spettacoli e parate',
			status: 'Da aggiornare',
			description: 'Gli orari di parate diurne, incontri e show serali non sono ancora confermati e saranno aggiornati appena pubblicati.',
		},
	],
	highlights: [
		{
			number: '01',
			title: 'Il primo sguardo al Castello',
			description: 'Varcare l’arco d’ingresso al mattino e camminare lungo Main Street con il Castello davanti agli occhi.',
		},
		{
			number: '02',
			title: 'Due parchi in una sola giornata',
			description: 'Passare dalle atmosfere fiabesche di Disneyland Park al mondo cinematografico dei Walt Disney Studios.',
		},
		{
			number: '03',
			title: 'Le luci della sera',
			description: 'Ritrovarsi sotto il cielo stellato davanti al castello illuminato per chiudere la giornata con un ricordo indelebile.',
		},
	],
}

export const SURPRISE_DATA = {
	title: 'UN REGALO NEL REGALO',
	dateBadge: 'SABATO 3 LUGLIO 2027',
	messageParagraphs: [
		'«Pensavi che Parigi fosse già tutta la sorpresa? C’è ancora qualcosa che non sai…',
		'Per sabato 3 luglio preparati con il tuo vestito più bello. Voglio che sia una serata da ricordare. ❤️»',
	],
	dressCodeReminderTitle: 'Promemoria importante per sabato 3 luglio',
	dressCodeReminderText: 'Porta con te un vestito molto bello ed elegante: tutto il resto rimarrà segreto fino al momento giusto.',
}
