import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  // {
  //   id: "456",
  //   title: "Order food",
  //   image: "https://links.papareact.com/28w",
  //   screen: "EatsScreen",
  // },
];

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(item.screen);
          }}
          className=" p-2 bg-gray-200 mr-4  w-40 pl-6 pb-8 pt-4 rounded-md"
          disabled={!origin}
        >
          <View
            style={{
              opacity: origin ? 1 : 0.5,
            }}
          >
            <Image
              source={{ uri: item.image }}
              style={{
                width: 120,
                height: 120,
                resizeMode: "contain",
              }}
            />
            <Text className="mt-2 text-lg font-semibold">{item.title}</Text>
            <View className="p-2 bg-black rounded-full w-10 mt-4">
              <Icon type="antdesign" name="arrowright" color="white" />
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
