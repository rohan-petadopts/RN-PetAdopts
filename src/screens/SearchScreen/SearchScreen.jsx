import {StyleSheet, useColorScheme, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import {DismissKeyboard} from '../../../utilities/DismissKeyboard';
import DarkTheme from '../../../Theme/colorDarkTheme.json';
import LightTheme from '../../../Theme/colorLightTheme.json';

const SearchScreen = () => {
  const isDark = 'dark' === useColorScheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: isDark
          ? DarkTheme?.colors?.background
          : LightTheme?.colors?.background,
      }}>
      <DismissKeyboard>
        <View style={{flex: 1}}>
          <TextInput
            mode="outlined"
            placeholder="search for pets/accessories etc in your city"
            style={{margin: 10}}
            left={<TextInput.Icon icon="magnify" />}
          />
        </View>
      </DismissKeyboard>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
