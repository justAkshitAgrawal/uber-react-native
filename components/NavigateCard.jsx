import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env";
import { useDispatch, useSelector } from "react-redux";
import { selectDestination, setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";
import NavFavourites from "./NavFavourites";
import { Icon } from "@rneui/themed";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const destination = useSelector(selectDestination);

  return (
    <SafeAreaView className=" bg-white flex-1">
      <Text className="text-center py-5 text-xl">Welcome Akshit</Text>
      <View className="border-t border-gray-200 flex-shrink">
        <View>
          <GooglePlacesAutocomplete
            styles={{
              container: {
                backgroundColor: "white",
                paddingTop: 20,
                flex: 0,
              },
              textInput: {
                fontSize: 18,
                backgroundColor: "#DDDDDF",
                borderRadius: 0,
              },
              textInputContainer: {
                paddingHorizontal: 20,
                paddingBottom: 0,
              },
            }}
            enablePoweredByContainer={false}
            placeholder="Where to?"
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            query={{
              key: GOOGLE_MAPS_API_KEY,
              language: "en",
              components: "country:in",
            }}
            minLength={2}
            returnKeyType={"search"}
            fetchDetails={true}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );

              navigation.navigate("RideOptionsCard");
            }}
          />
        </View>
        <NavFavourites />
      </View>
      <View className="flex-row bg-white justify-evenly py-2 border-t border-gray-100 mt-auto">
        <TouchableOpacity
          disabled={!destination}
          style={{
            backgroundColor: !destination ? "gray" : "black",
          }}
          onPress={() => {
            navigation.navigate("RideOptionsCard");
          }}
          className="flex-row justify-between items-center bg-black w-24 px-4 py-3 rounded-full"
        >
          <Icon type="font-awesome" name="car" color="white" size={16} />
          <Text className=" text-white text-center">Rides</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity className="flex-row justify-evenly items-center bg-black w-24 px-4 py-3 rounded-full">
          <Icon
            type="ionicon"
            name="fast-food-outline"
            color="white"
            size={16}
          />
          <Text className=" text-white text-center">Eats</Text>
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;
