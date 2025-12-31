# TP7 — React Native (API fetch, AsyncStorage theme, SQLite offline)

This TP demonstrates:
- Fetching data from a remote API (axios or fetch)
- Persisting a theme selection using AsyncStorage
- Using SQLite (expo-sqlite) for an offline todos list (add/update/delete)

Quick start (PowerShell) — run inside `tp/tp7`:

```powershell
cd c:/Users/Admin/Documents/tp/tp7
npm install
npx expo install @react-native-async-storage/async-storage expo-sqlite @expo/vector-icons
npm start
```

How the app works
- By default the app starts in "fetch" mode (lists todos from jsonplaceholder via fetch).
- Press the "Mode" button to switch to "offline" mode — the app will initialize SQLite and show the offline list where you can add, edit and delete tasks.
- Theme selection is persisted using AsyncStorage (light/dark).

Files added:
- `services/api.js` — axios/fetch helpers
- `context/ThemeContext.js` — theme provider using AsyncStorage
- `services/database.js` — SQLite helpers (init, add, update, delete, load)
- `screens/TodoListFetchScreen.js` — fetch example
- `screens/TodoListOfflineScreen.js` — offline SQLite example
- `App.js` — wrapper that allows switching modes and initializes DB when needed
