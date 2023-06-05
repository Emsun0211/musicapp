import {
	Image,
	SafeAreaView,
	ScrollView,
	ScrollViewBase,
	StatusBar,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useState } from "react";
import { Ionicons, Feather } from "@expo/vector-icons";
import DailyMixCard from "../components/DailyMixCard";
import ChartCard from "../components/ChartCard";
import { useNavigation } from "@react-navigation/native";
import { Entypo, Foundation } from "@expo/vector-icons";

const HomeScreen = () => {
	const navigation = useNavigation();
	const [isPlaying, setIsplaying] = useState(false);
	return (
		<SafeAreaView
			className='flex-1 bg-black px-5'
			style={{ paddingTop: StatusBar.currentHeight }}>
			<View className='flex-row justify-between items-center pt-5 mb-5'>
				<View className='flex-row space-x-5 items-center'>
					<TouchableOpacity>
						<Text className='text-[#844DFB] font-bold text-[16px]'>
							For You
						</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => navigation.navigate("Trending")}>
						<Text className='text-white font-bold text-[16px]'>Trending</Text>
					</TouchableOpacity>
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
			</ScrollView>
			<View className='flex-row justify-between mb-2 items-center bg-gray-800 py-3 px-4 rounded-md'>
				<View className=' flex-row space-x-4 items-center'>
					<Image
						source={require("../assets/image2.png")}
						className='w-[40] h-[40] rounded-full'
					/>
					<View>
						<Text className='text-white'>Allen</Text>
						<Text className='text-white text-[10px]'>Rema</Text>
					</View>
				</View>
				<View className=' items-center  justify-center rounded-full '>
					{!isPlaying ? (
						<TouchableOpacity>
							<Entypo
								name='controller-play'
								size={30}
								color='#fff'
								onPress={() => setIsplaying(!isPlaying)}
							/>
						</TouchableOpacity>
					) : (
						<TouchableOpacity>
							<Foundation
								name='pause'
								size={30}
								color='#fff'
								onPress={() => setIsplaying(!isPlaying)}
							/>
						</TouchableOpacity>
					)}
				</View>
			</View>
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
