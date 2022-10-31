import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';

function Splash() {
  let navigation = useNavigation();

  useEffect(async () => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
  }, []);

  return (
    <View className="flex-1">
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        className="flex-1 justify-center items-center">
        <Text className="text-[40px] text-white font-bold">InsideOut</Text>
      </LinearGradient>
    </View>
  );
}

export default Splash;
