import {StyleSheet, View, ScrollView, Image, Dimensions} from 'react-native';
import React from 'react';
import {Button, Card, Text, useTheme} from 'react-native-paper';
import {data} from '../JSON/myAdds.json';
import MyAddCardComponent from './MyAddCard.component';

const MyAddsComponent = (navigation: any) => {
  const theme = useTheme();
  return (
    <View
      style={{
        height: Dimensions.get('window').width * 1.05,
      }}>
      <Card elevation={2} mode="elevated">
        <Text variant="titleLarge" style={{textAlign: 'center', padding: 15}}>
          MY ADDS
        </Text>
        {data.length == 0 && (
          <>
            <Image
              source={require('../assets/emptyAdds.png')}
              style={{width: 120, alignSelf: 'center'}}
            />
            <View style={{alignItems: 'center', padding: 15, gap: 5}}>
              <Text>you didn't posted anything yet...</Text>
              <Button onPress={() => navigation.navigate('post')}>
                Post your First Add
              </Button>
            </View>
          </>
        )}
        <ScrollView
          style={{
            backgroundColor: theme.colors.background,
          }}>
          {data?.map((item: any, idx: number) => {
            return <MyAddCardComponent key={idx} item={item} />;
          })}
        </ScrollView>
      </Card>
    </View>
  );
};

export default MyAddsComponent;

const styles = StyleSheet.create({});
