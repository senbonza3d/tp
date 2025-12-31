import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useTodoStore } from '../store/useTodoStore';

export default function TodoDetailsZustandScreen({ route, navigation }) {
  const { id, title } = route.params || {};
  const removeTodo = useTodoStore((s) => s.removeTodo);

  const handleDelete = () => {
    removeTodo(id);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Button title="Supprimer" color="red" onPress={handleDelete} />
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, padding: 20 }, title: { fontSize: 24, marginBottom: 12 } });
