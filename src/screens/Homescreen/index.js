import { View, Text, SafeAreaView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1">
      {/* First Section */}
      <View className="flex-row mt-8 px-4 items-center space-x-2 ">
        <View className="w-16 h-16 items-center justify-center bg-black rounded-full">
          <Text className="text-[#00bcc9] text-2xl font-semibold ">042</Text>
        </View>
        <Text className='text-3xl font-semibold text-[#2a2b4b]'>Travel</Text>
      </View>

      {/* Second Section */}
    </SafeAreaView>
  );
};

export default HomeScreen;
