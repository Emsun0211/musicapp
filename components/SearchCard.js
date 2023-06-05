import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const SearchCard = ({ text, color }) => {
	return (
		<TouchableOpacity
			className={`p-4 w-[167px] h-[72px]   items-center justify-center rounded-md mb-2`}
			style={{ backgroundColor: `${color}` }}>
			<Text className='text-white'>{text}</Text>
		</TouchableOpacity>
	);
};

export default SearchCard;
