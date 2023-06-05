import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const DailyMixCard = ({ image, text }) => {
	const navigation = useNavigation();
	return (
		<View className='mt-2 mx-2 '>
			<TouchableOpacity
				className=' items-center'
				onPress={() => navigation.navigate("Play")}>
				<Image source={require(`../assets/image3.png`)} className='h-30 w-30' />
				<View className='w-[100px]'>
					<Text className='text-[#E4DEEF] mt-1 text-center text-[12px]'>
						{text}
					</Text>
				</View>

				{/* <View className='absolute bottom-12 right-1 bg-white rounded-full'>
					<AntDesign name='playcircleo' size={24} color='black' />
				</View> */}
			</TouchableOpacity>
		</View>
	);
};

export default DailyMixCard;
