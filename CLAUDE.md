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

### Splits détaillés par station (hyresult.com · récupérés Session 3)

| Station | Paris Nov 2025 | Nice Fév 2026 | Delta | Lyon Doubles |
|---|---|---|---|---|
| SkiErg | 4:35 | **4:30** | −5s ✅ | Rémi · cible 4:15 |
| Sled Push | 3:25 | **3:09** | −16s ✅ | Mélanie |
| Sled Pull | **7:07** | **5:15** | **−1:52 🔥** | Mélanie |
| Burpee BJ | 7:05 | **6:59** | −6s | 50/50 · cible ~6:00 |
| Rowing | **4:58** | 5:08 | +10s ⚠ | Rémi · cible 4:45 |
| Farmers Carry | **1:26** | 1:32 | +6s | Mélanie |
| Sandbag Lunges | 6:22 | **6:00** | −22s ✅ | Mélanie |
| Wall Balls | **8:35** | 9:00 | +25s ⚠ | 50/50 · cible ~7:00 |
| **TOTAL STATIONS** | **43:23** | **41:33** | **−1:50** | |

### Running splits par segment

| Segment | Paris | Nice | Delta | Note |
|---|---|---|---|---|
| K1 (départ) | 3:59 | 4:28 | +29s | Nice plus conservateur ✅ |
| K2 (post SkiErg) | 4:23 | 4:17 | −6s | |
| K3 (post Sled Push) | 4:59 | 4:42 | −17s | |
| K4 (post Sled Pull) | 4:56 | 4:45 | −11s | |
| K5 (post BBJ) | 4:55 | 4:57 | +2s | |
| K6 (post Row) | 4:53 | 4:51 | −2s | |
| K7 (post Farmers) | 5:01 | 5:05 | +4s | |
| K8 (post Lunges) | 5:24 | 5:14 | −10s | |
| **TOTAL RUNNING** | **38:30** | **38:19** | **−11s** | Moy 4:49 → 4:47/km |
| **DRIFT K1→K8** | **+1:25** | **+0:46** | **−39s ✅** | Stratégie conservatrice fonctionne |

### Temps de transition (Roxzones)
- Paris : ~6:50 total transitions
- Nice : ~6:09 total transitions (−41s)

### Points faibles identifiés
1. **Sled Pull** : 7:07 (Paris) → 5:15 (Nice) → grosse progression mais reste élevé → **Mélanie à Lyon**
2. **Wall Balls** : régression +25s (8:35→9:00) → fatigue dernière station → **50/50 à Lyon**
3. **Rowing** : régression +10s (4:58→5:08) → **Rémi à travailler**
4. **Running drift** : amélioré (1:25→0:46) mais encore présent → continuer stratégie conservatrice K1

### Profil athlète
- Cycliste expérimenté : 41 000+ km lifetime · base aérobie solide
- Velotaff quotidien : 6h Zone 1-2 / semaine → cardio > moyenne HYROX
- HYROX pratiqué depuis 2024 environ
- **Hyresult** : https://www.hyresult.com/athlete/remi-peltier

### Baselines physiologiques (posées Session 3 · 2 Mars 2026)
| Métrique | Valeur | Source |
|---|---|---|
| HRV baseline | **~47 ms** | Garmin FR 970 · moy 8 nuits |
| FC repos baseline | **~46 bpm** | Garmin FR 970 · moy 8 nuits |
| Poids | **84.7 kg** | Garmin 2 mars |
| VO2max estimé | **54 ml/kg/min** | Garmin |
| SpO2 | **94-96%** | Garmin |
| Respiration | **17.4 resp/min** | Garmin |
| LTHR | **159-165 bpm** | intervals.icu |
| eFTP vélo | **~244 W** | intervals.icu |

### Charges de référence Renfo S1 (posées 2 Mars 2026)
| Exercice | Charge | RPE réel | Ajustement S2 |
|---|---|---|---|
| Tirage vertical | 40 kg | 6→7 ✅ | Garder 40kg |
| Développé couché | 45 kg | 7→8+ ⚠ | **Redescendre 40-42.5kg** |
| Back squat | 40 kg | 6→8 | Garder 40kg |
| SDT roumain | 70 kg | 5→7 ✅ | Garder 70kg |
| Hip Thrust | 40 kg | 4→8 | Garder 40kg |
| Arch | PDC | — | 8×20"/10" |

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

### Session 3 — 2 Mars 2026
**Contexte** : Reprise du suivi · Mise à jour pré-S1 + début S1 · Données intervals.icu  
**Réalisé** :
- Vérification connectivité MCP intervals.icu ✅ (get_activities, get_wellness_data, get_events OK)
- Récupération activités pré-S1 (24 fév → 1 mars) : 3× HYROX Oria, 310 WB, Run EF 7.3km, Rando Vaunaveys
- Récupération wellness 8 nuits (23 fév → 2 mars) : baselines HRV ~47ms, FC repos ~46bpm
- Identification alerte sommeil : 3 nuits < 4h sur 8 (37.5%), crash HRV 28.8ms le 28/02
- Récupération détail Renfo S1 lundi 2 mars : charges de référence posées
- Mise à jour complète `suivi.html` avec :
  - Section Pré-S1 (bilan semaine 24 fév → 1 mars)
  - Détail charges Renfo S1 avec RPE par série
  - Tableau sommeil 8 nuits avec alertes visuelles
  - Baselines physiologiques (HRV, FC, poids, VO2max)
  - KPI semaine courante S1
  - Journal des séances complet (7 entrées)
  - Profil athlète avec données hyresult
- Mise à jour `CLAUDE.md` avec baselines et charges de référence ✅
- Lien hyresult identifié : https://www.hyresult.com/athlete/remi-peltier
- Splits détaillés par station non récupérables (chargement JS dynamique) → Rémi doit copier manuellement

**Problème identifié** : Sommeil critique (facteur limitant n°1). DC trop lourd à 45kg (RPE 8+ vs cible 6.5).

**À faire en session 4** :
- [x] Rémi fournit les splits détaillés par station (Paris + Nice) → **FAIT Session 3 bis**
- [x] Compléter la section stations dans suivi.html → **FAIT Session 3 bis**
- [ ] Bilan fin de S1 (compliance 7 séances)
- [ ] Vérifier ajustement DC à 40-42.5kg en S2
- [ ] Suivi sommeil S1 : la cause des nuits courtes est-elle identifiée ?
- [ ] Push git + vérification GitHub Pages

---

### Session 3 bis — 2 Mars 2026 (suite)
**Contexte** : Rémi fournit les splits détaillés Paris + Nice depuis hyresult.com  
**Réalisé** :
- Récupération et analyse complète des splits Paris (Nov 2025) et Nice (Fév 2026)
- Calcul des temps par station, running splits, transitions (Roxzones)
- Mise à jour complète `suivi.html` :
  - Tableau comparatif stations Paris vs Nice avec deltas et attribution Lyon Doubles
  - Analyse progressions (🔥 Sled Pull −1:52) et régressions (⚠ WB +25s, Row +10s)
  - Tableau running splits 8 segments avec contexte post-station
  - Graphique barres comparatif Paris vs Nice (double barres)
  - Analyse drift : 1:25 (Paris) → 0:46 (Nice) = −39s ✅
  - Résumé temps totaux : Running 38:30→38:19 (−11s) · Stations 43:23→41:33 (−1:50)
  - Cards stations visuelles avec PB marqués (★)
- Mise à jour `CLAUDE.md` avec splits détaillés et analyse

**Insights clés** :
1. **Sled Pull = meilleure progression** : −1:52 (7:07→5:15) → assigné à Mélanie à Lyon
2. **Wall Balls = seule vraie régression** : +25s (8:35→9:00) → fatigue accumulée dernière station
3. **Running drift réduit de 39s** grâce au départ plus conservateur à Nice (4:28 vs 3:59)
4. **Gain total −2:42** dont −1:50 sur stations et −11s sur running + −41s transitions
5. **Stratégie Doubles Lyon** : Rémi (Run+SkiErg+Row) / Mélanie (Sleds+Farmers+Lunges) / 50/50 (BBJ+WB)

**À faire en session 4** :
- [ ] Bilan fin de S1 (compliance 7 séances)
- [ ] Vérifier ajustement DC à 40-42.5kg en S2
- [ ] Suivi sommeil S1 : cause identifiée ? Amélioration ?
- [ ] Push git + vérification GitHub Pages
- [ ] Commencer à remplir les données Brick S1 (samedi 8 mars)

---

## ⚠️ Points d'attention pour Claude

### Ne pas oublier
- Rémi est en **phase Fondations (S1–S3)** en ce moment (semaine du 2 mars)
- La branche git est **main** (pas master)
- Le remote utilise le compte **tierpel** (pas rpeltier-lpg)
- Les 38 events sont déjà chargés sur intervals.icu → ne pas re-créer
- Le programme HTML fait 82KB → il est volumineux, ne pas le régénérer à la légère
- **Sommeil = facteur limitant n°1** : 3 nuits < 4h sur 8 → à surveiller chaque session
- **DC 45kg trop lourd** → ajuster à 40-42.5kg en S2
- **Baselines posées** : HRV ~47ms · FC repos ~46bpm · Poids 84.7kg · VO2max 54
- **Hyresult** : https://www.hyresult.com/athlete/remi-peltier → **Splits complets récupérés ✅**
- **Splits clés** : Sled Pull 7:07→5:15 (−1:52) · WB 8:35→9:00 (+25s) · Row 4:58→5:08 (+10s) · Drift 1:25→0:46 (−39s)

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

1. Bilan fin de S1 (compliance 7 séances, allure brick baseline samedi 8 mars)
2. Vérifier ajustement DC à 40-42.5kg en S2
3. Suivi sommeil S1 : cause identifiée ? Amélioration ?
4. Push git + vérification GitHub Pages
5. Commencer à remplir les données Brick S1

---

*Dernière mise à jour : 2 Mars 2026 · Session 3 bis (splits complets)*
