import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SecondScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> SecondScreen </Text>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c5efef',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default SecondScreen;