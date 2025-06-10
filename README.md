# 🌍 SlidesTranslator

Application web React moderne pour traduire vos présentations PowerPoint, PDF et OpenDocument en quelques clics.

![React](https://img.shields.io/badge/React-18.3.1-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-blue.svg)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.17-blue.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## ✨ Fonctionnalités

### 📤 Upload de fichiers
- **Drag & Drop** intuitif
- Support des formats **.pptx**, **.pdf**, **.odp**
- Validation automatique des fichiers
- Sélecteur de type de fichier dynamique

### 🌍 Traduction
- Sélecteur de **10 langues** avec drapeaux
- Champ de description obligatoire
- Barre de progression animée
- Téléchargement direct du fichier traduit

### 🔐 Authentification
- Système de connexion/inscription
- Gestion de session sécurisée
- Interface adaptée selon l'état de connexion

### 📚 Historique
- Suivi des traductions pour utilisateurs connectés
- Statistiques détaillées
- Possibilité de retélécharger
- Gestion des traductions antérieures

## 🎨 Design

Interface moderne et épurée inspirée de remove.bg :
- Design **responsive** optimisé mobile
- Animations fluides et transitions
- Palette de couleurs cohérente
- UX intuitive et accessible

## 🛠 Technologies

- **Frontend**: React 18 + TypeScript
- **Styling**: TailwindCSS
- **Build**: Vite
- **Authentification**: localStorage (POC)
- **State Management**: React Context

## 🚀 Installation

### Prérequis
- Node.js 16+
- npm ou bun

### Démarrage rapide

```bash
# Cloner le repository
git clone https://github.com/NathDev10/slides-translator.git
cd slides-translator

# Installer les dépendances
npm install
# ou
bun install

# Lancer en développement
npm run dev
# ou
bun run dev
```

L'application sera disponible sur `http://localhost:5173`

### Build pour production

```bash
npm run build
# ou
bun run build
```

## 📁 Structure du projet

```
src/
├── components/           # Composants React
│   ├── ui/              # Composants d'interface
│   │   ├── FileUploader.tsx      # Upload avec drag & drop
│   │   ├── LanguageSelector.tsx  # Sélecteur de langues
│   │   └── LoadingBar.tsx        # Barre de progression
│   ├── layout/          # Composants de mise en page
│   │   └── Header.tsx            # En-tête avec navigation
│   ├── HomePage.tsx     # Page principale de traduction
│   ├── AuthPage.tsx     # Page d'authentification
│   └── HistoryPage.tsx  # Historique des traductions
├── contexts/            # Contextes React
│   └── AuthContext.tsx  # Gestion de l'authentification
├── types/              # Types TypeScript
├── utils/              # Utilitaires et constantes
└── App.tsx             # Composant racine
```

## 🌐 Langues supportées

- 🇫🇷 Français
- 🇺🇸 Anglais
- 🇪🇸 Espagnol
- 🇩🇪 Allemand
- 🇮🇹 Italien
- 🇵🇹 Portugais
- 🇷🇺 Russe
- 🇨🇳 Chinois
- 🇯🇵 Japonais
- 🇸🇦 Arabe

## 📊 API

L'application simule actuellement les appels API. Pour intégrer une vraie API de traduction :

1. Remplacer les endpoints dans `src/utils/constants.ts`
2. Modifier la logique dans `HomePage.tsx`
3. Ajouter la gestion des erreurs réseau

## 🚧 Fonctionnalités futures

- [ ] Intégration d'une vraie API de traduction
- [ ] Support de plus de formats de fichiers
- [ ] Système de notifications push
- [ ] Mode collaboratif
- [ ] Thème sombre
- [ ] Export vers différents formats

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/amazing-feature`)
3. Commit vos changements (`git commit -m 'Add amazing feature'`)
4. Push vers la branche (`git push origin feature/amazing-feature`)
5. Ouvrir une Pull Request

## 📄 License

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 👨‍💻 Auteur

**NathDev10** - [GitHub](https://github.com/NathDev10)

---

⭐ Si ce projet vous plaît, n'hésitez pas à lui donner une étoile !
