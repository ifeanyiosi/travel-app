import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { HeroImage } from "../../../assets";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1 relative">
      {/* First Section */}
      <View className="flex-row mt-8 px-4 items-center space-x-2 ">
        <View className="w-16 h-16 items-center justify-center bg-black rounded-full">
          <Text className="text-[#00bcc9] text-2xl font-semibold ">042</Text>
        </View>
        <Text className="text-3xl font-semibold text-[#2a2b4b]">Travel</Text>
      </View>

      {/* Second Section */}
      <View className="flex-col mt-8 px-4 space-y-2 ">
        <Text className="text-[#3c6072] text-[28px] ">
          For a trip so good, you could sell the
        </Text>
        <Text className="text-[#00bcc9] text-[38px] font-bold">
          Movie Rights
        </Text>
        <Text className="text-[#3c6072] text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          blanditiis.
        </Text>
      </View>

      {/* Circle Section */}
      <View className="w-[400px] h-[400px] bg-[#00bcc9] absolute rounded-full bottom-36  -right-36"></View>
      <View className="w-[400px] h-[400px] bg-[#e99265] absolute rounded-full -bottom-28  -left-36"></View>

      {/* Image Container */}
      <View className="flex-1 items-center justify-center mt-20 ">
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          source={HeroImage}
          className=" h-full w-full  object-contain"
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("Discover")}
          className="absolute bottom-20 w-24 h-24 border-r-2 border-l-2 border-t-4 border-[#00bcc9] rounded-full items-center justify-center"
        >
          <Animatable.View
            animation="pulse"
            easing="ease-in-out"
            iterationCount={"infinite"}
            className="w-20 h-20 items-center justify-center rounded-full bg-[#00bcc9]"
          >
            <Text className="text-gray-50 font-semibold text-[36px] ">042</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
