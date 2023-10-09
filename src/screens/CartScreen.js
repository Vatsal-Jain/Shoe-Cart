import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {selectCartItems, removeFromCart} from '../redux/cartSlice';
import {signOut} from '../redux/authSlice';
import AntDesign from 'react-native-vector-icons/AntDesign';
const CartScreen = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const handleRemoveFromCart = item => {
    dispatch(removeFromCart(item)); // Dispatch the removeFromCart action with the selected item
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Shopping Cart</Text>
      {cartItems.length === 0 ? (
        <Text style={{textAlign: 'center'}}>Your cart is empty.</Text>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.cartItemContainer}>
              <View
                style={{
                  flexDirection: 'row',
                  marginBottom: 10,
                  alignItems: 'center',
                  gap: 20,
                }}>
                <Image
                  source={{uri: item.imageLink}}
                  style={{
                    height: 80,
                    width: 80,
                    resizeMode: 'contain',
                    backgroundColor: 'white',
                  }}
                />
                <View style={{flexDirection: 'column'}}>
                  <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                    {item.brand}
                  </Text>
                  <Text>Size: {item.size}</Text>
                  <Text>Cost: ₹{item.cost}</Text>
                  <Text>Quantity: {item.quantity}</Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => handleRemoveFromCart(item)}
                style={{
                  width: '90%',
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 10,
                  backgroundColor: 'red',
                  alignSelf: 'center',
                }}>
                <Text style={{color: 'white', fontSize: 16}}>Remove Item</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}

      <TouchableOpacity
        style={{
          backgroundColor: 'orange',
          width: '80%',
          borderRadius: 10,
          padding: 10,
          position: 'absolute',
          bottom: 10,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          gap: 10,
          alignSelf: 'center',
        }}
        onPress={() => {
          dispatch(signOut());
        }}>
        <Text style={{color: 'white', fontSize: 18}}>Log Out</Text>
        <AntDesign name="logout" size={20} color={'white'} />
      </TouchableOpacity>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  cartItemContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
  },
});
