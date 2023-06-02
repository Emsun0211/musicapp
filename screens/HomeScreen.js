import {
	Image,
	SafeAreaView,
	ScrollView,
	ScrollViewBase,
	StatusBar,
	Text,
	View,
} from "react-native";
import React from "react";
import { Ionicons, Feather } from "@expo/vector-icons";
import DailyMixCard from "../components/DailyMixCard";
import ChartCard from "../components/ChartCard";

const HomeScreen = () => {
	return (
		<SafeAreaView
			className='flex-1 bg-black px-5'
			style={{ paddingTop: StatusBar.currentHeight }}>
			<View className='flex-row justify-between items-center pt-5 mb-5'>
				<View className='flex-row space-x-5 items-center'>
					<Text className='text-[#844DFB] font-bold text-[16px]'>For You</Text>
					<Text className='text-white font-bold text-[16px]'>Trending</Text>
				</View>
				<View className='flex-row items-center space-x-5'>
					<Ionicons name='notifications-outline' size={24} color='white' />
					<Feather name='settings' size={24} color='white' />
				</View>
			</View>
			<ScrollView className=''>
				<View>
					<Text className='text-white text-[16px] font-[600] mb-2'>
						Recently Played
					</Text>
					<View className='flex-row justify-between border bg-[#252032] border-[#d9d9] rounded-[10px] items-center '>
						<Image
							source={require("../assets/image1.png")}
							className='h-30 w-30 '
						/>
						<View className='space-y-3 '>
							<Text className='text-white text-[14px]'>1. Man on the Moon</Text>
							<Text className='text-white text-[14px]'>
								2. Peace be unto you(PBUY)
							</Text>
							<Text className='text-white text-[14px]'>
								3. Milky way(Ruppe)
							</Text>
						</View>
					</View>
				</View>
				<View className='mt-3'>
					<Text className='text-white font-[600] text-[18px]'>Daily Mix</Text>
					<ScrollView horizontal className=''>
						<DailyMixCard text={"Mellow Songs from 2010"} />
						<DailyMixCard text={"Mellow Songs from 2010"} />
						<DailyMixCard text={"Mellow Songs from 2010"} />
						<DailyMixCard text={"Mellow Songs from 2010"} />
						<DailyMixCard text={"Mellow Songs from 2010"} />
					</ScrollView>
				</View>
				<View className='mt-3'>
					<View className='flex-row justify-between'>
						<Text className='text-white font-[600] text-[16px]'>Chart</Text>
						<Text className='text-[#844DFB] font-[600] text-[16px]'>More </Text>
					</View>
					<ChartCard />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default HomeScreen;

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: "#000",
// 	},
// });
