import {
  Dimensions,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import DarkTheme from '../../../Theme/colorDarkTheme.json';
import LightTheme from '../../../Theme/colorLightTheme.json';
import {Button, TextInput} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}: any) => {
  const isDark = 'dark' === useColorScheme();

  const storeLoginDetials = async (value: any) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@isLoggedIn', jsonValue);
    } catch (e) {
      // saving error
    }
  };
  const handleLogin = () => {
    storeLoginDetials(true);
    navigation.navigate('tabScreens');
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
      }}>
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
        }}
        style={{
          backgroundColor: isDark
            ? DarkTheme?.colors?.background
            : LightTheme?.colors?.background,
        }}>
        <Image
          source={require('../../assets/logo.png')}
          style={{
            width: Dimensions.get('window').width,
            height: 230,
          }}
        />
        <KeyboardAvoidingView behavior="padding">
          <View
            style={{
              width: Dimensions.get('window').width - 50,
              display: 'flex',
              rowGap: 20,
            }}>
            <TextInput mode="outlined" placeholder="Email Address" />
            <TextInput mode="outlined" placeholder="Password" />

            <Button mode="contained" onPress={() => handleLogin()}>
              <Text> Login</Text>
            </Button>

            <Button mode="text">
              <Text> New here? Register</Text>
            </Button>
            <Text style={{textAlign: 'center', fontSize: 15}}>OR</Text>
            <Button icon={'google'} mode="elevated">
              <Text> Continue with Google</Text>
            </Button>

            <Button icon="facebook" mode="elevated">
              <Text>Continue with Facebook</Text>
            </Button>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
