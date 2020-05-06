import React from 'react';
import { ImageBackground, Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import logo from './assets/R2.png';
import axios from 'axios';

var myBackground = require('./assets/background.png');

export default class App extends React.Component {

  state = {
    email: "",
    onCall: true

  }

  verifyEmail = () => {
    this.setState({ onCall: true });
    axios.get("https://localhost:5001/api/employee/" + this.state.email)
      .then(function (response) {
        const statusCode = response.status;
        if (statusCode == 200) {
          //go to home screen
        }
      })
      .catch(function (error) {
        // handle error
        console.log("This " + this.state.email + " is incorrect.");
      })
      .then(function () {
        // always executed
      });
  }
  render() {
    return (
      <View style={styles.container} >
        <ImageBackground source={myBackground} style={styles.image}>
          <View style={styles.viewStyle}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.login}>Employee Login</Text>
            <TextInput
              style={styles.input}
              placeholder='e.g. anna@gmail.com'
              onChangeText={(email) => this.setState({ email })}
            />
            <TouchableOpacity
              onPress={this.verifyEmail}
              style={styles.button}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>

          </View>
        </ImageBackground>
      </View >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 24 : 0
  },
  viewStyle: {
    flex: 1,
    marginTop: 0,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  login: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  input: {
    borderWidth: 2,
    borderColor: '#b71c1c',
    padding: 8,
    margin: 10,
    width: 200,
    marginBottom: 30,
    color: 'white'
  },
  logo: {
    width: 305,
    height: 159,
    resizeMode: "contain",
    marginBottom: 30,

  },
  button: {
    backgroundColor: "#01579b",
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
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});
