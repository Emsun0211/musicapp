import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PlaylistScreen from "../screens/PlaylistScreen";
import TabSetting from "./Tab";
import PlayScreen from "../screens/PlayScreen";
import TrendingScreen from "../screens/TrendingScreen";
import HomeScreen from "../screens/HomeScreen";
import StartupScreen from "../screens/StartupScreen";
import SearchScreen from "../screens/SearchScreen";

const Stack = createStackNavigator();

const MainStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name='Start' component={StartupScreen} />
			<Stack.Screen name='Tabs' component={TabSetting} />
		</Stack.Navigator>
	);
};

const HomeStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name='HomeTab' component={HomeScreen} />
			<Stack.Screen name='Play' component={PlayScreen} />
			<Stack.Screen name='Trending' component={TrendingScreen} />
		</Stack.Navigator>
	);
};

const PlaylistStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name='Home' component={HomeScreen} />
			<Stack.Screen name='Play' component={PlayScreen} />
			<Stack.Screen name='Trending' component={TrendingScreen} />
		</Stack.Navigator>
	);
};

const SearchStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name='SearchTab' component={SearchScreen} />
			<Stack.Screen name='Play' component={PlayScreen} />
			<Stack.Screen name='Trending' component={TrendingScreen} />
		</Stack.Navigator>
	);
};

export { MainStack, HomeStack, PlaylistStack, SearchStack };
