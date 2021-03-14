import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import {firebase,auth,createUserProfileDocument, signInWithGoogle,signInWithFacebook} from '../../firebase/config';

export default function RegistrationScreen({navigation}) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onFooterLinkPress = () => {
    navigation.navigate('Login');
  };

  const onRegisterPress = () => {
    //process of registration
    if (password !== confirmPassword) {
      alert('passwords dont match, try again!');
      return;
    }
    else if(password =='' || confirmPassword=='' || fullName=='' || email =='')
    {
      alert('Please enter the details');
    }
    else if (password == confirmPassword )
    {
      alert('Account created successfully!!!');
      navigation.navigate('Login');
    }
    //authentication process - registration
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.id;
        const data = {
          id: uid,
          email,
          fullName,
        };
        const usersRef = firebase.firestore().collection('users');
        usersRef
          .doc(uid)
          .set(data)
          .then(() => {
            navigation.navigate('Home', {user: data});
          })
          .catch((error) => {
            alert(error);
          })
          .catch((error) => {
            alert(error);
          });
      });
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{flex: 1, width: '100%'}}
        keyboardShouldPersistTaps="always">
        <Image
          style={styles.logo}
          source={require('../../../assets/icon.png')}
        />
        <TextInput 
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setFullName(text)}
          value={fullName}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
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
        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          placeholder="Confirm Password"
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />  
         <TouchableOpacity
         style={[styles.buttonContainer, styles.signupButton]}
         onPress={() => onRegisterPress()}>
         <Text style={styles.buttonTitle}>Create account</Text>
         </TouchableOpacity>
         <TouchableOpacity
         style={[styles.buttonContainer, styles.signupButton]}
         onPress={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
              </TouchableOpacity>
              <TouchableOpacity
         style={[styles.buttonContainer, styles.signupButton]}
         onPress={signInWithFacebook} isFacebookSignIn>
              Sign in with Facebook
              </TouchableOpacity>
        {/* <TouchableOpacity
          style={styles.button}
          onPress={() => onRegisterPress()}>
          <Text style={styles.buttonTitle}>Create account</Text>
        </TouchableOpacity> */}
        <View style={styles.footerView}>
          <Text style={styles.footerText}>
            Already got an account?{' '}
            <Text onPress={onFooterLinkPress} style={styles.footerLink}>
              Login
            </Text>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}