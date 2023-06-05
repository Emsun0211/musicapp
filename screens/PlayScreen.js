// // import { StyleSheet, Text, View } from "react-native";

// import React, { useEffect, useState } from "react";
// import {
// 	SafeAreaView,
// 	StyleSheet,
// 	View,
// 	Button,
// 	Text,
// 	ActivityIndicator,
// } from "react-native";
// import TrackPlayer from "react-native-track-player";
// import { addTracks, setupPlayer } from "../components/PlayerServices";
// // import { setupPlayer, addTracks } from './trackPlayerServices';

// const PlayScreen = () => {
// 	const [isPlayerReady, setIsPlayerReady] = useState(false);

// 	useEffect(() => {
// 		async function setup() {
// 			let isSetup = await setupPlayer();

// 			const queue = await TrackPlayer.getQueue();
// 			if (isSetup && queue.length <= 0) {
// 				await addTracks();
// 			}

// 			setIsPlayerReady(isSetup);
// 		}

// 		setup();
// 	}, []);

// 	if (!isPlayerReady) {
// 		return (
// 			<SafeAreaView style={styles.container}>
// 				<ActivityIndicator size='large' color='#bbb' />
// 			</SafeAreaView>
// 		);
// 	}

// 	return (
// 		<SafeAreaView style={styles.container}>
// 			<Button title='Play' color='#777' onPress={() => TrackPlayer.play()} />
// 		</SafeAreaView>
// 	);
// };

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		justifyContent: "center",
// 		padding: 20,
// 		backgroundColor: "#112",
// 	},
// });

// export default PlayScreen;

import {
	View,
	Text,
	SafeAreaView,
	StatusBar,
	Image,
	TouchableOpacity,
	FlatList,
	Animated,
	Dimensions,
} from "react-native";
// import TrackPlayer, {
// 	Capability,
// 	Event,
// 	RepeatMode,
// 	State,
// 	usePlaybackState,
// 	useProgress,
// 	useTrackPlayerEvents,
// } from "react-native-track-player";
import React, { useEffect, useRef, useState } from "react";
import {
	Feather,
	Entypo,
	MaterialIcons,
	Foundation,
	MaterialCommunityIcons,
	Ionicons,
} from "@expo/vector-icons";

import Slider from "@react-native-community/slider";
import songs from "../model/data";

const { width, height } = Dimensions.get("window");

// const setupPlayer = async () => {
// 	try {
// 		await TrackPlayer.setupPlayer();
// 		await TrackPlayer.updateOptions({
// 			capabilities: [
// 				Capability.Play,
// 				Capability.Pause,
// 				Capability.SkipToNext,
// 				Capability.SkipToPrevious,
// 				Capability.Stop,
// 			],
// 		});
// 		await TrackPlayer.add(songs);
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

// async function setup() {
// 	await TrackPlayer.setupPlayer({});
// 	await TrackPlayer.updateOptions({
// 		stopWithApp: true,
// 		capabilities: [
// 			TrackPlayer.CAPABILITY_PLAY,
// 			TrackPlayer.CAPABILITY_PAUSE,
// 			TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
// 			TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
// 			TrackPlayer.CAPABILITY_STOP,
// 			TrackPlayer.CAPABILITY_SEEK_TO,
// 		],
// 		compactCapabilities: [
// 			TrackPlayer.CAPABILITY_PLAY,
// 			TrackPlayer.CAPABILITY_PAUSE,
// 		],
// 	});
// }

// async function setupPlayer() {
// 	let isSetup = false;
// 	try {
// 		await TrackPlayer.getCurrentTrack();
// 		isSetup = true;
// 	} catch {
// 		await TrackPlayer.setupPlayer();
// 		await TrackPlayer.updateOptions({
// 			android: {
// 				appKilledPlaybackBehavior:
// 					AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
// 			},
// 			capabilities: [
// 				Capability.Play,
// 				Capability.Pause,
// 				Capability.SkipToNext,
// 				Capability.SkipToPrevious,
// 				Capability.SeekTo,
// 			],
// 			compactCapabilities: [
// 				Capability.Play,
// 				Capability.Pause,
// 				Capability.SkipToNext,
// 			],
// 			progressUpdateEventInterval: 2,
// 		});

// 		isSetup = true;
// 	} finally {
// 		return isSetup;
// 	}
// }

// const togglePlayBack = async (playBackState) => {
// 	const currentTrack = await TrackPlayer.getCurrentTrack();
// 	console.log(currentTrack, playBackState, State.Playing);
// 	if (currentTrack != null) {
// 		if (playBackState == State.Paused) {
// 			await TrackPlayer.play();
// 		} else {
// 			await TrackPlayer.pause();
// 		}
// 	}
// };

const PlayScreen = () => {
	// const playBackState = usePlaybackState();
	// const progress = useProgress();
	// //   custom states
	// const [songIndex, setsongIndex] = useState(0);
	// const [repeatMode, setRepeatMode] = useState("off");
	// const [trackTitle, setTrackTitle] = useState();
	// const [trackArtist, setTrackArtist] = useState();
	// const [trackArtwork, setTrackArtwork] = useState();
	const scrollX = useRef(new Animated.Value(0)).current;
	const songSlider = useRef(null);

	useEffect(() => {
		// setupPlayer();

		scrollX.addListener(({ value }) => {
			console.log(`ScrollX : ${value} | Device Width : ${width} `);
			// const index = Math.round(value / width);
			// skipTo(index);
			// setsongIndex(index);
			//   console.log(`Index : ${index}`);
		});

		return () => {
			scrollX.removeAllListeners();
			// TrackPlayer.destroy();
		};
	}, []);
	const renderSongs = ({ item, index }) => (
		<Animated.View className='items-center justify-center  mt-5 '>
			<View className='w-[400] h-[400] px-2'>
				<Image
					// source={require("../assets/playpic.png")}
					source={item.artwork}
					className='w-[100%] h-[100%] rounded-md'
				/>
			</View>
		</Animated.View>
	);
	const [isPlay, setIsplay] = useState(false);
	return (
		<SafeAreaView
			className='flex-1 bg-black px-2'
			style={{ paddingTop: StatusBar.currentHeight }}>
			<View className='mt-4 flex-row justify-between items-center'>
				<Feather name='chevron-down' size={24} color='white' />
				<Text className=' text-white'>Top 100 NIgerians</Text>
				<Entypo name='dots-three-horizontal' size={24} color='white' />
			</View>

			<Animated.FlatList
				data={songs}
				renderItem={renderSongs}
				keyExtractor={(item) => item.id}
				showsHorizontalScrollIndicator={false}
				scrollEventThrottle={16}
				horizontal={true}
				pagingEnabled
				onScroll={Animated.event(
					[
						{
							nativeEvent: {
								contentOffset: { x: scrollX },
							},
						},
					],
					{ useNativeDriver: true }
				)}
			/>
			<View>
				<View className='flex-row items-center justify-between w-80 mx-auto mt-5'>
					<View>
						<Text className='text-white'>Allen</Text>
						<Text className='text-white text-[10px]'>Rema</Text>
					</View>
					<Feather name='heart' size={24} color='white' />
				</View>
				<View className='mx-auto'>
					<Slider
						style={{
							width: 350,
							height: 40,
							marginTop: 25,
							flexDirection: "row",
						}}
						value={10}
						maximumTrackTintColor='#fff'
						minimumTrackTintColor='#fff'
						thumbTintColor='#fff'
						maximumValue={1}
						minimumValue={0}
						onSlidingComplete={() => {
							console.log("I changed the value");
						}}
					/>
					<View className=' flex-row justify-between'>
						<Text className='text-white font-[500]'>00:00</Text>
						<Text className='text-white font-[500]'>00:00</Text>
					</View>
				</View>
				<View className='flex-row justify-between items-center mt-2 px-2'>
					<TouchableOpacity>
						<Entypo name='shuffle' size={24} color='white' />
					</TouchableOpacity>
					<View className='flex-row items-center space-x-4'>
						<TouchableOpacity>
							<MaterialIcons name='skip-previous' size={34} color='white' />
						</TouchableOpacity>

						<TouchableOpacity>
							<Ionicons
								name={
									// playBackState === State.Playing
									isPlay ? "ios-pause-circle" : "ios-play-circle"
								}
								size={75}
								color='#fff'
								onPress={() => setIsplay(!isPlay)}
							/>
						</TouchableOpacity>

						<TouchableOpacity>
							<MaterialIcons name='skip-next' size={34} color='white' />
						</TouchableOpacity>
					</View>
					<TouchableOpacity>
						<MaterialCommunityIcons name='reload' size={30} color='white' />
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default PlayScreen;
