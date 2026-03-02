# TECH.md — Stack technique & conventions
> Référence technique du projet. À consulter quand on touche au code, au déploiement ou aux outils.
> 📂 Voir aussi : `CLAUDE.md` (contexte projet) · `DATA.md` (perfs & historique)

---

## 🛠️ Stack

| Outil | Usage |
|---|---|
| **intervals.icu** | Calendrier d'entraînement · 38 events chargés via MCP |
| **Strava** | Tracking activités · source des commentaires de séances |
| **GitHub Pages** | Hébergement pages HTML (tierpel.github.io) |
| **Claude** | Génération programme · dashboard · analyse |
| **MCP intervals-icu** | API intervals.icu (events, activities, wellness) |
| **MCP Filesystem** | Lecture/écriture `D:\ChatBox\tierpel\` |

---

## 🔧 Git & déploiement

| Paramètre | Valeur |
|---|---|
| Dépôt | `https://github.com/tierpel/tierpel.github.io` |
| Branche | **main** (⚠ pas master) |
| Compte | **tierpel** (⚠ pas rpeltier-lpg) |
| Déploiement | GitHub Pages · auto sur push |

### Commandes de publication
```bash
cd D:\ChatBox\tierpel
git add .
git commit -m "suivi S[N] · [description]"
git push
```

---

## 🎨 Conventions de style (HTML)

| Élément | Valeur |
|---|---|
| Police titres | **Oswald** |
| Police corps | **DM Sans** |
| Police mono/données | **DM Mono** |
| Couleur principale | `#ff5526` (orange) |
| Couleur secondaire | `#4b9fff` (bleu) |
| Fond | `#0b0b0d` (presque noir) |
| Thème | Sombre, minimaliste-technique, palette contrastée |

### Convention de nommage fichiers
- `programme_*.html` → pages statiques générées une fois
- `suivi.html` → mis à jour manuellement chaque semaine
- `CLAUDE.md` / `TECH.md` / `DATA.md` → documentation projet

---

## 🔌 MCP intervals.icu

| Endpoint | Statut | Notes |
|---|---|---|
| `add_or_update_event` | ✅ fonctionnel | Utilisé pour les 38 events S1–S12 |
| `get_events` | ✅ | Tester en début de session |
| `get_activities` | ✅ | Tester en début de session |
| `get_wellness_data` | ✅ | Tester en début de session |
| `get_activity_intervals` | ✅ | Détails par intervalle |

> ⚠ Si MCP indisponible → saisie manuelle des données dans suivi.html

---

## 📝 Conventions commentaires Strava/intervals.icu

Pour alimenter le dashboard de suivi, utiliser ces formats :

```
BRICK S[N] · allure X'XX/km · RPE X · [N] stations · [note sled/burpee/etc]
RENFO S[N] OK · squat XXkg · sled pull XXkg · RPE X · énergie [ok/faible/top]
ORIA OK · [focus station] · RPE X · [note technique clé]
BRAN RC · type EF/fractionné · allure X'XX · durée XXmin
SOMMEIL · Xh · qualité X/5 · HRV XXms · FC repos XXbpm
```

---

## 🔄 Workflow de mise à jour (hebdomadaire)

```
1. Rémi saisit commentaires sur Strava/intervals.icu après chaque séance
2. Claude récupère les données (MCP intervals ou manuel)
3. Claude génère suivi.html mis à jour
4. Rémi push : git add . && git commit -m "suivi S[N]" && git push
5. GitHub Pages se met à jour automatiquement
```

---

*Dernière mise à jour : 2 Mars 2026 · Session 3 bis*
