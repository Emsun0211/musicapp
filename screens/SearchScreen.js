import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { Button, Image, Input } from "@rneui/themed";
import SearchCard from "../components/SearchCard";

const SearchScreen = () => {
	return (
		<SafeAreaView
			className='flex-1 bg-black px-5'
			style={{ paddingTop: StatusBar.currentHeight }}>
			<View className='items-center mt-3'>
				<View className='border p-2 border-[#844dfb] w-[70px] h-[70px] rounded-full items-center justify-center mb-1'>
					<Feather name='mic' size={30} color='#844DFB' />
				</View>
				<Text className='text-white text-[16px] text-center'>Find Songs</Text>
			</View>
			<ScrollView className='mt-5'>
				<View className='relative'>
					<TextInput placeholder='Search' className='bg-white p-2 rounded-md' />
					<Feather
						name='search'
						size={30}
						color='#844DFB'
						position='absolute'
						bottom={5}
						right={5}
					/>
				</View>
				<View className='mt-4'>
					<Text className='text-white text-[16px] font-[800] mb-2'>
						Top Genre
					</Text>
					<View className='flex-row flex-wrap justify-between px-2'>
						<SearchCard text={"Pop"} color={"#FF5B5B"} />
						<SearchCard text={"Jazz"} color={"#E17000"} />
						<SearchCard text={"Hard-Rock"} color={"#0074A9"} />
						<SearchCard text={"Hip-pop"} color={"#038D00"} />
						<SearchCard text={"Classic"} color={"#7500CF"} />
						<SearchCard text={"Rock"} color={"#002BB6"} />
					</View>
				</View>
				<View className='mt-4'>
					<Text className='text-white text-[16px] font-[800] mb-2'>
						Browse All
					</Text>
					<View className='flex-row flex-wrap justify-between px-2'>
						<SearchCard text={"Pop"} color={"#FF5B5B"} />
						<SearchCard text={"Jazz"} color={"#E17000"} />
						<SearchCard text={"Hard-Rock"} color={"#0074A9"} />
						<SearchCard text={"Hip-pop"} color={"#038D00"} />
						<SearchCard text={"Classic"} color={"#7500CF"} />
						<SearchCard text={"Rock"} color={"#002BB6"} />
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default SearchScreen;

const styles = StyleSheet.create({});
