import {useState} from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  useColorScheme,
} from 'react-native';
import EditProfile from '../../Components/EditProfile.component';
import MyAddsComponent from '../../Components/MyAdds.component';
import ProfileComponent from '../../Components/Profile.component';
import DarkTheme from '../../../Theme/colorDarkTheme.json';
import LightTheme from '../../../Theme/colorLightTheme.json';
import {Button, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {setLogout} from '../../../redux/auth/auth.slice';

const ProfileScreen = ({navigation}: any) => {
  const [openEditProfile, setOpenEditProfile] = useState(false);
  const isDark = 'dark' === useColorScheme();

  const dispatch = useDispatch();
  const handleLogout = async () => {
    dispatch(setLogout());
    try {
      const jsonValue = JSON.stringify(false);
      await AsyncStorage.setItem('@isLoggedIn', jsonValue);
    } catch (e) {
      // saving error
    }
    navigation.navigate('login');
  };
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: isDark
            ? DarkTheme?.colors?.background
            : LightTheme?.colors?.background,
          alignItems: 'center',
        }}>
        <KeyboardAvoidingView behavior="padding">
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <>
              {!openEditProfile && (
                <ProfileComponent setOpenEditProfile={setOpenEditProfile} />
              )}
              {openEditProfile && (
                <EditProfile setOpenEditProfile={setOpenEditProfile} />
              )}
            </>
          </TouchableWithoutFeedback>
          {!openEditProfile && (
            <View style={{marginHorizontal: 20, marginTop: 20}}>
              <MyAddsComponent {...navigation} />
            </View>
          )}
        </KeyboardAvoidingView>
        <Button
          style={{position: 'absolute', bottom: 10}}
          mode="contained"
          onPress={() => handleLogout()}>
          <Text style={{marginRight: 10}}> {`LOGOUT    `}</Text>
          <Icon name="log-out" size={15} />
        </Button>
      </View>
    </>
  );
};

export default ProfileScreen;
