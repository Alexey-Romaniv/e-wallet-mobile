import React from "react";
import { Modal, View, ActivityIndicator, StyleSheet } from "react-native";

export const Loader = ({ visible = true }) => {
    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
            onRequestClose={() => {}}
        >
            <View style={styles.backdrop}>
                <ActivityIndicator size="large" color="blue" />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    backdrop: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Полупрозрачный фон
        justifyContent: "center",
        alignItems: "center",
    },
});
