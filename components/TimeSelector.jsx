import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const TimeSelector = () => {
  const [selected, setSelected] = useState("1Y");

  const options = ["3M", "6M", "1Y", "3Y", "MAX", "SIP"];

  return (
    <View style={styles.container}>
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          style={[
            styles.tab,
            selected === option && styles.selectedTab,
          ]}
          onPress={() => setSelected(option)}
        >
          <Text
            style={[
              styles.tabText,
              selected === option && styles.selectedTabText,
            ]}
          >
            {option}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#d9d9d9",
    borderRadius: 8,
    overflow: "hidden",
    margin: 16,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: "#f7f7f7",
    alignItems: "center",
  },
  selectedTab: {
    backgroundColor: "#e3d8f7",
  },
  tabText: {
    fontSize: 14,
    color: "#333",
  },
  selectedTabText: {
    color: "#7a4cf7",
    fontWeight: "bold",
  },
});

export default TimeSelector;
