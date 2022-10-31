import {useRef, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import Header from '../components/header';

function Login() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  function processLogin() {
    console.log('email', email);
    console.log('password', password);
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
          <Text className="text-white font-bold">Continue to Sign in</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default Login;
