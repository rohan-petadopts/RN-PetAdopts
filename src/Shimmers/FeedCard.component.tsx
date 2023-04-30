import {StyleSheet, View} from 'react-native';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

const FeedCardComponent = () => {
  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

  return (
    <View>
      <View style={styles.flexContainer}>
        <ShimmerPlaceholder
          style={{width: 40, height: 40, borderRadius: 200}}
          shimmerColors={['#494949', '#232323', '#171717']}
        />
        <ShimmerPlaceholder
          style={{width: 200, height: 20, borderRadius: 10}}
          shimmerColors={['#494949', '#232323', '#171717']}
        />
      </View>
      <ShimmerPlaceholder
        style={{
          width: '100%',
          height: 180,
          marginTop: 10,
          display: 'flex',
          justifyContent: 'center',
        }}
        shimmerColors={['#171717', '#232323']}
      />
      <View style={styles.flexContainer}>
        <ShimmerPlaceholder
          style={{width: 90, height: 40, borderRadius: 200}}
          shimmerColors={['#494949', '#232323', '#171717']}
        />
        <ShimmerPlaceholder
          style={{width: 40, height: 40, borderRadius: 40}}
          shimmerColors={['#494949', '#232323', '#171717']}
        />
      </View>
    </View>
  );
};

export default FeedCardComponent;

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginTop: 10,
  },
});
