# CLAUDE.md — Init Projet · HYROX Lyon 2026
> Fichier d'initialisation du projet pour Claude. Contient le contexte complet, l'historique des sessions, les décisions prises, et les conventions à respecter pour toute continuation du projet.

---

## 🏷️ Identité du projet

| Champ | Valeur |
|---|---|
| **Athlète** | Rémi Tierpel |
| **Objectif primaire** | HYROX Lyon Doubles Open · Jeudi 21 Mai 2026 |
| **Partenaire Doubles** | Mélanie (cousine) |
| **Objectif secondaire** | HYROX Paris Solo · Automne 2026 |
| **Dépôt GitHub** | `https://github.com/tierpel/tierpel.github.io` |
| **GitHub Pages** | `https://tierpel.github.io` |
| **Dossier local** | `D:\ChatBox\tierpel\` |
| **Date d'init** | 2 Mars 2026 |

---

## 📁 Structure des fichiers

```
tierpel.github.io/
├── index.html                    # Page d'accueil · navigation + countdown
├── programme_complet_remi.html   # Programme 12 semaines (82KB)
└── suivi.html                    # Dashboard compliance + sommeil + récup
```

### Convention de nommage
- `programme_*.html` → pages statiques générées une fois
- `suivi.html` → mis à jour manuellement chaque semaine
- `CLAUDE.md` → ce fichier, historique projet

---

## 🏆 Performances de référence

| Course | Date | Temps | Notes |
|---|---|---|---|
| HYROX Paris | Nov 2025 | **1:28:43** | Référence baseline |
| HYROX Nice | Fév 2026 | **1:26:01** | Progression +2:42 |
| **Cible Lyon** | **21 Mai 2026** | **TBD Doubles** | Avec Mélanie |
| **Cible Paris** | **Automne 2026** | **< 1:15:00** | Solo |

### Points faibles identifiés (Paris 1:28:43)
1. **Sled Pull** : 7:07 réalisé vs 2:10 cible → priorité technique absolue
2. **Burpee Broad Jump** : inefficacité technique
3. **Sandbag Lunges** : à retravailler
4. **Running sous fatigue** : drift 3:59/km (K1) → 5:10/km (K8) = +70sec perdus

### Profil athlète
- Cycliste expérimenté : 41 000+ km lifetime · base aérobie solide
- Velotaff quotidien : 6h Zone 1-2 / semaine → cardio > moyenne HYROX
- HYROX pratiqué depuis 2024 environ

---

## 📆 Programme 12 semaines

**Période** : 2 Mars → 24 Mai 2026  
**Race** : Jeudi 21 Mai 2026 (Eurexpo Lyon)  
**38 événements chargés sur intervals.icu** ✅

| Phase | Semaines | Dates | Focus |
|---|---|---|---|
| Fondations | S1–S3 | 2–22 mars | 4–5×12-8 reps · RPE 6.5→7.5 · baseline |
| HYROX Spé | S4–S7 | 23 mars–19 avr | Supersets · RPE 8.0–8.5 · brick 4'45–4'50 |
| Pré-Comp | S8–S9 | 20 avr–3 mai | Simulation complète · circuits stations |
| Taper | S10–S12 | 4–24 mai | −30% → −50% volume · race Thu 21 mai |

### Structure hebdomadaire fixe

| Jour | Matin | Midi | Soir |
|---|---|---|---|
| Lundi | Velotaff | **Renfo S1** (lower+upper push) | — |
| Mardi | Velotaff | — | **Yoga** |
| Mercredi | — | — | **HYROX Oria** |
| Jeudi | — | **Renfo S2** (upper+léger lower) | **Bran Running Club** |
| Vendredi | — | — | **HYROX Oria Force** |
| Samedi | — | — | **Brick / Simulation** |
| Dimanche | OFF | OFF | OFF |

---

## 🤝 Stratégie Doubles Lyon

| Station | Qui | Justification |
|---|---|---|
| Running (8×1km) | **Rémi** | Meilleur coureur · pace-setter 4'40–4'50 |
| SkiErg | **Rémi** | Bonne technique |
| Rowing | **Rémi** | Aérobie solide |
| Sled Push | **Mélanie** | Plus forte en force |
| Sled Pull | **Mélanie** | Priorité (faiblesse Rémi) |
| Farmers Carry | **Mélanie** | Force fonctionnelle |
| Sandbag Lunges | **Mélanie** | Faiblesse Rémi |
| Burpee Broad Jump | **50/50** | Alternance 20 reps chacun |
| Wall Ball | **50/50** | Alternance 50 reps chacun |

---

## 🛠️ Stack technique

| Outil | Usage |
|---|---|
| **intervals.icu** | Calendrier d'entraînement · 38 events chargés via MCP |
| **Strava** | Tracking activités · source des commentaires de séances |
| **GitHub Pages** | Hébergement pages HTML (tierpel.github.io) |
| **Claude** | Génération programme · dashboard · analyse |
| **MCP intervals-icu** | `add_or_update_event` confirmé fonctionnel en session 1 |
| **MCP Filesystem** | Lecture/écriture `D:\ChatBox\tierpel\` |

### Workflow de mise à jour (hebdomadaire)
```
1. Rémi saisit commentaires sur Strava/intervals.icu après chaque séance
2. Claude récupère les données (MCP intervals ou manuel)
3. Claude génère suivi.html mis à jour
4. Rémi push : git add . && git commit -m "suivi S[N]" && git push
5. GitHub Pages se met à jour automatiquement
```

---

## 📝 Conventions commentaires Strava/intervals.icu

Pour alimenter le dashboard de suivi, utiliser ces formats dans les commentaires de séances :

```
BRICK S[N] · allure X'XX/km · RPE X · [N] stations · [note sled/burpee/etc]
RENFO S[N] OK · squat XXkg · sled pull XXkg · RPE X · énergie [ok/faible/top]
ORIA OK · [focus station] · RPE X · [note technique clé]
BRAN RC · type EF/fractionné · allure X'XX · durée XXmin
SOMMEIL · Xh · qualité X/5 · HRV XXms · FC repos XXbpm
```

---

## 📖 Historique des sessions Claude

### Session 1 — 1 Mars 2026
**Contexte** : Analyse Strava 300 activités (Mar 2025–Fév 2026)  
**Réalisé** :
- Analyse performance Paris (1:28:43) et Nice (1:26:01)
- Identification 4 axes d'amélioration : sled pull, BBJ, lunges, running drift
- Conception programme 12 semaines S1–S12
- Chargement 38 événements sur intervals.icu via MCP ✅
- Génération `programme_complet_remi.html` (82KB) ✅
- Déploiement GitHub Pages ✅

**Problème rencontré** : MCP intervals-icu déconnecté en fin de session (get_events, get_wellness non disponibles)  
**Résolution** : Reconnexion à prévoir pour session suivante

---

### Session 2 — 2 Mars 2026
**Contexte** : Setup dossier local + mise en production GitHub  
**Réalisé** :
- Création `D:\ChatBox\tierpel\` ✅
- Copie `programme_complet_remi.html` dans le dossier ✅
- Création `index.html` redirect ✅
- Résolution git (branche master→main + historiques non liés + permissions 403 rpeltier-lpg→tierpel) ✅
- Mise à jour `index.html` avec navigation vers les 2 pages ✅
- Création gabarit `suivi.html` complet avec :
  - Phase courante + KPI semaine
  - Compliance S1–S12 (tableau hebdo)
  - Progression brick (graphique barres)
  - Sommeil & récupération (tableau 7 nuits + indicateurs HRV/FC)
  - Journal des séances (commentaires clés)
  - Analyse stations (Paris vs Nice vs cibles)
  - Running splits (graphique dérive allure) ✅

**À faire en session 3** :
- [ ] Remplir splits exacts Paris depuis résultats officiels hyrox.com
- [ ] Remplir temps stations Paris et Nice depuis résultats officiels
- [ ] Connecter MCP intervals pour lecture automatique activités
- [ ] Workflow de régénération automatique suivi.html

---

## ⚠️ Points d'attention pour Claude

### Ne pas oublier
- Rémi est en **phase Fondations (S1–S3)** en ce moment (semaine du 2 mars)
- La branche git est **main** (pas master)
- Le remote utilise le compte **tierpel** (pas rpeltier-lpg)
- Les 38 events sont déjà chargés sur intervals.icu → ne pas re-créer
- Le programme HTML fait 82KB → il est volumineux, ne pas le régénérer à la légère

### Conventions de style (HTML généré)
- Police titres : **Oswald**
- Police corps : **DM Sans**
- Police mono/données : **DM Mono**
- Couleur principale : `#ff5526` (orange)
- Couleur secondaire : `#4b9fff` (bleu)
- Fond : `#0b0b0d` (presque noir)
- Thème : sombre, minimaliste-technique, palette constrastée

### MCP intervals.icu
- `add_or_update_event` : ✅ fonctionnel (utilisé pour les 38 events S1–S12)
- `get_events`, `get_activities`, `get_wellness_data` : ⚠️ à tester en début de session
- Si MCP indisponible → saisie manuelle des données dans suivi.html

---

## 🎯 Objectifs de la prochaine session

1. Vérifier connectivité MCP intervals.icu
2. Récupérer activités réelles S1 (si séances déjà réalisées)
3. Remplir suivi.html S1 avec premières données
4. Récupérer splits officiels Paris/Nice depuis hyrox.com
5. Push git + vérification GitHub Pages

---

*Dernière mise à jour : 2 Mars 2026 · Session 2*
