# Planning Équipe

Application de gestion des plannings pour une équipe de 5 chefs travaillant en rotation sur un cycle de 20 semaines.

## Fonctionnalités

- Gestion automatique des rotations sur 20 semaines
- 5 postes différents (MAT1, MAT2, AM1, AM2, REMPLACANT)
- Gestion des jours fériés
- Gestion des récupérations (MAT1 le lundi)
- Export PDF et Excel
- Statistiques hebdomadaires
- Interface moderne et intuitive

## Installation

1. Cloner le repository :
```bash
git clone [URL_DU_REPO]
cd planning-equipe
```

2. Installer les dépendances :
```bash
npm install
```

3. Lancer l'application en développement :
```bash
npm run dev
```

## Structure du Projet

```
planning-equipe/
├── src/
│   ├── components/           # Composants React
│   │   ├── ScheduleGrid.tsx  # Grille du planning
│   │   ├── WeekNavigator.tsx # Navigation entre semaines
│   │   ├── PlanningStats.tsx # Statistiques
│   │   └── ...
│   ├── utils/               # Services et utilitaires
│   │   ├── scheduleService.ts # Logique de planning
│   │   ├── exportService.ts   # Export PDF/Excel
│   │   └── holidays.ts        # Gestion jours fériés
│   ├── types/               # Types TypeScript
│   └── config/              # Configuration
├── public/                  # Assets statiques
└── ...
```

## Règles Métier

### Rotation des Postes
- Chaque chef passe par tous les postes
- 4 semaines consécutives par position
- Ordre de rotation : MAT1 → MAT2 → AM1 → AM2 → REMPLACANT

### Règles Spéciales MAT1
- Le chef en MAT1 travaille le samedi
- Il a sa récupération le lundi suivant
- Le remplaçant le remplace pendant sa récupération

### Remplacements
- Un seul remplaçant par semaine
- Rotation équitable des remplacements
- 4 semaines consécutives en tant que remplaçant

## Technologies Utilisées

- React 18
- TypeScript
- Material-UI
- date-fns
- jsPDF
- XLSX
- Tailwind CSS
- Vite

## Tests

Pour lancer les tests :
```bash
npm test
```

## Export

L'application permet d'exporter le planning sous deux formats :
- PDF : Format optimisé pour l'impression
- Excel : Format permettant des modifications ultérieures

## Contribution

1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commit vos changements
4. Push sur la branche
5. Créer une Pull Request

## Licence

[Type de Licence]
