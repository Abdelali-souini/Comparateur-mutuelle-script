// Mock data for the demonstration

// Insurance Categories
export const mockedCategories = [
  {
    id: 1,
    name: 'Mutuelle Santé',
    slug: 'mutuelle-sante',
    description: 'Trouvez la mutuelle santé qui vous correspond et bénéficiez des meilleurs remboursements pour vos frais médicaux.',
    icon: 'health',
    comparisonCriteria: [
      { id: 'hospitalisation', name: 'Hospitalisation', type: 'rating' },
      { id: 'optique', name: 'Optique', type: 'rating' },
      { id: 'dentaire', name: 'Dentaire', type: 'rating' },
      { id: 'medecine_douce', name: 'Médecines douces', type: 'boolean' },
      { id: 'delai_remboursement', name: 'Délai de remboursement', type: 'text' },
    ]
  },
  {
    id: 2,
    name: 'Assurance Auto',
    slug: 'assurance-auto',
    description: 'Comparez les meilleures offres d\'assurance auto et trouvez la formule qui protège votre véhicule au meilleur prix.',
    icon: 'car',
    comparisonCriteria: [
      { id: 'franchise', name: 'Franchise', type: 'text' },
      { id: 'assistance', name: 'Assistance 24/7', type: 'boolean' },
      { id: 'pret_vehicule', name: 'Prêt de véhicule', type: 'boolean' },
      { id: 'bris_glace', name: 'Bris de glace', type: 'boolean' },
      { id: 'couverture', name: 'Niveau de couverture', type: 'rating' },
    ]
  },
  {
    id: 3,
    name: 'Assurance Maladie',
    slug: 'assurance-maladie',
    description: 'Complétez votre couverture de la Sécurité Sociale avec une assurance maladie adaptée à vos besoins spécifiques.',
    icon: 'medical',
    comparisonCriteria: [
      { id: 'indemnites', name: 'Indemnités journalières', type: 'text' },
      { id: 'maladies_graves', name: 'Couverture maladies graves', type: 'rating' },
      { id: 'delai_carence', name: 'Délai de carence', type: 'text' },
      { id: 'remboursement_medicaments', name: 'Remboursement médicaments', type: 'rating' },
      { id: 'accompagnement', name: 'Service d\'accompagnement', type: 'boolean' },
    ]
  },
  {
    id: 4,
    name: 'Assurance Habitation',
    slug: 'assurance-habitation',
    description: 'Protégez votre logement et vos biens avec une assurance habitation qui couvre tous les risques potentiels.',
    icon: 'home',
    comparisonCriteria: [
      { id: 'valeur_biens', name: 'Valeur des biens couverts', type: 'text' },
      { id: 'degat_eaux', name: 'Dégâts des eaux', type: 'boolean' },
      { id: 'vol', name: 'Vol et cambriolage', type: 'rating' },
      { id: 'catastrophe_naturelle', name: 'Catastrophes naturelles', type: 'boolean' },
      { id: 'responsabilite_civile', name: 'Responsabilité civile', type: 'boolean' },
    ]
  },
  {
    id: 5,
    name: 'Assurance Vie',
    slug: 'assurance-vie',
    description: 'Préparez sereinement votre avenir et celui de vos proches grâce à une assurance vie performante et adaptée.',
    icon: 'umbrella',
    comparisonCriteria: [
      { id: 'rendement', name: 'Rendement moyen', type: 'text' },
      { id: 'frais_gestion', name: 'Frais de gestion', type: 'text' },
      { id: 'options_investissement', name: 'Options d\'investissement', type: 'rating' },
      { id: 'fiscalite', name: 'Avantages fiscaux', type: 'rating' },
      { id: 'rachat_partiel', name: 'Possibilité de rachat partiel', type: 'boolean' },
    ]
  }
]

// Mock insurances data
export const mockedInsurances = [
  {
    id: 1,
    name: 'AssurSanté Premium',
    logo: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1600',
    rating: 4.8,
    price: 45,
    category: 'Mutuelle Santé',
    categorySlug: 'mutuelle-sante',
    description: 'Une mutuelle santé complète avec d\'excellents remboursements sur tous les postes de santé, incluant les médecines douces et le bien-être.',
    features: [
      'Remboursement à 400% de la base Sécurité Sociale',
      'Prise en charge des dépassements d\'honoraires',
      'Forfait optique et dentaire élevé',
      'Médecines douces (ostéopathie, acupuncture, etc.)',
      'Pas de délai de carence'
    ],
    criteriaValues: {
      'hospitalisation': { value: 5, notes: 'Prise en charge complète' },
      'optique': { value: 4, notes: 'Jusqu\'à 350€ pour les lunettes' },
      'dentaire': { value: 5, notes: 'Couverture prothèses jusqu\'à 600€' },
      'medecine_douce': { value: true, notes: '5 séances par an' },
      'delai_remboursement': { value: '3 jours ouvrés', notes: 'Remboursement rapide' }
    }
  },
  {
    id: 2,
    name: 'MutuellEco',
    logo: 'https://images.pexels.com/photos/6647068/pexels-photo-6647068.jpeg?auto=compress&cs=tinysrgb&w=1600',
    rating: 4.2,
    price: 25,
    category: 'Mutuelle Santé',
    categorySlug: 'mutuelle-sante',
    description: 'Une mutuelle économique mais efficace, idéale pour les jeunes actifs en bonne santé qui souhaitent une couverture essentielle à prix réduit.',
    features: [
      'Remboursement à 150% de la base Sécurité Sociale',
      'Forfait hospitalisation',
      'Couverture optique standard',
      'Soins dentaires de base',
      'Délai de carence de 3 mois'
    ],
    criteriaValues: {
      'hospitalisation': { value: 3, notes: 'Couverture standard' },
      'optique': { value: 2, notes: 'Jusqu\'à 100€ pour les lunettes' },
      'dentaire': { value: 3, notes: 'Soins de base uniquement' },
      'medecine_douce': { value: false, notes: 'Non inclus' },
      'delai_remboursement': { value: '7 jours ouvrés', notes: 'Délai moyen' }
    }
  },
  {
    id: 3,
    name: 'SantéPlus Famille',
    logo: 'https://images.pexels.com/photos/3683056/pexels-photo-3683056.jpeg?auto=compress&cs=tinysrgb&w=1600',
    rating: 4.5,
    price: 65,
    category: 'Mutuelle Santé',
    categorySlug: 'mutuelle-sante',
    description: 'Une mutuelle spécialement conçue pour les familles, avec des avantages spécifiques pour les enfants et une couverture étendue pour toute la famille.',
    features: [
      'Remboursement à 300% de la base Sécurité Sociale',
      'Gratuité à partir du 3ème enfant',
      'Orthodontie prise en charge à 80%',
      'Consultation de spécialistes sans avance de frais',
      'Assistance famille 24/7'
    ],
    criteriaValues: {
      'hospitalisation': { value: 4, notes: 'Chambre particulière incluse' },
      'optique': { value: 3, notes: 'Forfait famille avantageux' },
      'dentaire': { value: 4, notes: 'Orthodontie bien couverte' },
      'medecine_douce': { value: true, notes: '3 séances par an et par bénéficiaire' },
      'delai_remboursement': { value: '5 jours ouvrés', notes: 'Remboursement standard' }
    }
  },
  {
    id: 4,
    name: 'SuperDrive Auto',
    logo: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1600',
    rating: 4.6,
    price: 75,
    category: 'Assurance Auto',
    categorySlug: 'assurance-auto',
    description: 'Une assurance tous risques premium avec des garanties étendues, parfaite pour les conducteurs exigeants qui souhaitent une protection maximale.',
    features: [
      'Formule tous risques sans franchise',
      'Assistance 0km 24/7',
      'Véhicule de remplacement catégorie équivalente',
      'Vol, incendie et bris de glace',
      'Protection du conducteur jusqu\'à 1 million d\'euros'
    ],
    criteriaValues: {
      'franchise': { value: '0€', notes: 'Sans franchise' },
      'assistance': { value: true, notes: 'Premium avec dépannage 0km' },
      'pret_vehicule': { value: true, notes: 'Durée illimitée pendant les réparations' },
      'bris_glace': { value: true, notes: 'Sans franchise' },
      'couverture': { value: 5, notes: 'Couverture optimale' }
    }
  },
  {
    id: 5,
    name: 'AutoBasic',
    logo: 'https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg?auto=compress&cs=tinysrgb&w=1600',
    rating: 3.9,
    price: 35,
    category: 'Assurance Auto',
    categorySlug: 'assurance-auto',
    description: 'Une assurance au tiers étendue, économique mais avec l\'essentiel des garanties pour rouler en toute sécurité et à moindre coût.',
    features: [
      'Responsabilité civile',
      'Protection juridique',
      'Assistance à partir de 25km',
      'Option bris de glace avec franchise',
      'Bonus à vie après 3 ans sans sinistre'
    ],
    criteriaValues: {
      'franchise': { value: '500€', notes: 'Franchise en cas de sinistre responsable' },
      'assistance': { value: true, notes: 'À partir de 25km' },
      'pret_vehicule': { value: false, notes: 'Non inclus' },
      'bris_glace': { value: true, notes: 'Avec franchise de 80€' },
      'couverture': { value: 2, notes: 'Couverture de base étendue' }
    }
  },
  {
    id: 6,
    name: 'ExpressDrive',
    logo: 'https://images.pexels.com/photos/1231643/pexels-photo-1231643.jpeg?auto=compress&cs=tinysrgb&w=1600',
    rating: 4.3,
    price: 55,
    category: 'Assurance Auto',
    categorySlug: 'assurance-auto',
    description: 'Une assurance intermédiaire avec un excellent rapport qualité-prix, offrant une bonne protection pour votre véhicule et des services performants.',
    features: [
      'Formule tous risques avec franchise modérée',
      'Assistance 0km en journée, 25km la nuit',
      'Véhicule de remplacement catégorie inférieure',
      'Valeur à neuf pendant 2 ans',
      'Protection des équipements audio et multimédia'
    ],
    criteriaValues: {
      'franchise': { value: '250€', notes: 'Franchise modérée' },
      'assistance': { value: true, notes: 'Standard avec conditions' },
      'pret_vehicule': { value: true, notes: 'Durée maximum 10 jours' },
      'bris_glace': { value: true, notes: 'Sans franchise' },
      'couverture': { value: 4, notes: 'Bonne couverture globale' }
    }
  },
  {
    id: 7,
    name: 'MaladiePlus',
    logo: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1600',
    rating: 4.7,
    price: 60,
    category: 'Assurance Maladie',
    categorySlug: 'assurance-maladie',
    description: 'Une assurance maladie complète avec d\'excellentes indemnités journalières et une couverture étendue pour les maladies graves et chroniques.',
    features: [
      'Indemnités journalières jusqu\'à 150€',
      'Couverture des maladies graves à 100%',
      'Pas de questionnaire médical',
      'Téléconsultation médicale 24/7',
      'Capital en cas d\'invalidité jusqu\'à 300 000€'
    ],
    criteriaValues: {
      'indemnites': { value: '150€/jour', notes: 'Dès le 3ème jour' },
      'maladies_graves': { value: 5, notes: 'Couverture optimale' },
      'delai_carence': { value: '30 jours', notes: 'Court délai' },
      'remboursement_medicaments': { value: 4, notes: 'Incluant médicaments non remboursés' },
      'accompagnement': { value: true, notes: 'Service premium avec ligne dédiée' }
    }
  },
  {
    id: 8,
    name: 'SécuSanté',
    logo: 'https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=1600',
    rating: 4.1,
    price: 40,
    category: 'Assurance Maladie',
    categorySlug: 'assurance-maladie',
    description: 'Une assurance maladie économique avec des garanties essentielles, idéale pour compléter votre régime obligatoire à moindre coût.',
    features: [
      'Indemnités journalières jusqu\'à 50€',
      'Couverture standard des maladies',
      'Questionnaire médical simplifié',
      'Assistance téléphonique en journée',
      'Capital en cas d\'invalidité jusqu\'à 100 000€'
    ],
    criteriaValues: {
      'indemnites': { value: '50€/jour', notes: 'Dès le 8ème jour' },
      'maladies_graves': { value: 3, notes: 'Couverture standard' },
      'delai_carence': { value: '90 jours', notes: 'Délai standard' },
      'remboursement_medicaments': { value: 2, notes: 'Médicaments remboursés uniquement' },
      'accompagnement': { value: false, notes: 'Support limité' }
    }
  },
  {
    id: 9,
    name: 'MaladiePro',
    logo: 'https://images.pexels.com/photos/3259629/pexels-photo-3259629.jpeg?auto=compress&cs=tinysrgb&w=1600',
    rating: 4.4,
    price: 85,
    category: 'Assurance Maladie',
    categorySlug: 'assurance-maladie',
    description: 'Une assurance maladie spécialement conçue pour les professionnels et entrepreneurs, avec des garanties adaptées pour protéger votre activité.',
    features: [
      'Indemnités journalières jusqu\'à 200€',
      'Maintien du revenu garanti',
      'Protection en cas de burn-out',
      'Couverture des frais généraux professionnels',
      'Accompagnement pour la reprise d\'activité'
    ],
    criteriaValues: {
      'indemnites': { value: '200€/jour', notes: 'Dès le 1er jour' },
      'maladies_graves': { value: 4, notes: 'Incluant les maladies professionnelles' },
      'delai_carence': { value: '15 jours', notes: 'Délai court' },
      'remboursement_medicaments': { value: 3, notes: 'Couverture standard plus' },
      'accompagnement': { value: true, notes: 'Service dédié aux professionnels' }
    }
  }
]