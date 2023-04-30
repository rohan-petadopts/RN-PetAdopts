import {FlatList, StyleSheet, useColorScheme, View} from 'react-native';
import React from 'react';
import CardComponent from '../../Components/Card.component';
// import data from '../../JSON/feedData.json';
import DarkTheme from '../../../Theme/colorDarkTheme.json';
import LightTheme from '../../../Theme/colorLightTheme.json';
import useAxios from '../../../customHooks/axios';
import {ActivityIndicator, MD2Colors} from 'react-native-paper';
import FeedCardComponent from '../../Shimmers/FeedCard.component';

const FeedScreen = () => {
  const [data, error, loading] = useAxios<any>(
    'https://pet-adopts-backend.onrender.com/api/v1/products',
  );

  const renderCardItems = (item: any) => {
    return <CardComponent item={item} />;
  };
  const isDark = 'dark' === useColorScheme();
  return (
    <View
      style={{
        backgroundColor: isDark
          ? DarkTheme?.colors?.background
          : LightTheme?.colors?.background,
        flex: 1,
      }}>
      {loading &&
        [1, 2, 3, 4, 5, 4]?.map((item: number) => <FeedCardComponent />)}
      {data?.data && (
        <FlatList
          data={data?.data?.products}
          keyExtractor={item => item._id.toString()}
          renderItem={item => renderCardItems(item)}
        />
      )}
    </View>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({});
