import { useNavigation } from '@react-navigation/native';
import {useRef, useState} from 'react';
import {ActivityIndicator, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Header from '../components/header';
import { actionTypes } from '../state/reducer';
import { useStateValue } from '../state/StateProvider';

function Login() {
  const navigation = useNavigation()
  const [{ user }, dispatch] = useStateValue();
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [loading, setloading] = useState(false);

  function processLogin() {
    if(email.length > 0 && password.length > 0){
      setloading(true)
      setTimeout(() => {
        dispatch({
          type: actionTypes.SET_USER,
          user: {
            email,
            password
          },
        });
        navigation.navigate('Main')
      }, 3000);
    }
  }

  return (
    <>
      <Header text="Login" centerText />
      <View className="flex-1 bg-white p-4">
        <TextInput
          onChangeText={(text) => {
            setemail(text);
          }}
          value={email}
          placeholder="Email:"
          className={`rounded border py-2 px-4 bg-[#fafafa] mb-4`}
        />
        <TextInput
          onChangeText={(text) => {
            setpassword(text);
          }}
          secureTextEntry
          placeholder="Password:"
          className={`rounded border py-2 px-4 bg-[#fafafa] mb-4`}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          className="rounded-md bg-[#0094db] w-full p-3 justify-center items-center mb-4"
          onPress={() => processLogin()}>
            {loading ? <ActivityIndicator size='small' color='#fff' /> : <Text className="text-white font-bold">Continue to Sign in</Text>}
          
        </TouchableOpacity>
      </View>
    </>
  );
}

export default Login;
