import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import MainStackNav from "./Navigation/MainNavigation";

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style='light' />
			<MainStackNav />
		</View>
	);
}

// registerRootComponent(App);

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
