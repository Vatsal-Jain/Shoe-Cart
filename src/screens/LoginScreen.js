import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {signIn} from '../redux/authSlice';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const handleSignIn = () => {
    // Simulate user authentication (replace with your actual authentication logic)
    if (emailPattern.test(email) && password !== '') {
      const user = {id: 1, name: 'John Doe', admin: adminLogin}; // Replace with user data from your authentication process
      dispatch(signIn(user)); // Dispatch the signIn action with user data
    } else {
      // Handle authentication failure (display an error message, etc.)
      Alert.alert('Please Input Correct Fields');
    }
  };

  const [adminLogin, setAdminLogin] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 26, fontWeight: '800'}}>Login Screen</Text>
      <View
        style={{
          width: '80%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 20,
          marginVertical: 20,
        }}>
        <TouchableOpacity
          style={{
            width: '40%',
            padding: 10,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: adminLogin ? 'white' : 'black',

            borderWidth: 1,
            borderColor: 'black',
          }}
          onPress={() => setAdminLogin(false)}>
          <Text style={{color: adminLogin ? 'black' : 'white', fontSize: 16}}>
            User
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: '40%',
            padding: 10,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: adminLogin ? 'black' : 'white',

            borderWidth: 1,
            borderColor: 'black',
          }}
          onPress={() => setAdminLogin(true)}>
          <Text style={{color: adminLogin ? 'white' : 'black', fontSize: 16}}>
            Admin
          </Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity
        style={{
          width: '80%',
          padding: 10,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'black',
          marginTop: 10,
        }}
        onPress={handleSignIn}>
        <Text style={{color: 'white', fontSize: 18}}>Sign In</Text>
      </TouchableOpacity>
      <Text style={{color: 'black', marginTop: 10}}>
        Use any Email and Password to Login
      </Text>
      <Text style={{color: 'black', marginTop: 5}}>To Edit Use Admin</Text>
    </View>
  );
};

export default LoginScreen;

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
