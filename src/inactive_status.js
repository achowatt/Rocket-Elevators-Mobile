import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import logo from '../assets/R2.png';
import axios from 'axios';

var myBackground = require('../assets/blue.png');


const InactiveStatus = (props) => {

    // var status = props.navigation.state.params.elevatorStatus;
    var id = props.navigation.state.params.elevatorID;

    const [statusActive, setStatus] = useState(false);

    const changeStatus = (elevatorId, statusActive) => {
        // console.log(elevatorId);
        // console.log(elevatorStatus);
        if (statusActive == true) {
            return axios
                .put(
                    `https://annachowattanakulapi.azurewebsites.net/api/elevator/${elevatorId}/inactive`
                )
                .then(function (response) {
                    if (response.status == 200) {
                        console.log(response)
                        alert(`Success! Elevator ${elevatorId} has been changed to active!`)
                        setStatus(false);
                    }
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
        } else if (statusActive == false) {
            return axios
                .put(
                    `https://annachowattanakulapi.azurewebsites.net/api/elevator/${elevatorId}/active`
                )
                .then(function (response) {
                    if (response.status == 200) {
                        console.log(response)
                        alert(`Success! Elevator ${elevatorId} has been changed to inactive!`)
                        setStatus(true);
                    }
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
        }
    };


    return (
        <View style={styles.container} >
            <ImageBackground source={myBackground} style={styles.image}>
                <View style={styles.viewStyle}>
                    <Image source={logo} style={styles.logo} />

                    <Text style={styles.textStyle}>
                        ELEVATOR {id}
                    </Text>

                    <Text style={styles.currently}>
                        CURRENTLY
                </Text>

                    <TouchableOpacity style={statusActive ? styles.greenButton : styles.redButton} onPress={() => changeStatus(id, statusActive)}>
                        <Text style={styles.statusText}> {statusActive ? "active" : "inactive"} </Text>
                    </TouchableOpacity>


                    <Text style={styles.instruction}>
                        "Click on the button to change the status"
                </Text>

                    <TouchableOpacity onPress={() => props.navigation.replace('InactiveList')}>
                        <Text style={styles.BackButton}> Back to Elevator List </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={.7}
                        style={styles.LogOutbutton}
                        onPress={() => props.navigation.replace('Login')}>
                        <Text style={styles.LogOutText}>Log Out</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View >
    );

};

const styles = {
    container: {
        flex: 1,
        marginTop: Platform.OS === "android" ? 24 : 0
    },
    logo: {
        width: 305,
        height: 159,
        resizeMode: "contain",
        marginBottom: 30,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    currently: {
        marginBottom: 30,
        fontSize: 20,
        color: "white",
    },
    viewStyle: {
        flex: 1,
        marginTop: 15,
        alignItems: 'center',
        // justifyContent: 'center',
    },
    textStyle: {
        fontSize: 40,
        color: "red",
        marginBottom: 30,
    },
    statusText: {
        marginVertical: 20,
        fontSize: 30,
        color: "white",
        alignSelf: "center",
        textTransform: 'uppercase'
    },
    instruction: {
        fontSize: 20,
        marginBottom: 30,
        color: "white",
    },
    LogOutButton: {
        alignSelf: "stretch",
        // backgroundColor: "rgba(10, 40, 71, 0.30)",
        paddingTop: 15,
        paddingBottom: 15,
    },
    LogOutText: {
        fontSize: 20,
        color: 'red',
        alignSelf: "center",
        position: 'absolute',
    },
    redButton: {
        backgroundColor: "red",
        alignSelf: "center",
        paddingLeft: 100,
        paddingRight: 100,
        borderRadius: 40,
        marginBottom: 30,
    },
    greenButton: {
        backgroundColor: "green",
        alignSelf: "center",
        paddingLeft: 100,
        paddingRight: 100,
        borderRadius: 40,
        marginBottom: 30,
    },
    BackButton: {
        color: "white",
        marginBottom: 40
    }

}
export default InactiveStatus;