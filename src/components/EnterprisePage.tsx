import React from 'react';

export const EnterprisePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-6">
            🏢 Solutions Professionnelles
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Entreprise Plan
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Des solutions de traduction de présentations sur mesure pour votre entreprise,
            avec la sécurité et la confidentialité que vos données méritent.
          </p>
        </div>

        {/* Principales fonctionnalités */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Sécurité des données */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Protection des Données</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Conformité RGPD et ISO 27001</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Chiffrement end-to-end AES-256</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Serveurs européens sécurisés</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Suppression automatique des données</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Audit de sécurité disponible</span>
              </li>
            </ul>
          </div>

          {/* Fonctionnalités avancées */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Fonctionnalités Avancées</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">✓</span>
                <span>API privée dédiée</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">✓</span>
                <span>Traitement par lot illimité</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">✓</span>
                <span>Intégration SSO (SAML, LDAP)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">✓</span>
                <span>Flux de validation personnalisés</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">✓</span>
                <span>Support multilingue étendu</span>
              </li>
            </ul>
          </div>

          {/* Support premium */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Support Premium</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-purple-500 mr-3 mt-1">✓</span>
                <span>Support 24/7 prioritaire</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-3 mt-1">✓</span>
                <span>Account manager dédié</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-3 mt-1">✓</span>
                <span>Formation équipes incluse</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-3 mt-1">✓</span>
                <span>SLA 99.9% de disponibilité</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-3 mt-1">✓</span>
                <span>Développements sur mesure</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section sécurité détaillée */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 mb-16 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">
                🔒 Sécurité & Confidentialité
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Vos données confidentielles restent confidentielles. Nous appliquons les standards
                les plus élevés de l'industrie pour protéger vos informations sensibles.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Infrastructure Sécurisée</h4>
                    <p className="text-gray-300">Hébergement sur des serveurs certifiés ISO 27001 en Europe avec chiffrement en transit et au repos.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Conformité RGPD</h4>
                    <p className="text-gray-300">Traitement des données conforme au RGPD avec droits d'accès, rectification et suppression garantis.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Accès Restreint</h4>
                    <p className="text-gray-300">Authentification multi-facteurs et contrôles d'accès basés sur les rôles pour votre équipe.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Audit Trail Complet</h4>
                    <p className="text-gray-300">Journalisation détaillée de toutes les actions avec traçabilité complète des opérations.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Suppression Automatique</h4>
                    <p className="text-gray-300">Vos fichiers sont automatiquement supprimés selon votre politique de rétention configurée.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Certifications</h4>
                    <p className="text-gray-300">SOC 2 Type II, ISO 27001 et certifications sectorielles selon vos besoins spécifiques.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cas d'usage entreprise */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Cas d'Usage Entreprise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions adaptées à vos besoins métier spécifiques
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Multinationales</h3>
              <p className="text-gray-600 text-sm">Communication interne multilingue, présentation pour filiales internationales</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Consulting</h3>
              <p className="text-gray-600 text-sm">Adaptation rapide des livrables clients selon les marchés locaux</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Formation</h3>
              <p className="text-gray-600 text-sm">Contenus pédagogiques multilingues pour équipes internationales</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Startups</h3>
              <p className="text-gray-600 text-sm">Pitch decks pour investisseurs internationaux, expansion globale</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Prêt à Démarrer ?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Contactez notre équipe pour une démonstration personnalisée et un devis sur mesure
            adapté aux besoins spécifiques de votre entreprise.
          </p>

          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:email@gmail.com?subject=Demande%20Enterprise%20Plan%20-%20SlidesTranslator&body=Bonjour,%0A%0AJe%20souhaite%20obtenir%20plus%20d'informations%20sur%20votre%20offre%20Enterprise%20Plan.%0A%0ANom%20de%20l'entreprise%20:%20%0ANombre%20d'utilisateurs%20:%20%0ABesoins%20spécifiques%20:%20%0A%0AMerci%20de%20me%20recontacter."
                className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors shadow-lg flex items-center"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.734a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Nous Contacter
              </a>

              <button className="bg-indigo-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-indigo-400 transition-colors border-2 border-indigo-400">
                Demander une Démo
              </button>
            </div>

            <div className="pt-6 border-t border-indigo-400">
              <p className="text-indigo-100 mb-4">
                <strong>Email :</strong>
                <a href="mailto:email@gmail.com" className="text-white underline hover:text-indigo-200 ml-2">
                  email@gmail.com
                </a>
              </p>
              <p className="text-sm text-indigo-200">
                Réponse garantie sous 24h • Devis personnalisé gratuit • Démonstration sur mesure
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Enterprise */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Questions Fréquentes
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Quel est le délai de mise en œuvre ?
                </h3>
                <p className="text-gray-600">
                  Selon la complexité, entre 2 à 6 semaines incluant l'intégration, la formation des équipes et les tests de sécurité.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Puis-je intégrer avec nos outils existants ?
                </h3>
                <p className="text-gray-600">
                  Oui, nous proposons des API REST et des connecteurs pour SharePoint, Google Workspace, Slack et plus de 50 autres outils.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Comment fonctionne la facturation ?
                </h3>
                <p className="text-gray-600">
                  Tarification flexible : forfait annuel ou pay-per-use selon vos volumes. Facturation mensuelle ou annuelle selon vos préférences.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Quelles sont les garanties de sécurité ?
                </h3>
                <p className="text-gray-600">
                  Contrat de confidentialité, certifications SOC 2 Type II, audit de sécurité annuel et assurance cyber-responsabilité.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Y a-t-il des limites de volume ?
                </h3>
                <p className="text-gray-600">
                  Aucune limite pour l'offre Enterprise. Traitement de milliers de fichiers simultanés avec mise à l'échelle automatique.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Le support est-il inclus ?
                </h3>
                <p className="text-gray-600">
                  Support premium 24/7 inclus avec account manager dédié, formation des équipes et développements sur mesure si nécessaire.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
