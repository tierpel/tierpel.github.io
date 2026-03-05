# DATA.md — Performances, baselines & historique sessions
> Données de référence et historique complet des sessions Claude.
> 📂 Voir aussi : `CLAUDE.md` (contexte projet) · `TECH.md` (stack & conventions)

---

## 🏆 Performances de référence

| Course | Date | Temps | Classement | AG 40-44 |
|---|---|---|---|---|
| HYROX Paris | Nov 2025 | **1:28:43** | #1821/3331 | #170 |
| HYROX Nice | Fév 2026 | **1:26:01** | #1300/2108 | #106 |
| **Cible Lyon** | **21 Mai 2026** | **TBD Doubles** | — | — |
| **Cible Paris** | **Automne 2026** | **< 1:15:00** | — | — |

### Progression globale : −2:42 (−3.1%)
- Running : 38:30 → 38:19 (−11s)
- Stations : 43:23 → 41:33 (−1:50)
- Transitions : ~6:50 → ~6:09 (−41s)

---

## 📊 Splits détaillés par station

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
- Paris : ~6:50 total
- Nice : ~6:09 total (−41s)

### Points faibles identifiés
1. **Wall Balls** : régression +25s (8:35→9:00) → fatigue dernière station
2. **Rowing** : régression +10s (4:58→5:08) → à travailler
3. **Running drift** : amélioré (1:25→0:46) mais encore présent → continuer K1 conservateur

---

## 📈 Baselines physiologiques (posées 2 Mars 2026)

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

---

## 📊 Wellness S1 (2→4 Mars 2026)

| Nuit | Sommeil | Score | HRV | FC repos | Readiness | SpO2 |
|---|---|---|---|---|---|---|
| 2→3 mars | 6h32 | 72 | 52.3 | 45 | 78 | 98% |
| 3→4 mars | 6h33 | 80 | **58.2** 🔥 | 44 | **95** 🔥 | 97% |
| 4→5 mars | **7h23** | 79 | 53.0 | 46 | 85 | 94% |
| **Moy S1** | **6h49** | **77** | **54.5** | **45.0** | **86** | **96%** |

✅ **Nette amélioration vs pré-S1** : HRV +16% (47→54.5ms), sommeil +1h40 (5h09→6h49), zéro nuit <4h.

---

## 🏋️ Charges de référence Renfo S1 (2 Mars 2026)

| Exercice | Charge | RPE réel | Ajustement S2 |
|---|---|---|---|
| Tirage vertical | 40 kg | 6→7 ✅ | Garder 40kg |
| Développé couché | 45 kg | 7→8+ ⚠ | **Redescendre 40-42.5kg** |
| Back squat | 40 kg | 6→8 | Garder 40kg |
| SDT roumain | 70 kg | 5→7 ✅ | Garder 70kg |
| Hip Thrust | 40 kg | 4→8 | Garder 40kg |
| Arch | PDC | — | 8×20"/10" |

---

## 📖 Historique des sessions Claude

### Session 1 — 1 Mars 2026
**Contexte** : Analyse Strava 300 activités (Mar 2025–Fév 2026)  
**Réalisé** :
- Analyse performance Paris (1:28:43) et Nice (1:26:01)
- Identification 4 axes : sled pull, BBJ, lunges, running drift
- Conception programme 12 semaines S1–S12
- Chargement 38 événements sur intervals.icu via MCP ✅
- Génération `programme_complet_remi.html` (82KB) ✅
- Déploiement GitHub Pages ✅

**Problème** : MCP déconnecté en fin de session  

---

### Session 2 — 2 Mars 2026
**Contexte** : Setup dossier local + mise en production GitHub  
**Réalisé** :
- Création `D:\ChatBox\tierpel\` ✅
- Résolution git (branche master→main + permissions 403 rpeltier-lpg→tierpel) ✅
- Création `index.html` avec navigation ✅
- Création gabarit `suivi.html` complet ✅

---

### Session 3 — 2 Mars 2026
**Contexte** : Reprise du suivi · Données intervals.icu + pré-S1  
**Réalisé** :
- Vérification connectivité MCP intervals.icu ✅
- Récupération activités pré-S1 (24 fév → 1 mars) : 3× Oria, 310 WB, Run EF 7.3km
- Récupération wellness 8 nuits : baselines HRV ~47ms, FC repos ~46bpm
- Alerte sommeil : 3 nuits < 4h sur 8 (37.5%), crash HRV 28.8ms le 28/02
- Détail Renfo S1 : charges de référence posées
- Mise à jour complète `suivi.html` ✅

**Problème** : Sommeil critique (facteur limitant n°1). DC trop lourd à 45kg.

---

### Session 3 bis — 2 Mars 2026
**Contexte** : Rémi fournit les splits détaillés Paris + Nice depuis hyresult.com  
**Réalisé** :
- Analyse complète splits Paris vs Nice (stations + running + transitions)
- Mise à jour `suivi.html` avec tableaux comparatifs et graphiques ✅
- Mise à jour documentation projet ✅

**Insights clés** :
1. **Sled Pull = meilleure progression** : −1:52 (7:07→5:15)
2. **Wall Balls = seule vraie régression** : +25s (8:35→9:00)
3. **Running drift réduit de 39s** grâce au départ conservateur
4. **Gain total −2:42** dont −1:50 stations, −11s running, −41s transitions

---

### Session 3 ter — 2 Mars 2026
**Contexte** : Réorganisation documentation  
**Réalisé** :
- Split `CLAUDE.md` en 3 fichiers : `CLAUDE.md` (projet) + `TECH.md` (technique) + `DATA.md` (données)
- Allègement du fichier d'entrée pour les futures sessions

---

### Session 4 — 5 Mars 2026
**Contexte** : Mise à jour suivi mi-S1 (J4/7)
**Réalisé** :
- Récupération activités S1 : Renfo lun, Velotaff mar (49km), HYROX Oria Engine Intervals mar (9.6km + 111 WB)
- Récupération wellness S1 : 3 nuits (2→5 mars)
- Mise à jour complète `suivi.html` : KPI, bilan mi-semaine, journal, sommeil, indicateurs récup
- Constat : sommeil en nette amélioration, HRV +16%, Readiness 78→95→85

**Insights clés** :
1. **Sommeil corrigé** : plus de nuit <4h, tendance à la hausse (6h32→6h33→7h23)
2. **HRV au plus haut** : 58.2ms le 3 mars = meilleur score depuis le début du suivi
3. **Compliance S1 à 3/7** : Renfo ✅, Velotaff ✅, Oria Engine ✅ + 111 WB
4. **Total WB saison** : 421 reps (310 pré-S1 + 111 S1)

---

---

## 🏐 Wall Balls · Historique complet

### Séances EMOM dédiées (post-Oria)

| # | Date | Reps | Format | Poids | Durée | FC moy | FC max | %LTHR | Contexte |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 20 Fév | 100 | EMOM 10' | 9kg | 9'24" | 139 | 158 | 84% | Post Row 30' |
| 2 | 25 Fév | 100 | EMOM 10' | 16lb | 9'43" | 138 | 151 | 84% | Post AMRAP 20' + Run |
| 3 | 27 Fév | 110 | EMOM 11' | 16lb | 10'49" | 136 | 151 | 82% | Post Full Engine Builder |
| 4 | 28 Fév | 100 | EMOM 10' | 6kg | 10'21" | 127 | 148 | 77% | Post Interval Strength |
| 5 | 4 Mars | 111 | EMOM 11' | 6kg | 10'38" | 140 | 152 | 85% | Post Engine Intervals 9.6km |

### Séances WB intégrées (WOD/Race)

| Date | Reps | Contexte | FC moy | FC max |
|---|---|---|---|---|
| 24 Jan | 100 | For Time Oria (4×25 WB) @9kg | 135 | 159 |
| 27 Jan | 100 | FS+WB (5×20) @9kg · RPE 9 · Fragmentation | 110 | 161 |
| 30 Jan | ~30 | Engine Builder (Thrusters+WB) | 120 | 159 |
| 4 Fév | 150 | Pré-Comp (5×30) @6-9kg | 127 | 157 |
| 6 Fév | ~50 | Team WOD (100 WB 2 pour 1) | 123 | 160 |
| **14 Fév** | **100** | **HYROX Nice RACE** @6kg · **9:01** | **155** | **170** |

### Total WB saison : **1041 reps**

### Programmation EMOM S1→Lyon · DENSITÉ CROISSANTE (+1 WB/min/semaine)

**Protocole :** EMOM **10 minutes fixe** · +1 rep/min/semaine à partir de S3 · Tempo ~3s/rep
**Principe :** La durée ne change pas, c'est la **densité** qui augmente → le repos se compresse naturellement.

| Sem | WB/min | Total 10' | Travail/min | Repos/min | Ratio W:R | Phase | Statut |
|---|---|---|---|---|---|---|---|
| S1 | 10 | 111* (11') | ~30s | ~30s | 50/50 | Approche volume | ✅ Fait |
| S2 | 10 | 100 | ~30s | ~30s | 50/50 | Approche volume | ⏳ En cours |
| S3 | **11** | 110 | ~33s | ~27s | 55/45 | Densité +1 | Planifié |
| S4 | **12** | 120 | ~36s | ~24s | 60/40 | Densité +2 | Planifié |
| S5 | **13** | 130 | ~39s | ~21s | 65/35 | Densité +3 | Planifié |
| S6 | **14** | 140 | ~42s | ~18s | 70/30 | Densité +4 | Planifié |
| S7 | 12 | 120 | ~36s | ~24s | 60/40 | ⬇ Décharge | Planifié |
| S8 | **16** | 160 | ~48s | ~12s | 80/20 | Densité +6 | Planifié |
| S9 | **17** 🔥 | **170** 🔥 | ~51s | ~9s | **85/15** | 🔥 PIC | Planifié |
| S10 | 14 | 140 | ~42s | ~18s | 70/30 | ⬇ Taper | Planifié |
| S11 | 12 | 120 | ~36s | ~24s | 60/40 | ⬇ Taper | Planifié |
| S12 | — | 50 | — | — | ALL OUT | 🏁 LYON | RACE |

*S1 = ancien format (EMOM 11' × 10 WB/min). Nouveau protocole densité croissante à partir de S3.

**Option évolutive :** Si la progression se passe bien, possibilité d'augmenter le poids de la ball (9kg, 16lb) sur certaines séances pour ajouter un stimulus de force. Le poids HYROX reste 6kg.

---

*Dernière mise à jour : 5 Mars 2026 · Session 4*
