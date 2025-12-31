import React, { useEffect, useState, useContext } from 'react';
import { View, Text, FlatList, Button, TextInput, StyleSheet, ActivityIndicator } from 'react-native';
import { loadTodos, addTodoOffline, updateTodoOffline, deleteTodoOffline, initDB } from '../services/database';
import { ThemeContext } from '../context/ThemeContext';

export default function TodoListOfflineScreen() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [dbReady, setDbReady] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const refreshTodos = async () => {
    const rows = await loadTodos();
    setTodos(rows);
  };

  const handleAddOrUpdate = async () => {
    if (!title.trim()) return;
    if (editingId) {
      await updateTodoOffline(editingId, title);
      setEditingId(null);
    } else {
      await addTodoOffline(title);
    }
    setTitle('');
    await refreshTodos();
  };

  useEffect(() => {
    const prepare = async () => {
      await initDB();
      setDbReady(true);
      await refreshTodos();
    };
    prepare();
  }, []);

  if (!dbReady) return <ActivityIndicator size="large" />;

  return (
    <View style={{ flex: 1 }}>
      <Button title={`Passer en mode ${theme === 'light' ? 'dark' : 'light'}`} onPress={toggleTheme} />

      <View style={styles.form}>
        <TextInput placeholder="Tâche offline" value={title} onChangeText={setTitle} style={styles.input} />
        <Button title={editingId ? '✏️ Mettre à jour' : '➕ Ajouter hors ligne'} onPress={handleAddOrUpdate} />
      </View>

      {todos.length === 0 ? (
        <Text style={{ textAlign: 'center', marginTop: 20 }}>Aucune tâche disponible hors ligne</Text>
      ) : (
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <Text>{item.title}</Text>
              <View style={styles.rowButtons}>
                <Button
                  title="✏️"
                  onPress={() => {
                    setTitle(item.title);
                    setEditingId(item.id);
                  }}
                />
                <Button
                  title="🗑️"
                  color="red"
                  onPress={async () => {
                    await deleteTodoOffline(item.id);
                    await refreshTodos();
                  }}
                />
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  form: { padding: 10 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center' },
  rowButtons: { flexDirection: 'row', gap: 8 },
});
