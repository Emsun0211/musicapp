import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { Entypo, Feather } from "@expo/vector-icons";
import ChartRow from "./ChartRow";

const ChartCard = () => {
	return (
		<View className='px-3 py-2 bg-[#292335] rounded-md mt-2' style={{}}>
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
				<ChartRow />
				<ChartRow />
				<ChartRow />
				<ChartRow />
			</ScrollView>
		</View>
	);
};

export default ChartCard;
