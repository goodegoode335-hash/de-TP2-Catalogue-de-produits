import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
const produits = [
  { id: 1, nom: "Clavier", categorie: "Accessoires", prix: 120, stock: 5 },
  { id: 2, nom: "Souris", categorie: "Accessoires", prix: 80, stock: 8 },
  { id: 3, nom: "Écran", categorie: "Informatique", prix: 900, stock: 0 },
  { id: 4, nom: "Casque", categorie: "Accessoires", prix: 240, stock: 3 }
];
export default function Catalogue() {
  const produitsdisponibles = produits.filter(p => p.stock > 0);
  const valeurtotalestock = produits.reduce((total, p) => total + (p.prix * p.stock), 0);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>CampusStock</Text>
        <Text style={styles.subtitle}>Catalogue Produits</Text>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Produits disponibles :</Text>
          <Text style={styles.value}>{produitsdisponibles.length}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Valeur totale du stock :</Text>
          <Text style={styles.value}>{valeurtotalestock} MAD</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    width: '100%',
    maxWidth: 400,
    padding: 24,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  label: {
    fontSize: 16,
    color: '#444',
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
  },
});
