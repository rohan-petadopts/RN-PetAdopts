import {Image, StyleSheet, View} from 'react-native';
import * as React from 'react';
import {Card, Text, IconButton} from 'react-native-paper';
import {useTheme} from 'react-native-paper';
const ProfileComponent = ({setOpenEditProfile}: any) => {
  const theme = useTheme();
  return (
    <View>
      <Card elevation={3} mode="elevated" style={styles.cardContainer}>
        <View style={styles.flexContainer}>
          <View>
            <Image
              style={{width: 100, height: 100}}
              source={require('../assets/profilePic.png')}
            />
          </View>

          <Card.Content style={{paddingTop: 20}}>
            <Text variant="titleLarge">Rohan Karankot</Text>
            <Text variant="bodyLarge" style={{color: theme.colors.secondary}}>
              rohankarankot@gmail.com
            </Text>
            <Text variant="bodySmall" style={{color: theme.colors.secondary}}>
              member since 2020
            </Text>
          </Card.Content>
          <IconButton
            style={{position: 'absolute', right: -15, top: -15}}
            onPress={() => {
              setOpenEditProfile(true);
            }}
            icon="cog"
            size={20}
          />
        </View>
      </Card>
    </View>
  );
};

export default ProfileComponent;

const styles = StyleSheet.create({
  cardContainer: {marginHorizontal: 20, marginTop: 20, padding: 10},
  flexContainer: {display: 'flex', flexDirection: 'row'},
});
