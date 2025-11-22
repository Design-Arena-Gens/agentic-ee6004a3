'use client';

import { useState } from 'react';
import {
  BookOpen,
  Radio,
  Video,
  Search,
  Database,
  Users,
  Settings,
  FileText,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Menu,
  X
} from 'lucide-react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('introduction');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: BookOpen,
      content: {
        title: 'Manuel de Veille Médiatique Audiovisuelle',
        description: 'Guide complet pour la gestion d\'un service de veille médiatique',
        sections: [
          {
            subtitle: 'Objectifs de la veille médiatique',
            points: [
              'Surveiller et analyser la couverture médiatique audiovisuelle',
              'Identifier les tendances et sujets émergents',
              'Suivre la réputation et l\'image de marque',
              'Détecter les opportunités et les risques',
              'Fournir des analyses stratégiques aux décideurs'
            ]
          },
          {
            subtitle: 'Périmètre du service',
            points: [
              'Télévision (chaînes nationales et locales)',
              'Radio (stations publiques et privées)',
              'Plateformes de streaming vidéo',
              'Podcasts et contenus audio numériques',
              'Réseaux sociaux et contenus vidéo'
            ]
          }
        ]
      }
    },
    {
      id: 'organisation',
      title: 'Organisation du Service',
      icon: Users,
      content: {
        title: 'Organisation et Structure',
        description: 'Mise en place d\'une équipe efficace de veille médiatique',
        sections: [
          {
            subtitle: 'Rôles et responsabilités',
            points: [
              'Responsable de veille : coordination et stratégie',
              'Analystes médias : surveillance et analyse quotidienne',
              'Documentalistes : archivage et indexation',
              'Techniciens audiovisuels : capture et traitement',
              'Chargés de reporting : synthèses et rapports'
            ]
          },
          {
            subtitle: 'Planification des ressources',
            points: [
              'Couverture 24/7 pour les médias en continu',
              'Rotation des équipes et planning',
              'Répartition géographique et linguistique',
              'Budget et investissements technologiques',
              'Formation continue du personnel'
            ]
          }
        ]
      }
    },
    {
      id: 'outils',
      title: 'Outils et Technologies',
      icon: Settings,
      content: {
        title: 'Infrastructure Technologique',
        description: 'Équipements et logiciels nécessaires',
        sections: [
          {
            subtitle: 'Outils de capture',
            points: [
              'Enregistreurs TV/Radio professionnels',
              'Solutions de streaming en direct',
              'Systèmes de capture multicanaux',
              'Archivage automatisé cloud',
              'Sauvegarde redondante des contenus'
            ]
          },
          {
            subtitle: 'Logiciels d\'analyse',
            points: [
              'Reconnaissance vocale et transcription automatique',
              'Détection de logos et reconnaissance d\'image',
              'Analyse sémantique et tonalité',
              'Outils de sous-titrage et traduction',
              'Plateformes de business intelligence'
            ]
          },
          {
            subtitle: 'Gestion de base de données',
            points: [
              'Système de gestion documentaire (GED)',
              'Métadonnées structurées et indexation',
              'Moteur de recherche full-text',
              'API pour intégration externe',
              'Stockage sécurisé et évolutif'
            ]
          }
        ]
      }
    },
    {
      id: 'processus',
      title: 'Processus de Veille',
      icon: Search,
      content: {
        title: 'Méthodologie de Veille',
        description: 'Processus opérationnels quotidiens',
        sections: [
          {
            subtitle: '1. Définition des besoins',
            points: [
              'Identification des sources prioritaires',
              'Définition des mots-clés et thématiques',
              'Sélection des plages horaires critiques',
              'Établissement des alertes et notifications',
              'Création des profils de surveillance'
            ]
          },
          {
            subtitle: '2. Collecte des données',
            points: [
              'Enregistrement automatique des programmes',
              'Capture des extraits pertinents',
              'Transcription audio vers texte',
              'Extraction des métadonnées',
              'Vérification de la qualité des captures'
            ]
          },
          {
            subtitle: '3. Analyse et qualification',
            points: [
              'Visionnage et écoute des contenus',
              'Identification des mentions et sujets',
              'Évaluation de la tonalité (positive/négative/neutre)',
              'Mesure de l\'audience et impact',
              'Catégorisation et tagging'
            ]
          },
          {
            subtitle: '4. Reporting et diffusion',
            points: [
              'Création de synthèses quotidiennes',
              'Alertes en temps réel pour sujets critiques',
              'Rapports hebdomadaires et mensuels',
              'Tableaux de bord interactifs',
              'Distribution aux parties prenantes'
            ]
          }
        ]
      }
    },
    {
      id: 'sources',
      title: 'Sources Médiatiques',
      icon: Radio,
      content: {
        title: 'Cartographie des Sources',
        description: 'Panorama des médias audiovisuels à surveiller',
        sections: [
          {
            subtitle: 'Télévision',
            points: [
              'Chaînes généralistes nationales',
              'Chaînes d\'information continue',
              'Chaînes thématiques spécialisées',
              'Télévisions locales et régionales',
              'Chaînes internationales'
            ]
          },
          {
            subtitle: 'Radio',
            points: [
              'Stations nationales publiques et privées',
              'Radios locales et associatives',
              'Web radios et radios numériques',
              'Radios thématiques',
              'Stations internationales'
            ]
          },
          {
            subtitle: 'Plateformes numériques',
            points: [
              'Services de replay et VOD',
              'Plateformes de streaming (YouTube, Twitch, etc.)',
              'Podcasts natifs et émissions en podcast',
              'Réseaux sociaux (vidéos Instagram, TikTok, Facebook)',
              'Plateformes de webinaires et lives'
            ]
          }
        ]
      }
    },
    {
      id: 'analyse',
      title: 'Méthodologie d\'Analyse',
      icon: TrendingUp,
      content: {
        title: 'Techniques d\'Analyse',
        description: 'Méthodes pour extraire des insights pertinents',
        sections: [
          {
            subtitle: 'Analyse quantitative',
            points: [
              'Nombre de mentions et fréquence',
              'Durée de passage à l\'antenne',
              'Horaires de diffusion et audiences',
              'Part de voix comparative',
              'Évolution temporelle des mentions'
            ]
          },
          {
            subtitle: 'Analyse qualitative',
            points: [
              'Tonalité et sentiment des mentions',
              'Contexte et angle de traitement',
              'Identification des porte-paroles',
              'Messages clés communiqués',
              'Comparaison avec les concurrents'
            ]
          },
          {
            subtitle: 'Analyse d\'impact',
            points: [
              'Mesure d\'audience et reach',
              'Équivalent publicitaire',
              'Influence et autorité du média',
              'Viralité et partages sociaux',
              'Retombées et effet d\'entraînement'
            ]
          }
        ]
      }
    },
    {
      id: 'juridique',
      title: 'Aspects Juridiques',
      icon: AlertCircle,
      content: {
        title: 'Cadre Légal et Conformité',
        description: 'Respect des obligations légales',
        sections: [
          {
            subtitle: 'Droits d\'auteur et propriété intellectuelle',
            points: [
              'Exception de citation et d\'information',
              'Durée de conservation légale',
              'Droits de reproduction limités',
              'Mention des sources obligatoire',
              'Accords avec les diffuseurs'
            ]
          },
          {
            subtitle: 'Protection des données personnelles (RGPD)',
            points: [
              'Anonymisation des données sensibles',
              'Durée de conservation limitée',
              'Droits d\'accès et de rectification',
              'Sécurisation des accès',
              'Registre des traitements'
            ]
          },
          {
            subtitle: 'Obligations légales',
            points: [
              'Respect du droit à l\'image',
              'Confidentialité des contenus',
              'Archivage légal obligatoire',
              'Traçabilité des consultations',
              'Conformité CSA/ARCOM'
            ]
          }
        ]
      }
    },
    {
      id: 'reporting',
      title: 'Reporting et Livrables',
      icon: FileText,
      content: {
        title: 'Production de Rapports',
        description: 'Formats et contenus des livrables',
        sections: [
          {
            subtitle: 'Revue de presse audiovisuelle quotidienne',
            points: [
              'Sélection des passages les plus importants',
              'Résumés et transcriptions',
              'Captures d\'écran et extraits vidéo',
              'Analyse de la tonalité',
              'Distribution avant 9h00'
            ]
          },
          {
            subtitle: 'Rapport hebdomadaire',
            points: [
              'Synthèse des tendances de la semaine',
              'Graphiques et statistiques',
              'Top mentions et sujets émergents',
              'Comparaison avec périodes précédentes',
              'Recommandations stratégiques'
            ]
          },
          {
            subtitle: 'Tableau de bord mensuel',
            points: [
              'KPI de visibilité médiatique',
              'Part de voix vs. concurrence',
              'Évolution de l\'e-réputation',
              'Cartographie des sujets',
              'ROI des actions de communication'
            ]
          },
          {
            subtitle: 'Alertes en temps réel',
            points: [
              'Notifications push pour mentions critiques',
              'Système d\'escalade selon gravité',
              'Extraction immédiate du contenu',
              'Pré-analyse et contexte',
              'Recommandations de réaction'
            ]
          }
        ]
      }
    },
    {
      id: 'bonnes-pratiques',
      title: 'Bonnes Pratiques',
      icon: CheckCircle,
      content: {
        title: 'Recommandations et Best Practices',
        description: 'Conseils pour optimiser le service',
        sections: [
          {
            subtitle: 'Qualité de la veille',
            points: [
              'Vérifier systématiquement la source et le contexte',
              'Croiser les informations avec plusieurs sources',
              'Maintenir la neutralité dans l\'analyse',
              'Documenter la méthodologie appliquée',
              'Former régulièrement les équipes'
            ]
          },
          {
            subtitle: 'Efficacité opérationnelle',
            points: [
              'Automatiser les tâches répétitives',
              'Prioriser selon l\'importance et l\'urgence',
              'Utiliser des templates standardisés',
              'Capitaliser sur les analyses passées',
              'Optimiser les workflows'
            ]
          },
          {
            subtitle: 'Gestion de crise',
            points: [
              'Protocole d\'alerte préétabli',
              'Liste de diffusion selon le niveau de crise',
              'Documentation des mentions négatives',
              'Préparation d\'éléments de langage',
              'Suivi post-crise et évaluation'
            ]
          },
          {
            subtitle: 'Innovation continue',
            points: [
              'Veille technologique sur les outils IA',
              'Tests de nouvelles sources médiatiques',
              'Feedback régulier des utilisateurs',
              'Benchmarking avec d\'autres services',
              'Investissement en R&D'
            ]
          }
        ]
      }
    },
    {
      id: 'kpi',
      title: 'Indicateurs de Performance',
      icon: Database,
      content: {
        title: 'KPI et Métriques',
        description: 'Mesurer l\'efficacité du service',
        sections: [
          {
            subtitle: 'KPI de couverture',
            points: [
              'Nombre de sources surveillées',
              'Taux de couverture géographique',
              'Heures d\'écoute/visionnage par semaine',
              'Délai moyen de détection',
              'Exhaustivité de la capture'
            ]
          },
          {
            subtitle: 'KPI de production',
            points: [
              'Nombre de mentions analysées/jour',
              'Temps moyen de traitement par mention',
              'Nombre de rapports produits',
              'Taux de respect des délais',
              'Qualité des livrables (satisfaction)'
            ]
          },
          {
            subtitle: 'KPI d\'impact',
            points: [
              'Nombre d\'alertes déclenchées',
              'Temps de réaction suite à alerte',
              'Actions correctives mises en œuvre',
              'ROI du service de veille',
              'Amélioration de l\'e-réputation'
            ]
          },
          {
            subtitle: 'KPI techniques',
            points: [
              'Disponibilité des systèmes (uptime)',
              'Qualité de transcription (taux d\'erreur)',
              'Capacité de stockage utilisée',
              'Performance des recherches',
              'Sécurité et conformité'
            ]
          }
        ]
      }
    }
  ];

  const currentSection = sections.find(s => s.id === activeSection);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Mobile menu button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-blue-600 text-white p-2 rounded-lg shadow-lg"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Navigation */}
      <nav className={`
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 transition-transform duration-300 ease-in-out
        fixed md:sticky top-0 left-0 h-screen w-80 bg-gradient-to-b from-blue-900 to-blue-800 text-white p-6 overflow-y-auto z-40
      `}>
        <div className="mb-8 pt-12 md:pt-0">
          <div className="flex items-center gap-3 mb-2">
            <Video className="w-8 h-8" />
            <h1 className="text-2xl font-bold">Veille Médiatique</h1>
          </div>
          <p className="text-blue-200 text-sm">Manuel de Gestion Audiovisuelle</p>
        </div>

        <div className="space-y-2">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => {
                  setActiveSection(section.id);
                  setMobileMenuOpen(false);
                }}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all
                  ${activeSection === section.id
                    ? 'bg-white text-blue-900 shadow-lg'
                    : 'hover:bg-blue-700 text-blue-100'
                  }
                `}
              >
                <Icon size={20} />
                <span className="font-medium text-left">{section.title}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-8 pt-8 border-t border-blue-700">
          <p className="text-xs text-blue-300">
            © 2024 Service de Veille Médiatique
          </p>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-12 max-w-5xl mx-auto">
        {currentSection && (
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              {(() => {
                const Icon = currentSection.icon;
                return <Icon className="w-10 h-10 text-blue-600" />;
              })()}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {currentSection.content.title}
                </h2>
                <p className="text-gray-600 mt-2">{currentSection.content.description}</p>
              </div>
            </div>

            <div className="space-y-8 mt-8">
              {currentSection.content.sections.map((subsection, idx) => (
                <div key={idx} className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                    {subsection.subtitle}
                  </h3>
                  <ul className="space-y-3">
                    {subsection.points.map((point, pointIdx) => (
                      <li key={pointIdx} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                        <span className="text-gray-700 leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-between mt-12 pt-8 border-t border-gray-200">
              <button
                onClick={() => {
                  const currentIdx = sections.findIndex(s => s.id === activeSection);
                  if (currentIdx > 0) {
                    setActiveSection(sections[currentIdx - 1].id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                disabled={sections.findIndex(s => s.id === activeSection) === 0}
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                ← Précédent
              </button>
              <button
                onClick={() => {
                  const currentIdx = sections.findIndex(s => s.id === activeSection);
                  if (currentIdx < sections.length - 1) {
                    setActiveSection(sections[currentIdx + 1].id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                disabled={sections.findIndex(s => s.id === activeSection) === sections.length - 1}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Suivant →
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Overlay for mobile menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}
