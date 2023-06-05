import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeedsScreen from "../screens/FeedsScreen";
import PlaylistScreen from "../screens/PlaylistScreen";
import SearchScreen from "../screens/SearchScreen";
import HomeScreen from "../screens/HomeScreen";
import { Ionicons, Feather, MaterialIcons } from "@expo/vector-icons";
import { HomeStack, SearchStack } from "./StackNavigation";

const Tab = createBottomTabNavigator();
const TabSetting = () => {
	return (
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
				component={HomeStack}
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
				component={SearchStack}
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
			{/* <Tab.Screen name='Play' component={PlaylistScreen} /> */}

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
	);
};

export default TabSetting;
