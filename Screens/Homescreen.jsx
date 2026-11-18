import { View, Text, StyleSheet } from "react-native";

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Home Screen </Text>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4f5e6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default HomeScreen;