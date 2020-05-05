import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import logo from './assets/R2.png';

export default function App() {
  const [email, employee_email] = useState('');
  function verifyEmail() {
    return fetch(`https://localhost:5001/api/employee/${email}`)
      .then((response) => response.json())
      .then((json) => {
        var getStatus = response.status;
        console.log(response.status);
        console.log(typeof getStatus);
      })
      .catch((error) => {
        console.error(error);
      });
  }



  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text>Employee Login:</Text>
      <TextInput
        style={styles.input}
        placeholder='e.g. anna@gmail.com'
      // onChangeText={(val) => employee_email(val)}
      />

      <Text>{email}</Text>

      <TouchableOpacity
        onPress={verifyEmail}
        style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
    resizeMode: "contain"
  },
  button: {
    backgroundColor: "blue",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 7,
    paddingBottom: 7,
    borderRadius: 100,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});
