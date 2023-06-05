import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const StartupScreen = () => {
	const navigation = useNavigation();
	useEffect(() => {
		setTimeout(() => {
			navigation.navigate("Tabs");
		}, 2000);
	}, []);
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text onPress={() => navigation.navigate("Tabs")}>StartupScreen</Text>
		</View>
	);
};

export default StartupScreen;
