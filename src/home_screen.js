import React from 'react';
import { ImageBackground, Image, Text, View, TextInput, TouchableOpacity } from 'react-native';
import logo from '../assets/R2.png';
var myBackground = require('../assets/yellow.png');

const HomePage = (props) => {

    return (
        <View style={styles.container} >
            <ImageBackground source={myBackground} style={styles.image}>
                <View style={styles.viewStyle}>
                    <Image source={logo} style={styles.logo} />
                    <Text style={styles.welcome}>Welcome to our Home Page!</Text>
                    <Text style={styles.description}> Please feel free to change the status of any elevators</Text>

                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('ActiveList')}
                        style={styles.activeButton}>
                        <Text style={styles.buttonText}>ACTIVE ELEVATORS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('InactiveList')}
                        style={styles.inactiveButton}>
                        <Text style={styles.buttonText}>INACTIVE ELEVATORS</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity
                        onPress={() => props.navigation.replace('Login')}
                        style={styles.logout}>
                        <Text style={styles.logoutText}>LOG OUT</Text>
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
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    logo: {
        width: 305,
        height: 159,
        resizeMode: "contain",
        marginTop: 60,
    },
    activeButton: {
        borderColor: "white",
        backgroundColor: "rgba(28, 206, 156, 0.79)",
        paddingHorizontal: 50,
        paddingVertical: 15,
        borderRadius: 100,
        marginTop: 40,
        borderWidth: 2,
        borderColor: "rgba(55, 241, 114, 1)",
    },
    inactiveButton: {
        backgroundColor: "rgba(176, 12, 12, 0.79)",
        paddingHorizontal: 44,
        paddingVertical: 15,
        borderRadius: 100,
        marginTop: 20,
        borderWidth: 2,
        borderColor: "rgba(219, 15, 15, 0.96)",
    },
    buttonText: {
        fontSize: 20,
        color: "white"
    },
    welcome: {
        fontSize: 27,
        color: "red"
    },
    description: {
        color: "#dddddd"
    },
    logout: {
        alignSelf: "stretch",
        backgroundColor: "rgba(0, 0, 0, 0.58)",
        paddingVertical: 20,

    },
    logoutText: {
        alignSelf: "center",
        color: "white",
        fontSize: 20,
    }
}
export default HomePage;