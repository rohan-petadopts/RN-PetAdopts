import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Alert,
  TouchableHighlight,
  TouchableHighlightBase,
  TouchableNativeFeedback,
} from 'react-native';
import React from 'react';
import {Text, useTheme} from 'react-native-paper';

const MyAddCardComponent = ({item}: any) => {
  const theme = useTheme();
  return (
    <TouchableNativeFeedback onPress={() => Alert.alert('todo', 'adp')}>
      <View
        style={[styles.addContainer, {borderColor: theme.colors.secondary}]}>
        <Image
          style={{borderRadius: 5}}
          source={{
            uri: item.image,
            width: 140,
            height: 100,
          }}
        />
        <View>
          <Text variant="titleMedium">{item.title}</Text>
          <Text variant="labelMedium" style={{marginRight: 150}}>
            {item.description.slice(0, 40) + '...'}
          </Text>
          <Text variant="bodySmall">Add posted on: Jan 2020</Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

export default MyAddCardComponent;

const styles = StyleSheet.create({
  addContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 10,
    gap: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderBottomWidth: 0.5,
  },
});
