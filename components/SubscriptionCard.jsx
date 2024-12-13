import { useNavigation } from "expo-router";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const SubscriptionCard = () => {
const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Subscription fees</Text>
                <Text style={styles.price}>₹299/month</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate('Explore')}>
                <Text style={styles.buttonText}>Subscribe now</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#f9f9f9",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        margin: 16,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 14,
        color: "#666",
    },
    price: {
        fontSize: 18,
        color: "#000",
        fontWeight: "bold",
        marginTop: 4,
    },
    button: {
        backgroundColor: "#7a4cf7",
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 8,
    },
    buttonText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold",
    },
});

export default SubscriptionCard;
