import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/RegisterScreen/LoginScreen';
import BottomTabs from './BottomTabs';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        options={{
          headerShown: false,
        }}
        component={LoginScreen}
      />
      <Stack.Screen
        name="tabScreens"
        options={{
          headerShown: false,
        }}
        component={BottomTabs}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
