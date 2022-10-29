import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { useEffect } from 'react';

function Splash() {
  let navigation = useNavigation();

  useEffect(async () => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
  }, []);

  return (
    <View className="flex-1 justify-center items-center">
      <Text>Splash</Text>
    </View>
  );
}

export default Splash;
