# TP5 — React Native (Drawer + AuthContext)

Structure créée:

- `App.js` — point d'entrée avec `AuthProvider` et navigation conditionnelle
- `context/AuthContext.js` — provider global pour login/logout
- `navigation/AppDrawer.js` — Drawer contenant `AppStack` et `Profile`
- `navigation/AppStack.js` — Stack pour les tâches
- `screens/LoginScreen.js` — écran de connexion
- `screens/TodoListScreen.js` — liste des tâches (avec `AppBar`)
- `screens/TodoDetailsScreen.js` — détails d'une tâche (reçoit id/title)
- `screens/ProfileScreen.js` — affiche user + bouton logout
- `components/AppBar.js` — barre supérieure avec titre + bouton logout

Installation et lancement (PowerShell) — depuis `tp/tp5`:

```powershell
cd c:/Users/Admin/Documents/tp/tp5
npm install
npx expo install react-native-gesture-handler react-native-reanimated @react-navigation/drawer react-native-screens react-native-safe-area-context @expo/vector-icons
npm start
```

Notes:
- Je n'ai noté que des fichiers sources et un `package.json` minimal; certains modules natifs doivent être installés via `npx expo install` pour garantir les versions compatibles (voir commande ci‑dessus).
- Si tu veux que je commit/push ces fichiers, je peux le faire maintenant.
