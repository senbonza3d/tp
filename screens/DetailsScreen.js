import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function DetailsScreen({ route }) {
  const id = route?.params?.id;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📄 Écran de détails</Text>
      {id !== undefined && <Text>ID reçu : {String(id)}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 18, marginBottom: 8 },
});
