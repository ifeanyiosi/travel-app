import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Avatar } from "../../../assets";

const Discover = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white relative pt-8">
      <View className="flex-row  items-center justify-between px-8 ">
        <View className="">
          <Text className="text-[40px] text-[#0b646b] font-bold ">
            Discover
          </Text>
          <Text className="text-[#527283] text-[36px] ">042 today</Text>
        </View>
        <View className="w-12 h-12 rounded-full bg-red-200 items-center justify-center">
          <Image
            className="w-full h-full rounded-full object-cover shadow-lg"
            source={Avatar}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Discover;
