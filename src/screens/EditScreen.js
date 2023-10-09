import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {deleteShoe, editShoe} from '../redux/shoeSlice';

const EditScreen = ({navigation}) => {
  const route = useRoute();
  const dataTo = route.params;
  const dataIs = dataTo.data;

  console.log('teh data ', dataIs);

  const [brand, setBrand] = useState(dataIs?.brand);
  const [size, setSize] = useState(dataIs?.size);
  const [cost, setCost] = useState(dataIs?.cost);

  const dispatch = useDispatch();

  const handleEditShoe = () => {
    const payLoadIs = {
      id: dataIs.id,
      brand: brand,
      size: size,
      cost: cost,
    };
    dispatch(editShoe(payLoadIs));
    navigation.navigate('HomeScreen');
  };

  const handleDeleteShoe = id => {
    dispatch(deleteShoe({id}));
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 24,
          color: 'black',
          fontWeight: '600',
          marginVertical: 20,
        }}>
        Edit Shoes
      </Text>
      <Image
        source={{uri: dataIs.imageLink}}
        style={{
          height: 100,
          width: 100,
          borderRadius: 10,
          backgroundColor: 'white',
          resizeMode: 'contain',
        }}
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setBrand(text)}
        value={brand}
      />
      <TextInput
        style={styles.input}
        keyboardType={'numeric'}
        onChangeText={text => setSize(text)}
        value={size}
      />
      <TextInput
        style={styles.input}
        keyboardType={'numeric'}
        onChangeText={text => setCost(text)}
        value={cost}
      />
      <TouchableOpacity
        onPress={() => {
          handleEditShoe();
        }}
        style={{
          backgroundColor: 'green',
          width: '80%',
          borderRadius: 10,
          padding: 10,
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 10,
        }}>
        <Text style={{color: 'white', fontSize: 16}}>Submit Changes</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          handleDeleteShoe(dataIs.id);
        }}
        style={{
          backgroundColor: 'red',
          width: '80%',
          borderRadius: 10,
          padding: 10,
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 10,
        }}>
        <Text style={{color: 'white', fontSize: 16}}>Delete Shoe</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
