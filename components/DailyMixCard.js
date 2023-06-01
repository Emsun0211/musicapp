import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const DailyMixCard = ({ image, text }) => {
	return (
		<View className='mt-2 mx-2 '>
			<TouchableOpacity className='relative items-center'>
				<Image source={require(`../assets/image3.png`)} />
				<View className='w-[100px]'>
					<Text className='text-[#E4DEEF] mt-1 text-center font-[14px]'>
						{text}
					</Text>
				</View>

				<View className='absolute bottom-12 right-1 bg-white rounded-full'>
					<AntDesign name='playcircleo' size={24} color='black' />
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default DailyMixCard;
