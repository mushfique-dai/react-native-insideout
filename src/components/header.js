import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StackActions, useNavigation} from '@react-navigation/native';

export default function Header({text = '', backButton = false, centerText = false}) {
  const navigation = useNavigation();

  return (
    <View className="flex bg-white py-5 px-4 justify-between flex-row items-center">
      <View className="flex-1">
        <View className="flex-row items-center pr-6">
          {backButton && (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="mr-4">
              <Ionicons name={'ios-arrow-back'} size={26} color={'#000'} />
            </TouchableOpacity>
          )}
          <View className={`flex-1 justify-center ${centerText ? 'items-center' : 'items-start'}`}>
            <Text numberOfLines={1} className="text-black text-[20px] font-bold">
                {text ? text : 'InsideOut'}
            </Text>
          </View>
          
        </View>
      </View>
    </View>
  );
}
