import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PortfolioComparisonCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.legend}>
          <View style={[styles.circle, { backgroundColor: "#7a4cf7" }]} />
          <Text style={styles.label}>Portfolio</Text>
        </View>
        <Text style={styles.value}>₹124</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.legend}>
          <View style={[styles.circle, { backgroundColor: "#f5a623" }]} />
          <Text style={styles.label}>Nifty 50</Text>
        </View>
        <Text style={styles.value}>₹122</Text>
      </View>
      <Text style={styles.date}>13 Aug 2024</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    borderRadius: 8,
    padding: 16,
    margin: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  legend: {
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 8,
  },
  label: {
    fontSize: 14,
    color: "#fff",
  },
  value: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
  },
  date: {
    fontSize: 12,
    color: "#aaa",
    marginTop: 8,
    textAlign: "center",
  },
});

export default PortfolioComparisonCard;
