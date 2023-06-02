import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { Entypo, Feather } from "@expo/vector-icons";
import ChartRow from "./ChartRow";
import { LinearGradient } from "expo-linear-gradient";

const ChartCard = () => {
	return (
		<LinearGradient
			// Button Linear Gradient
			colors={["#221d2f", "#3c3747"]}>
			<View className='px-3 py-2  rounded-md mt-2' style={{}}>
				<View className='flex-row justify-between'>
					<Text className='text-white font-[500] text-[14px]'>
						Top 100 Nigeria
					</Text>
					<View className='flex-row items-center'>
						<Text className='text-[#844DFB] font-[500] text-[14px]'>More</Text>
						<Entypo name='chevron-right' size={20} color='#844DFB' />
					</View>
				</View>
				<ScrollView>
					<ChartRow />
					<ChartRow />
					<ChartRow />
					<ChartRow />
					<ChartRow />
					<ChartRow />
				</ScrollView>
			</View>
		</LinearGradient>
	);
};

export default ChartCard;
