import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import PlaylistScreen from "./screens/PlaylistScreen";
import FeedsScreen from "./screens/FeedsScreen";

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style='light' />
			<NavigationContainer>
				<Tab.Navigator screenOptions={{ headerShown: false }}>
					<Tab.Screen name='Home' component={HomeScreen} />
					<Tab.Screen name='Search' component={SearchScreen} />
					<Tab.Screen name='Playlist' component={PlaylistScreen} />
					{/* <Tab.Screen name='Play' component={PlayScreen} /> */}
					<Tab.Screen name='Feeds' component={FeedsScreen} />
				</Tab.Navigator>
			</NavigationContainer>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
