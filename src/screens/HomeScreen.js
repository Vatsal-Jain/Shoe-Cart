import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {selectShoes} from '../redux/shoeSlice'; // Import the shoes selector
import {addToCart} from '../redux/cartSlice';
import {selectAuth} from '../redux/authSlice';
const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const shoes = useSelector(selectShoes);

  const userData = useSelector(selectAuth);
  console.log('user data is', userData);

  const handleAddToCart = shoe => {
    dispatch(addToCart(shoe)); // Dispatch the addToCart action with the selected shoe
    navigation.navigate('Cart');
  };

  const handleEditProduct = item => {
    navigation.navigate('EditScreen', {
      data: item,
    });
  };

  // React.useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => (
  //       <TouchableOpacity
  //         hitSlop={{right: 10, left: 10, top: 10, bottom: 10}}
  //         onPress={() => {
  //           userData?.user?.admin === true
  //             ? navigation.navigate('EditScreen')
  //             : navigation.navigate('Cart');
  //         }}
  //         style={{
  //           marginRight: 0,

  //           paddingVertical: 10,
  //           paddingHorizontal: 20,
  //         }}>
  //         <Text> {userData?.user?.admin === true ? 'Admin' : 'Cart'}</Text>
  //       </TouchableOpacity>
  //     ),
  //   });
  // }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Shoe Collection</Text>
      <FlatList
        data={shoes}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.shoeContainer}>
            <View
              style={{
                flexDirection: 'row',
                marginBottom: 10,
                alignItems: 'center',
              }}>
              <Image
                source={{uri: item?.imageLink}}
                style={{
                  height: 80,
                  width: 80,
                  resizeMode: 'contain',
                  backgroundColor: 'white',
                }}
              />
              <View style={{flexDirection: 'column', marginLeft: 20}}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                  {item.brand}
                </Text>
                <Text>Size: {item.size}</Text>
                <Text>Cost: ₹{item.cost}</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() =>
                userData?.user?.admin === true
                  ? handleEditProduct(item)
                  : handleAddToCart(item)
              }
              style={{
                width: '90%',
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 10,
                backgroundColor: 'lightblue',
                alignSelf: 'center',
              }}>
              <Text>
                {userData?.user?.admin === true
                  ? 'Edit Product'
                  : 'Add To Cart'}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

HomeScreen.navigationOptions = ({navigation}) => ({
  title: 'Home',
  headerRight: () => (
    <Button
      title="Cart"
      onPress={() => navigation.navigate('Cart')} // Navigate to the Cart screen
      style={styles.cartButton}
    />
  ),
});

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  shoeContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  cartButton: {
    marginRight: 10, // Add some margin to the right for spacing
  },
});
