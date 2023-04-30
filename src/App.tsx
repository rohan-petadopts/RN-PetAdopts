import 'react-native-gesture-handler';
import {StatusBar, useColorScheme, View} from 'react-native';
import {Appbar} from 'react-native-paper';
import BottomTabs from './Routes/BottomTabs';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import AuthStack from './Routes/StackNavigation';
import FeedCardComponent from './Shimmers/FeedCard.component';

function App(): JSX.Element {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const LoginCheck = useSelector((state: RootState) => state.auth.isLoggedIn);
  const colorScheme = useColorScheme();
  const getLoggedInfo = async () => {
    let check: boolean = false;
    try {
      let value = await AsyncStorage.getItem('@isLoggedIn');
      if (value) {
        check = JSON.parse(value);
      }
    } catch (e) {}
    return check;
  };
  useEffect(() => {
    const user = getLoggedInfo();
    user.then((data: any) => {
      setIsLoggedIn(data);
    });
  }, [LoginCheck]);

  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle={colorScheme === 'dark' ? 'dark-content' : 'light-content'}
      />
      <Appbar.Header
        mode="center-aligned"
        style={{height: 60, elevation: 3}}
        elevated>
        <Appbar.Content title="Pet Adopts" />
      </Appbar.Header>
      {isLoggedIn ? (
        <BottomTabs />
      ) : (
        <AuthStack />
        // <LoginScreen setIsLoggedIn={setIsLoggedIn} />
      )}
    </View>
  );
}

export default App;
