# TP6 — React Native (Global state with Redux & Zustand)

Ce dossier contient une implémentation d'exemple montrant comment partager la liste des tâches entre écrans avec Redux (RTK) et avec Zustand.

Fichiers clefs:
- `App.js` — entry point, fournit le `Provider` Redux et `AuthProvider`.
- `store/todosSlice.js` et `store/store.js` — slice Redux et configuration du store.
- `store/useTodoStore.js` — store Zustand alternatif.
- `screens/TodoListScreen.js` — version Redux de la liste (useSelector/useDispatch).
- `screens/TodoDetailsScreen.js` — suppression via Redux.
- `screens/TodoListZustandScreen.js` / `TodoDetailsZustandScreen.js` — versions utilisant Zustand.
- `components/AppBar.js` — barre d'app avec bouton Logout utilisant `AuthContext`.

Installation et lancement (PowerShell) — depuis `tp/tp6`:

```powershell
cd c:/Users/Admin/Documents/tp/tp6
npm install
# Installer les modules natifs / Expo-managed pour compatibilité
npx expo install react-native-gesture-handler react-native-reanimated @react-navigation/drawer react-native-screens react-native-safe-area-context @expo/vector-icons
# Lancer Expo
npx expo start
```

Notes:
- Après installation, la liste Redux est initialisée automatiquement par `useEffect` dans `TodoListScreen`.
- Pour tester la version Zustand, modifie la navigation pour ouvrir `TodoListZustandScreen` à la place de `TodoListScreen` (ou ajoute une route séparée).
- Si tu veux, je peux démarrer l'app TP6 ici et afficher le QR code, comme pour TP5.
