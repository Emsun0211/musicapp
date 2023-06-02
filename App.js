import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import PlaylistScreen from "./screens/PlaylistScreen";
import FeedsScreen from "./screens/FeedsScreen";
import { Ionicons, Feather, MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style='light' />
			<NavigationContainer>
				<Tab.Navigator
					screenOptions={{
						tabBarActiveTintColor: "#844dfb",
						tabBarInactiveTintColor: "grey",
						headerShown: false,
						tabBarStyle: {
							backgroundColor: "black",
							borderColor: "red",
						},
						tabBarLabelStyle: {
							fontWeight: "bold",
							fontSize: 12,
						},
					}}>
					<Tab.Screen
						name='Home'
						component={HomeScreen}
						options={{
							tabBarIcon: ({ focused }) => (
								<Feather
									name={"home"}
									size={25}
									color={focused ? "#844dfb" : "gray"}
								/>
							),
						}}
					/>
					<Tab.Screen
						name='Search'
						component={SearchScreen}
						options={{
							tabBarIcon: ({ focused }) => (
								<Feather
									name={"search"}
									size={25}
									color={focused ? "#844dfb" : "gray"}
								/>
							),
						}}
					/>
					<Tab.Screen
						name='Playlist'
						component={PlaylistScreen}
						options={{
							tabBarIcon: ({ focused }) => (
								<MaterialIcons
									name='my-library-music'
									size={24}
									color={focused ? "#844dfb" : "gray"}
								/>
							),
						}}
					/>
					{/* <Tab.Screen name='Play' component={PlayScreen} /> */}
					{/* <MaterialIcons name='dynamic-feed' size={24} color='black' /> */}
					<Tab.Screen
						name='Feeds'
						component={FeedsScreen}
						options={{
							tabBarIcon: ({ focused }) => (
								<MaterialIcons
									name='dynamic-feed'
									size={24}
									color={focused ? "#844dfb" : "gray"}
								/>
							),
						}}
					/>
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
