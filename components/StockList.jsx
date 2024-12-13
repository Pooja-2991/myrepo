import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const stockData = [
  { name: "UTI Asset Management Company", ticker: "UTIAMC", percentage: "6.5%" },
  { name: "Time Technoplast Ltd", ticker: "TTL", percentage: "3.5%" },
  { name: "HDFC Bank", ticker: "HDFC", percentage: "12%" },
  { name: "Time Technoplast Ltd", ticker: "TTL", percentage: "3.5%" },
  { name: "Time Technoplast Ltd", ticker: "TTL", percentage: "3.5%" },
  { name: "Time Technoplast Ltd", ticker: "TTL", percentage: "3.5%" },
  { name: "Time Technoplast Ltd", ticker: "TTL", percentage: "3.5%" },
];

const StockList = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.stockName}>{item.name}</Text>
        <Text style={styles.stockTicker}>{item.ticker}</Text>
      </View>
      <Text style={styles.percentage}>{item.percentage}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Stocks</Text>
      <FlatList
        data={stockData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#000",
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  textContainer: {
    flex: 1,
  },
  stockName: {
    fontSize: 16,
    color: "#000",
  },
  stockTicker: {
    fontSize: 14,
    color: "#666",
  },
  percentage: {
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
  },
});

export default StockList;
