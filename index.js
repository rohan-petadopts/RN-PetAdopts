import {AppRegistry, useColorScheme} from 'react-native';
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import App from './src/App';
import {name as appName} from './app.json';
import {NavigationContainer} from '@react-navigation/native';
import CustomLightTheme from './Theme/colorLightTheme.json';
import CustomDarkTheme from './Theme/colorDarkTheme.json';
import {Provider} from 'react-redux';
import {store} from './redux/store';

const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...CustomLightTheme.colors,
  },
};
const DarkTheme = {
  ...DefaultTheme,
  colors: {
    ...CustomDarkTheme.colors,
  },
};

export default function Main() {
  const colorScheme = useColorScheme();
  return (
    <Provider store={store}>
      <PaperProvider theme={colorScheme === 'dark' ? DarkTheme : LightTheme}>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
