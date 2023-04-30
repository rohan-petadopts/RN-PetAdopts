import {StyleSheet, useColorScheme} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeedScreen from '../screens/FeedScreen/FeedScreen';
import SearchScreen from '../screens/SearchScreen/SearchScreen';
import UploadFeedScreen from '../screens/UploadFeedScreen/UploadFeedScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import EIcon from 'react-native-vector-icons/Entypo';
import DarkTheme from '../../Theme/colorDarkTheme.json';
import LightTheme from '../../Theme/colorLightTheme.json';
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const isDark = 'dark' === useColorScheme();

  const getActiveColor = (focus: any) => {
    return {
      color: isDark
        ? focus
          ? DarkTheme?.colors?.primary
          : DarkTheme?.colors?.onSurfaceDisabled
        : focus
        ? LightTheme?.colors?.primary
        : LightTheme?.colors?.onSurfaceDisabled,
    };
  };
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: 'primary',
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarBadgeStyle: {
          backgroundColor: isDark
            ? DarkTheme?.colors?.onPrimaryContainer
            : LightTheme?.colors?.onPrimaryContainer,
        },
        tabBarStyle: {
          paddingBottom: 3,
          paddingHorizontal: 5,
          backgroundColor: isDark
            ? DarkTheme?.colors?.background
            : LightTheme?.colors?.background,
        },
      }}>
      <Tab.Screen
        name="home"
        component={FeedScreen}
        options={{
          tabBarLabel: 'home',
          headerShown: false,
          tabBarIcon: ({focused}: any) => (
            <EIcon name="home" size={25} style={getActiveColor(focused)} />
          ),
        }}
      />
      <Tab.Screen
        name="search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'search',
          headerShown: false,

          tabBarIcon: ({focused}: any) => (
            <Icon name="search" size={25} style={getActiveColor(focused)} />
          ),
        }}
      />
      <Tab.Screen
        name="post"
        component={UploadFeedScreen}
        options={{
          tabBarLabel: 'search',
          headerShown: false,
          tabBarIcon: ({focused}: any) => (
            <Icon
              name="plus-circle"
              size={25}
              style={getActiveColor(focused)}
            />
          ),
        }}
      />
      <Tab.Screen
        name="favorite"
        component={UploadFeedScreen}
        options={{
          tabBarLabel: 'search',
          headerShown: false,
          tabBarIcon: ({focused}: any) => (
            <Icon name="heart" size={25} style={getActiveColor(focused)} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'profile',
          headerShown: false,
          // tabBarBadge: 3,
          tabBarIcon: ({focused}: any) => (
            <Icon name="user" size={25} style={getActiveColor(focused)} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({});
