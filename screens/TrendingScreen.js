import { View, Text, StatusBar } from "react-native";
import React from "react";
import ChartCard from "../components/ChartCard";

const TrendingScreen = () => {
	return (
		<View
			className='pt-5 bg-black flex-1'
			style={{ paddingTop: StatusBar.currentHeight }}>
			<View className='flex-row justify-between'>
				<Text className='text-white font-[600] text-[16px]'>Chart</Text>
				<Text className='text-[#844DFB] font-[600] text-[16px]'>More </Text>
			</View>
			<ChartCard />
		</View>
	);
};

export default TrendingScreen;
