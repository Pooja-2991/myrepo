import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const PortfolioComparison = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>This portfolio vs </Text>
        <TouchableOpacity>
          <Text style={styles.headerLink}>Nifty 50 ▼</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.title}>This Portfolio</Text>
          <Text style={styles.value}>₹128</Text>
        </View>
        <View style={styles.column}>
          <Text style={[styles.title, styles.highlightText]}>Nifty 50</Text>
          <Text style={styles.value}>₹122</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  headerText: {
    fontSize: 14,
    color: "#666",
  },
  headerLink: {
    fontSize: 14,
    color: "#7a4cf7",
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    alignItems: "center",
    flex: 1,
  },
  title: {
    fontSize: 14,
    color: "#7a4cf7",
    fontWeight: "bold",
    marginBottom: 4,
  },
  highlightText: {
    color: "#f57c00", // Change to highlight Nifty 50
  },
  value: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});

export default PortfolioComparison;
