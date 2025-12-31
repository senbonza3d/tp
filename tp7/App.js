import React, { useEffect, useState, useContext } from 'react';
import { View, StyleSheet, ActivityIndicator, Button } from 'react-native';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';
import TodoListFetchScreen from './screens/TodoListFetchScreen';
import TodoListOfflineScreen from './screens/TodoListOfflineScreen';
import { initDB } from './services/database';

function MainApp({ mode }) {
  const { theme } = useContext(ThemeContext);
  return (
    <View style={[styles.container, mode === 'offline' ? styles.light : styles.light, theme === 'dark' ? styles.dark : styles.light]}>
      {mode === 'fetch' ? <TodoListFetchScreen /> : <TodoListOfflineScreen />}
    </View>
  );
}

export default function App() {
  // change this to 'offline' to show the offline SQLite app
  const [mode, setMode] = useState('fetch');
  const [dbReady, setDbReady] = useState(true);

  useEffect(() => {
    if (mode === 'offline') {
      setDbReady(false);
      initDB().then(() => setDbReady(true));
    }
  }, [mode]);

  if (mode === 'offline' && !dbReady) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <ThemeProvider>
      <View style={{ flex: 1 }}>
        <View style={{ padding: 8 }}>
          <Button title={`Mode: ${mode} (appuyer pour basculer)`} onPress={() => setMode((m) => (m === 'fetch' ? 'offline' : 'fetch'))} />
        </View>
        <MainApp mode={mode} />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 40 },
  light: { backgroundColor: '#ffffff' },
  dark: { backgroundColor: '#121212' },
});
