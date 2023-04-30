import {
  Alert,
  Image,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Dimensions,
  ToastAndroid,
} from 'react-native';
import {Card, TextInput, Button, IconButton, Text} from 'react-native-paper';
import {useTheme} from 'react-native-paper';
import {DismissKeyboard} from '../../utilities/DismissKeyboard';

const EditProfile = ({setOpenEditProfile}: any) => {
  const theme = useTheme();

  return (
    <KeyboardAvoidingView behavior="padding">
      <DismissKeyboard>
        <View
          style={{
            paddingTop: 20,
            padding: 20,
            flex: 1,
            width: Dimensions.get('window').width,
          }}>
          <Card
            style={{
              paddingTop: 10,
              paddingBottom: 10,
            }}>
            <Text variant="headlineSmall" style={{alignSelf: 'center'}}>
              Profile Details
            </Text>
            <IconButton
              style={{position: 'absolute', right: -10, top: -10}}
              onPress={() => {
                setOpenEditProfile(false);
              }}
              icon="close"
              size={20}
            />
          </Card>
          <View style={styles.editProfileContainer}>
            <View>
              <TouchableOpacity
                onPress={() => Alert.alert('Profile Upload', 'TODO')}>
                <View>
                  <Image
                    style={styles.ImageContainer}
                    source={require('../assets/profilePic.png')}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{display: 'flex', gap: 20}}>
            <View style={{paddingHorizontal: 10, gap: 20}}>
              <TextInput
                mode="outlined"
                label="Name"
                placeholder="Type something"
              />
              <TextInput
                mode="outlined"
                label="city"
                placeholder="Type something"
              />
              <TextInput
                mode="outlined"
                label="Address"
                multiline
                placeholder="address..."
                onContentSizeChange={event => {}}
                numberOfLines={4}
              />
            </View>
            <Button
              contentStyle={{flexDirection: 'row-reverse'}}
              icon="account-check"
              mode="contained"
              onPress={() => {
                ToastAndroid.showWithGravity(
                  'Profile Details Updated Successfully...',
                  ToastAndroid.SHORT,
                  ToastAndroid.CENTER,
                );
                setOpenEditProfile(false);
              }}>
              Update
            </Button>
          </View>
        </View>
      </DismissKeyboard>
    </KeyboardAvoidingView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  editProfileContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageContainer: {
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    width: Dimensions.get('window').width * 0.45,
    height: Dimensions.get('window').width * 0.45,

    resizeMode: 'contain',
  },
});
