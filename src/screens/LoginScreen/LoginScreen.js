import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
// import {HomeScreen} from '../HomeScreen/HomeScreen'
// import {RegistrationScreen }  from '../RegistrationScreen/RegistrationScreen'
export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //functions

  const onFooterLinkPress = () => {
   navigation.navigate('RegistrationScreen')
  };

  const onLoginPress = () => {
    if(email =='' ||  password=='' )
    {
      alert('Please enter the details');
     
    }
    else
    {
      navigation.navigate('Home')
    }
    
  };

  //html render
 
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{flex: 1, width: '100%'}}
        keyboardShouldPersistTaps="always">
        {/* <Image styles={styles.logo} source={require('../../../assets/icon.png')} /> */}

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setEmail(text)}
          value={email}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />

<TouchableOpacity
         style={[styles.buttonContainer, styles.button]}>
      
         <Text onPress={() => onLoginPress()} style={styles.buttonTitle}>Login</Text>
       
         </TouchableOpacity>

        <View style={styles.footerView}>
          <Text style={styles.footerText}>
            Don't have an account?{' '}
            <Text onPress={onFooterLinkPress} style={styles.footerLink}>
              Sign up
            </Text>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}