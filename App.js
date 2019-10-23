/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import { TextInput } from 'react-native-paper'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AnimateLoadingButton from 'react-native-animate-loading-button'

const App: () => React$Node = () => {

  state = {
    email: '',
    password: ''
  }


  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={{
          marginTop: 50,
          width: '100%',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start'
        }}>
          <TextInput 
           label='Email'
           value={this.state.email}
           onChangeText={text => this.setState({ email: text })}
            style={{width: 300, height: 60, padding: 10, borderBottomColor: '#000', borderBottomWidth: 2}}
          />

          <TextInput 
            label='Password'
            value={this.state.password}
            onChangeText={text => this.setState({ password: text })}
            secureTextEntry
            style={{width: 300, height: 60, padding: 10, borderBottomColor: '#000', borderBottomWidth: 2, marginTop: 20, marginBottom: 50}}
          />
          
          <AnimateLoadingButton
          width={300}
          height={50}
          title="Login"
          titleFontSize={16}
          titleColor="rgb(255,255,255)"
          backgroundColor='#2E8B57'
          borderRadius={4}
          style={{marginTop: 50}}
         
        />

        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
