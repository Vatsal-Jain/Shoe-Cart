// screens/AdminPanelScreen.js
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addShoe, editShoe, selectShoes} from '../redux/shoeSlice'; // Import the shoe-related actions
import {signOut} from '../redux/authSlice';
import AntDesign from 'react-native-vector-icons/AntDesign';

const AdminPanelScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [brand, setBrand] = useState('');
  const [size, setSize] = useState('');
  const [cost, setCost] = useState('');
  const shoesArray = useSelector(selectShoes);

  const handleAddShoe = () => {
    if (brand == '' || cost == '' || size == '' || imageLink == '') {
      Alert.alert('fill all details');
    } else {
      const id = shoesArray.length + 1;
      console.log('id is', id);
      // Dispatch the addShoe action with shoe details
      dispatch(addShoe({id, brand, size, cost, imageLink}));
      navigation.navigate('Home');
      setBrand('');
      setCost('');
      setSize('');
      setImageLink('');
    }
  };

  const handleEditShoe = shoeId => {
    // Dispatch the editShoe action with shoe details and the ID of the shoe being edited
    dispatch(editShoe({id: shoeId, brand, size, cost}));
  };
  const randomImage = [
    {
      imageLink: 'https://m.media-amazon.com/images/I/61bWDCmKhrL._UY695_.jpg',
    },
    {
      imageLink: 'https://m.media-amazon.com/images/I/61umRTP9JyL._UY695_.jpg',
    },
    {
      imageLink: 'https://m.media-amazon.com/images/I/71ojYlMBRrL._UX695_.jpg',
    },
    {
      imageLink: 'https://m.media-amazon.com/images/I/71-Gr1ulJhL._UY695_.jpg',
    },
  ];
  const [imageLink, setImageLink] = useState('');
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24, color: 'black', fontWeight: '600'}}>
        Add Shoes
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Brand"
        onChangeText={text => setBrand(text)}
        value={brand}
      />
      <TextInput
        style={styles.input}
        placeholder="Size"
        onChangeText={text => setSize(text)}
        value={size}
      />
      <TextInput
        style={styles.input}
        placeholder="Cost"
        onChangeText={text => setCost(text)}
        value={cost}
      />
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginBottom: 10,
          alignItems: 'center',
          gap: 10,
        }}>
        {randomImage.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{
              width: '17%',

              borderWidth: 2,
              borderColor: imageLink === item.imageLink ? 'blue' : 'white',
              borderRadius: 10,
              backgroundColor: 'white',
              padding: 5,
            }}
            onPress={() => setImageLink(item.imageLink)}>
            <Image
              source={{uri: item.imageLink}}
              style={{
                aspectRatio: 1, // To maintain a 1:1 aspect ratio
                resizeMode: 'contain',
                backgroundColor: 'white',
                borderRadius: 10,
              }}
            />
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        onPress={handleAddShoe}
        style={{
          width: '80%',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
          padding: 10,
          backgroundColor: 'green',
          marginBottom: 10,
        }}>
        <Text style={{color: 'white'}}>Add Shoe</Text>
      </TouchableOpacity>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
});

export default AdminPanelScreen;
