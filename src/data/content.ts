export interface Project {
  id: string;
  title: string;
  category: 'performing-arts' | 'audiovisual' | 'cultural-heritage' | 'events' | 'collaborations';
  categoryLabel: string;
  categoryLabelFr: string;
  description: string;
  descriptionFr: string;
  fullStory: string;
  fullStoryFr: string;
  image: string;
  year: string;
  location: string;
  highlights: string[];
}

export interface NewsArticle {
  id: string;
  title: string;
  titleFr: string;
  date: string;
  category: string;
  categoryFr: string;
  excerpt: string;
  excerptFr: string;
  content: string;
  contentFr: string;
  image: string;
  isFeatured?: boolean;
  author: string;
}

export interface TeamMember {
  name: string;
  role: string;
  roleFr: string;
  bio: string;
  bioFr: string;
  image: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'vietnam-en-scene',
    title: 'Viet Nam en Scène',
    category: 'performing-arts',
    categoryLabel: 'Performing Arts',
    categoryLabelFr: 'Arts Vivants',
    description: 'A week of Vietnamese performing arts in France – theatre, dance, music and traditional arts.',
    descriptionFr: 'Une semaine dédiée aux arts vivants vietnamiens en France – théâtre, danse, musique et arts traditionnels.',
    fullStory: 'Viet Nam en Scène brings together celebrated Vietnamese performers, directors, and traditional master artists for a vibrant week in Paris. Showcasing both classical forms like Tuồng and contemporary experimental dance, the festival serves as a luminous crossroad of cultural dialogue and stage innovation.',
    fullStoryFr: 'Viet Nam en Scène réunit des artistes, metteurs en scène et maîtres traditionnels vietnamiens renommés pour une semaine festive à Paris. Présentant à la fois des formes classiques comme le Tuồng et de la danse expérimentale contemporaine, le festival est un carrefour vivant d’échange culturel.',
    image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=800&q=80',
    year: '2025',
    location: 'Paris, France',
    highlights: ['5 Evening Gala Showcases', 'Traditional Tuồng Masterclass', 'Contemporary Choreography Residency']
  },
  {
    id: 'water-puppetry',
    title: 'Water Puppetry',
    category: 'cultural-heritage',
    categoryLabel: 'Cultural Heritage',
    categoryLabelFr: 'Patrimoine Culturel',
    description: 'Keeping tradition alive, sharing the beauty of Vietnamese water puppetry with the world.',
    descriptionFr: 'Préserver la tradition vivante, partager la beauté des marionnettes sur l’eau avec le monde.',
    fullStory: 'Originating in the Red River Delta over a thousand years ago, Múa rối nước is an art form rooted in rural heritage. Terra Culture Lab collaborates with artisan puppeteers and musicians from northern villages to produce contemporary touring stages and educational workshops abroad.',
    fullStoryFr: 'Né dans le delta du fleuve Rouge il y a plus de mille ans, le Múa rối nước puise sa force dans les traditions rurales. Terra Culture Lab collabore avec des maîtres marionnettistes et musiciens du nord pour créer des scènes itinérantes et des ateliers pédagogiques.',
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
    year: '2024–2025',
    location: 'Hanoi & International Tour',
    highlights: ['Artisan Woodcraft Exhibit', 'Live Folk Bamboo Orchestra', 'Public Interactive Basin Demos']
  },
  {
    id: 'itineraire-de-la-lumiere',
    title: 'Itinéraire de la Lumière',
    category: 'audiovisual',
    categoryLabel: 'Film Program',
    categoryLabelFr: 'Programme Cinéma',
    description: 'A journey through Vietnamese cinema. Screenings, rencontres and inspiring conversations in Paris.',
    descriptionFr: 'Un voyage à travers le cinéma vietnamien. Projections, rencontres et débats inspirants à Paris.',
    fullStory: 'A retrospective and contemporary film showcase presenting independent cinematic gems from Vietnam and the diaspora. Features restored historical prints alongside fresh works from new-wave auteurs exploring urbanization, memory, and landscape.',
    fullStoryFr: 'Une rétrospective et vitrine du cinéma contemporain présentant des pépites indépendantes du Vietnam et de la diaspora. Des copies historiques restaurées côtoient les œuvres d’auteurs de la nouvelle vague.',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80',
    year: '2025',
    location: 'Cinéma Le Champo & MK2, Paris',
    highlights: ['14 Feature Films & Documentaries', 'Director Q&A Sessions', 'Bilingual Archival Program Book']
  },
  {
    id: 'new-territories',
    title: 'New Territories',
    category: 'performing-arts',
    categoryLabel: 'Contemporary Creation',
    categoryLabelFr: 'Création Contemporaine',
    description: 'Exploring new forms and cross-disciplinary projects that push creative boundaries.',
    descriptionFr: 'Explorer de nouvelles formes et des projets interdisciplinaires qui repoussent les frontières créatives.',
    fullStory: 'New Territories is an incubator initiative uniting choreographers, electronic sound composers, and digital artists. Together, they investigate how ancestral movement languages morph when integrated with sound art, real-time projection, and architectural sceneries.',
    fullStoryFr: 'New Territories est un incubateur réunissant chorégraphes, compositeurs électroacoustiques et artistes numériques pour questionner la métamorphose des gestes ancestraux au contact du son et des projections.',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
    year: '2025',
    location: 'Centre Pompidou & Hanoi Opera',
    highlights: ['Cross-Disciplinary Residency', 'Spatial Sound Design', 'Youth Engagement Workshops']
  },
  {
    id: 'cultural-exhibitions',
    title: 'Cultural Exhibitions',
    category: 'collaborations',
    categoryLabel: 'Exhibitions',
    categoryLabelFr: 'Expositions',
    description: 'Curating exhibitions that tell stories, celebrate heritage and spark dialogue.',
    descriptionFr: 'Concevoir des expositions qui racontent des histoires, célèbrent le patrimoine et suscitent le dialogue.',
    fullStory: 'From lacquer painting to silk weaving and ceramic traditions, our exhibitions curate the intersection of ancestral techniques and avant-garde installation design, bringing gallery visitors face-to-face with living artistry.',
    fullStoryFr: 'De la peinture sur laque au tissage de soie et à la céramique, nos expositions scénarisent la rencontre entre techniques ancestrales et scénographie d’avant-garde.',
    image: 'https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?auto=format&fit=crop&w=800&q=80',
    year: '2024',
    location: 'Musée Guimet, Paris',
    highlights: ['40 Curated Rare Masterpieces', 'Interactive Tactile Material Station', 'Curatorial Guided Walks']
  },
  {
    id: 'cultural-bridges',
    title: 'Cultural Bridges',
    category: 'collaborations',
    categoryLabel: 'International Dialogue',
    categoryLabelFr: 'Dialogue International',
    description: 'Building connections between artists, institutions and audiences across borders.',
    descriptionFr: 'Tisser des liens entre artistes, institutions et publics au-delà des frontières.',
    fullStory: 'An ongoing diplomatic and artistic exchange bridge between cultural ministries, academic conservatories, and private foundations in Europe and Southeast Asia, funding travel fellowships and collaborative creation.',
    fullStoryFr: 'Un pont d’échange diplomatique et artistique continu entre ministères, conservatoires et fondations d’Europe et d’Asie du Sud-Est, finançant bourses et coproductions.',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80',
    year: 'Continuous',
    location: 'Paris, Hanoi, Brussels, Singapore',
    highlights: ['Annual Bilateral Cultural Forum', 'Artist Mobility Fellowships', 'Institutional Co-Productions']
  },
  {
    id: 'events-and-festivals',
    title: 'Events & Festivals',
    category: 'events',
    categoryLabel: 'Live Experiences',
    categoryLabelFr: 'Événements & Festivals',
    description: 'Designing and producing cultural events and festivals that bring people together.',
    descriptionFr: 'Concevoir et produire des événements culturels et des festivals qui rassemblent les publics.',
    fullStory: 'Designing large-scale public outdoor celebrations, sensory night markets, stage productions, and academic symposia that turn historic urban squares into vibrant spaces of artistic rendezvous.',
    fullStoryFr: 'Conception de grandes célébrations publiques, nuits sensorielles, spectacles de rue et colloques transformant les places historiques en scènes de rencontre.',
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80',
    year: '2025',
    location: 'Paris & Hanoi',
    highlights: ['25,000+ Attendees Across Editions', 'Outdoor Projections', 'Culinary & Arts Curation']
  },
  {
    id: 'audiovisual-production',
    title: 'Audiovisual Production',
    category: 'audiovisual',
    categoryLabel: 'Audiovisual',
    categoryLabelFr: 'Audiovisuel',
    description: 'Creating documentaries, films and digital content with a unique artistic voice.',
    descriptionFr: 'Créer des documentaires, films et contenus numériques avec une voix artistique singulière.',
    fullStory: 'Our production unit captures the untold stories of generational heritage, vanishing dialects, culinary rituals, and contemporary innovators through 4K cinematography, delicate soundscapes, and empathetic direction.',
    fullStoryFr: 'Notre pôle de production immortalise les récits de transmission, dialectes précieux, rituels culinaires et créateurs contemporains en cinématographie 4K soignée.',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80',
    year: '2024–2026',
    location: 'France & Vietnam',
    highlights: ['3 Feature Documentaries', 'Broadcast on ARTE & VTV', 'International Festival Screenings']
  }
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'viet-nam-en-scene-2025-announcement',
    title: 'Viet Nam en Scène 2025: A Week of Performing Arts in France',
    titleFr: 'Viet Nam en Scène 2025 : Une Semaine des Arts Vivants en France',
    date: 'May 20, 2025',
    category: 'Featured',
    categoryFr: 'À la Une',
    excerpt: 'From October 26 to 31, 2025, Terra Culture Lab is proud to present Viet Nam en Scène, a week-long celebration of Vietnamese performing arts in Paris.',
    excerptFr: 'Du 26 au 31 octobre 2025, Terra Culture Lab est fier de présenter Viet Nam en Scène, une célébration d’une semaine dédiée aux arts vivants vietnamiens à Paris.',
    content: `Terra Culture Lab is thrilled to announce the official program for Viet Nam en Scène 2025, taking place across renowned Parisian theatres including Théâtre de la Ville and Maison des Métallos.

This edition highlights the duality between centuries-old classical traditions like Hát Bội and Tuồng, alongside bold new choreographic creations born from the vibrant contemporary dance scene of Hanoi and Ho Chi Minh City.

"Our mission has always been to build a genuine meeting ground where traditions are neither frozen in museum vitrines nor diluted," states My Linh Nguyen, Founder & Executive Producer. "Viet Nam en Scène allows audiences in Europe to experience the living, breathing pulse of Vietnamese artistry."

Highlights include an exclusive restaging of 'The Red Lacquer Screen' directed by Anne Bouvier with scenography by Do Doan Bang, musical compositions by traditional zither virtuosos, and collaborative discussions on intercultural stage craft.`,
    contentFr: `Terra Culture Lab a le plaisir de dévoiler le programme officiel de Viet Nam en Scène 2025, qui se déploiera dans de prestigieux théâtres parisiens tels que le Théâtre de la Ville et la Maison des Métallos.

Cette édition met en lumière la dualité féconde entre répertoires séculaires (Hát Bội, Tuồng) et nouvelles écritures chorégraphiques issues des scènes émergentes de Hanoi et Hô Chi Minh-Ville.

"Notre ambition est d'offrir un terrain de rencontre authentique où les traditions ne sont ni figées sous vitrine ni dénaturées," souligne My Linh Nguyen, fondatrice et productrice exécutive.`,
    image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1000&q=80',
    isFeatured: true,
    author: 'Editorial Desk'
  },
  {
    id: 'preserving-water-puppetry',
    title: 'Preserving Tradition, Inspiring the World: The Art of Water Puppetry',
    titleFr: 'Préserver la Tradition, Inspirer le Monde : L’Art des Marionnettes sur l’Eau',
    date: 'May 12, 2025',
    category: 'Cultural Heritage',
    categoryFr: 'Patrimoine Culturel',
    excerpt: 'Rooted in centuries of tradition, Vietnamese water puppetry continues to enchant audiences of all ages across the globe.',
    excerptFr: 'Enraciné dans des siècles de tradition rurale, le théâtre de marionnettes sur l’eau vietnamien continue d’émerveiller les publics de tous âges.',
    content: `Standing in waist-deep water behind a bamboo screen, puppeteers manipulate articulated wooden figurines using submerged poles and strings. What started in the 11th century as a harvest pastime during flooded rice seasons has evolved into an intangible cultural jewel.

Terra Culture Lab is collaborating with the master artisans of Dao Thuc village to document oral histories, restore century-old carved fig wood puppets, and prepare an international educational tour for schools and cultural centres in Europe.`,
    contentFr: `Immergés jusqu'à la taille derrière des rideaux de bambou, les marionnettistes animent des figurines de bois laqué grâce à d'ingénieux systèmes de perches et de câbles immergés.

Terra Culture Lab soutient activement les maîtres artisans du village de Đào Thục pour préserver leurs récits oraux et concevoir un programme de transmission pédagogique en Europe.`,
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
    author: 'Olivier Dhénin Hùu'
  },
  {
    id: 'institut-francais-collaboration',
    title: 'Terra Culture Lab and Institut Français Strengthen Cultural Collaboration',
    titleFr: 'Terra Culture Lab et l’Institut Français Renforcent leur Coopération Culturelle',
    date: 'April 28, 2025',
    category: 'Partners',
    categoryFr: 'Partenaires',
    excerpt: 'A new strategic partnership to support artistic creation, mobility and cross-cultural dialogue between France and Southeast Asia.',
    excerptFr: 'Un nouveau partenariat stratégique pour soutenir la création artistique, la mobilité et le dialogue interculturel entre la France et l’Asie du Sud-Est.',
    content: `In a joint press conference held at Miromesnil headquarters, Terra Culture Lab and Institut Français officially formalized a three-year cooperation framework.

The agreement focuses on three key pillars: artist-in-residence exchanges between Paris and Hanoi, co-funding for documentary film post-production, and curatorial support for major exhibitions celebrating Franco-Vietnamese diplomatic milestones.`,
    contentFr: `Lors d'une conférence conjointe à Paris, Terra Culture Lab et l'Institut Français ont formalisé un cadre de coopération sur trois ans destiné à stimuler la mobilité des jeunes créateurs et la coproduction de documentaires.`,
    image: 'https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?auto=format&fit=crop&w=800&q=80',
    author: 'Press Relations'
  },
  {
    id: 'audiovisual-production-behind-scenes',
    title: 'Behind the Scenes: Our Audiovisual Production in Development',
    titleFr: 'Dans les Coulisses : Notre Production Audiovisuelle en Développement',
    date: 'April 15, 2025',
    category: 'Project Updates',
    categoryFr: 'Actualités Projets',
    excerpt: 'An inside look at our upcoming documentary exploring cultural heritage and contemporary voices across Vietnam.',
    excerptFr: 'Regard intime sur notre prochain film documentaire explorant la mémoire collective et les voix d’aujourd’hui au Vietnam.',
    content: `For the past four months, our film crew has travelled from the misty limestone peaks of Hà Giang to the canals of the Mekong Delta, recording the quiet rituals of traditional craftspeople and the energetic studios of underground sound artists.

Slated for release in winter 2025, this feature documentary brings poetic realism to the challenges of cultural transmission in a rapidly modernizing society.`,
    contentFr: `Depuis quatre mois, notre équipe de tournage parcourt les reliefs de Hà Giang jusqu'aux méandres du delta du Mékong pour capturer la parole des artisans d’art et des compositeurs contemporains.`,
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80',
    author: 'Production Team'
  },
  {
    id: 'paris-cultural-evening-thank-you',
    title: 'Thank You! A Successful Cultural Evening in Paris',
    titleFr: 'Merci ! Une Soirée Culturelle Mémorable à Paris',
    date: 'March 30, 2025',
    category: 'Events',
    categoryFr: 'Événements',
    excerpt: 'We extend our heartfelt thanks to all who joined us for an unforgettable evening of music, dance and dialogue.',
    excerptFr: 'Nous adressons nos plus sincères remerciements à tous ceux qui nous ont rejoints pour une soirée inoubliable de musique, de danse et d’échange.',
    content: `Over 350 patrons, artists, diplomats, and cultural leaders gathered in the historic salons of the 8th arrondissement to toast the launch of our spring season.

Featuring a surprise chamber performance on ancient 16-string Đàn Tranh paired with classical cello, the evening embodied the spirit of harmony and discovery that defines Terra Culture Lab.`,
    contentFr: `Plus de 350 mécènes, artistes et représentants institutionnels se sont réunis au cœur du 8e arrondissement pour célébrer le lancement de notre saison printanière autour d'un dialogue musical inédit entre đàn tranh et violoncelle.`,
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80',
    author: 'Events Directorate'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'My Linh NGUYEN',
    role: 'Founder & Executive Producer',
    roleFr: 'Fondatrice & Productrice Exécutive',
    bio: 'With over fifteen years orchestrating major international cultural productions and festivals between France and Asia, My Linh leads the strategic and artistic vision of Terra Culture Lab.',
    bioFr: 'Forte de quinze années passées à concevoir de grands festivals et productions culturelles entre la France et l’Asie, My Linh porte la vision stratégique et curatoriale de Terra Culture Lab.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Olivier DHÉNIN HÙU',
    role: 'Artistic Advisor',
    roleFr: 'Conseiller Artistique',
    bio: 'Playwright, director, and stage dramaturg trained in classical literature and musicology, Olivier advises on repertoire selection, literary adaptations, and transnational artist dialogues.',
    bioFr: 'Dramaturge, metteur en scène et auteur nourri de littérature et de musicologie, Olivier conseille la programmation artistique et les dialogues entre créateurs des deux continents.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Do Doan BANG',
    role: 'Scenographer',
    roleFr: 'Scénographe',
    bio: 'Distinguished set designer renowned for poetic atmospheric architecture, blending traditional Vietnamese organic materials—bamboo, silk, earth, and paper—with cutting-edge spatial light.',
    bioFr: 'Scénographe de renom célèbre pour ses architectures poétiques, combinant matériaux organiques traditionnels (bambou, soie, terre) et dispositifs lumière immersifs.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Anne BOUVIER',
    role: 'Stage Director',
    roleFr: 'Metteuse en Scène',
    bio: 'Molière Award-winning director and actor whose sensitive mastery of ensemble choreography and textual nuance brings visceral power to both classical and modern plays.',
    bioFr: 'Comédienne et metteuse en scène récompensée aux Molières, dont la rigueur et la sensibilité apportent une intensité singulière aux grands textes du répertoire comme aux écritures d’aujourd’hui.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80'
  }
];
