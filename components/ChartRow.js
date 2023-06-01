import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Entypo, Feather } from "@expo/vector-icons";

const ChartRow = () => {
	return (
		<View>
			<TouchableOpacity className='flex-row mt-2 items-center'>
				<Text className='mr-1 text-white'>1</Text>
				<View className='flex-1 flex-row space-x-1 items-center'>
					<Image source={require("../assets/image4.png")} />
					<View>
						<Text className='text-white'>Allen</Text>
						<Text className='text-white'>Rema</Text>
					</View>
				</View>
				<Feather name='arrow-down-circle' size={24} color='#844DFB' />
			</TouchableOpacity>
		</View>
	);
};

export default ChartRow;
