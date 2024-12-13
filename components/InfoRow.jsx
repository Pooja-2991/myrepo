import React from "react";
import { View, Text, StyleSheet } from "react-native";

const InfoRow = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.title}>Min. Amount</Text>
        <Text style={styles.value}>₹12,200</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>Rebalance Frequency</Text>
        <Text style={styles.value}>Weekly</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>Risk Profile</Text>
        <Text style={styles.value}>Low Risk</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    margin: 16,
  },
  item: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
  },
});

export default InfoRow;
