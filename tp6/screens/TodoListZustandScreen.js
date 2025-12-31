import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useTodoStore } from '../store/useTodoStore';
import AppBar from '../components/AppBar';

export default function TodoListZustandScreen({ navigation }) {
  const { todos, addTodo } = useTodoStore();

  useEffect(() => {
    addTodo({ id: 1, title: 'Faire les courses' });
    addTodo({ id: 2, title: 'Sortir le chien' });
    addTodo({ id: 3, title: 'Coder une app RN' });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <AppBar title="Mes tâches (Zustand)" />
      <View style={styles.container}>
        <FlatList
          data={todos}
          keyExtractor={(i) => i.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Détails', item)}>
              <Text style={styles.item}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, padding: 20 }, item: { padding: 10, fontSize: 18 } });
