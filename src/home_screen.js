import React from 'react';
import { ImageBackground, Image, Text, View, TextInput, TouchableOpacity } from 'react-native';
import logo from '../assets/R2.png';
var myBackground = require('../assets/background.png');

const HomePage = (props) => {

    return (
        <View style={styles.container} >
            {/* <ImageBackground source={myBackground} style={styles.image}> */}
            <View style={styles.viewStyle}>
                <Image source={logo} style={styles.logo} />
                <Text>Welcome!</Text>
                <Text> Please feel free to change the status of any elevators</Text>

                <TouchableOpacity
                    onPress={() => props.navigation.navigate('ActiveList')}
                    style={styles.button}>
                    <Text style={styles.buttonText}>ACTIVE ELEVATORS</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => props.navigation.navigate('InactiveList')}
                    style={styles.button}>
                    <Text style={styles.buttonText}>INACTIVE ELEVATORS</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => props.navigation.replace('Login')}
                    style={styles.button}>
                    <Text style={styles.buttonText}>LOG OUT</Text>
                </TouchableOpacity>

            </View>
            {/* </ImageBackground> */}
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
        justifyContent: 'center',
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
        marginTop: 20,
    },
    buttonTest: {
        fontSize: 30
    }
}
export default HomePage;