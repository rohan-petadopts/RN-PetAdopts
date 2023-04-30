import {Image, StyleSheet, View, Linking} from 'react-native';
import * as React from 'react';
import {Avatar, Button, Card, Text, IconButton} from 'react-native-paper';
const LeftContent = (props: any) => <Avatar.Icon {...props} icon="account" />;
import {useTheme} from 'react-native-paper';

export default function CardComponent({item}: any) {
  const theme = useTheme();
  return (
    <View style={{marginVertical: 10}}>
      <Card elevation={5} mode="elevated" style={{borderRadius: 0}}>
        <View style={styles.nameContainer}>
          <Avatar.Icon icon="account" size={35} />
          <Text variant="titleLarge">{item?.item?.name}</Text>
        </View>
        <Image
          style={{width: '100%', height: 200}}
          source={{
            uri: item?.item?.images?.[0]?.url,
          }}
        />
        <Card.Content style={{paddingTop: 20}}>
          <Text variant="titleLarge">{item?.item?.title}</Text>
          <Text variant="bodyMedium" style={{color: theme.colors.secondary}}>
            {item?.item?.description}
          </Text>
        </Card.Content>

        <Card.Actions style={{display: 'flex', flexDirection: 'row-reverse'}}>
          <IconButton icon="message" size={20} />
          <Button
            mode="contained-tonal"
            onPress={() => {
              Linking.openURL('tel:8855095242');
            }}>
            Contact
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  nameContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 10,
  },
});
