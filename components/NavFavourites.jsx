import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";

const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "Makka Wala, Uttrakhand, India",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "Delhi, India",
  },
];

const NavFavourites = () => {
  return (
    <FlatList
      className="mt-3"
      data={data}
      ItemSeparatorComponent={() => {
        return <View className="bg-gray-200 h-[0.5px]" />;
      }}
      keyExtractor={(item) => item.id}
      renderItem={({ item: { location, icon, destination } }) => (
        <TouchableOpacity className="flex-row items-center p-5 ">
          <View className=" mr-4 rounded-full bg-gray-300 p-3">
            <Icon type="ionicon" color="white" size={18} name={icon} />
          </View>
          <View>
            <Text className="text-lg font-semibold">{location}</Text>
            <Text className="text-gray-500 text-xs">{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;
