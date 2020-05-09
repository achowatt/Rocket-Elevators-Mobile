import React, { useState } from 'react';
import { ImageBackground, Image, Text, View, TextInput, TouchableOpacity } from 'react-native';
import logo from '../assets/R2.png';
import axios from 'axios';
var myBackground = require('../assets/background.png');

const Startup = (props) => {

    const [email, getEmail] = useState('');

    const verifyEmail = () => {
        let employee_email = email;
        return axios.get(`https://annachowattanakulapi.azurewebsites.net/api/employee/${employee_email}`)
            .then(function (response) {
                const statusCode = response.status;
                if (statusCode == 200) {
                    props.navigation.replace('Home');
                }
            })
            .catch(function (error) {
                // handle error
                console.log(`This ${employee_email} is incorrect.`);
                alert(`${employee_email} is unavailable. If you need any assistance, please call the tech department. Thank you!`);
            })
            .then(function () {
                // always executed
            });
    }

    return (
        <View style={styles.container} >
            <ImageBackground source={myBackground} style={styles.image}>
                <View style={styles.viewStyle}>
                    <Image source={logo} style={styles.logo} />
                    <Text style={styles.login}>Employee Email</Text>
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        placeholder='e.g. test@test.ca'
                        placeholderTextColor="#dddddd"
                        required
                        onChangeText={(e) => getEmail(e.target.value)}
                        onChangeText={(value) => {
                            getEmail(value)
                        }}
                        value={email}
                    />
                    <TouchableOpacity
                        onPress={() => verifyEmail()}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Enter</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View >
    )
}

const styles = {
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
        width: 500,
        paddingHorizontal: 5,
        paddingVertical: 10,
        fontSize: 20,
        margin: 10,
        width: 200,
        marginBottom: 30,
        color: 'white',
    },
    logo: {
        width: 305,
        height: 159,
        resizeMode: "contain",
        marginBottom: 30,
    },
    button: {
        borderWidth: 2,
        borderColor: "#dddddd",
        backgroundColor: "#01579b",
        paddingHorizontal: 30,
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
    onchange: {
        color: "red",
    },
    testtest: {
        color: "white",
    }
}
export default Startup;