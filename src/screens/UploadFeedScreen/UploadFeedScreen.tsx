import {useState} from 'react';
import {StyleSheet, useColorScheme, View} from 'react-native';
import {Portal, Dialog, Button, Text} from 'react-native-paper';
import DarkTheme from '../../../Theme/colorDarkTheme.json';
import LightTheme from '../../../Theme/colorLightTheme.json';

const UploadFeedScreen = () => {
  const isDark = 'dark' === useColorScheme();
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: isDark
          ? DarkTheme?.colors?.background
          : LightTheme?.colors?.background,
      }}>
      <Text>UploadFeedScreen</Text>
      <View>
        <Button onPress={showDialog}>Show Dialog</Button>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Alert</Dialog.Title>
            <Dialog.Content>
              <Text variant="bodyMedium">This is simple dialog</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </View>
  );
};

export default UploadFeedScreen;

const styles = StyleSheet.create({});
