import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';

var myBackground = require('../assets/yellow.png');


const ActiveList = (props) => {

    const [elevators, setElevators] = useState([])


    useEffect(() => {
        axios.get('https://annachowattanakulapi.azurewebsites.net/api/elevator/active')
            .then(response => {
                console.log(response.data)
                setElevators(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    const StatusScreen = (id, status) => {
        props.navigation.navigate('ActiveStatus', {
            elevatorID: id,
            elevatorStatus: status
        })
    };

    return (
        <View style={styles.container} >
            <ImageBackground source={myBackground} style={styles.image}>
                <View style={styles.viewStyle}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        keyExtract={elevators => elevators.id}
                        data={elevators}
                        renderItem={({ item }) => {
                            return <TouchableOpacity style={styles.elevatorList} onPress={() => StatusScreen(item.id, item.status)}><Text style={styles.textStyle}> Elevator ID {item.id} - Status: {item.status}</Text></TouchableOpacity>;
                        }}
                    />

                    <TouchableOpacity
                        activeOpacity={.7}
                        style={styles.button}
                        onPress={() => props.navigation.replace('Login')}>
                        <Text style={styles.buttonText}>Log Out</Text>
                    </TouchableOpacity>

                </View>
            </ImageBackground>
        </View>
    );

};

const styles = {
    container: {
        flex: 1,
        marginTop: Platform.OS === "android" ? 24 : 0
    },
    textStyle: {
        marginVertical: 20,
        fontSize: 15,
        color: "white"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },

    viewStyle: {
        flex: 1,
        marginTop: 15,
        alignItems: 'center',
        // justifyContent: 'center',
    },
    button: {
        alignSelf: "stretch",
        backgroundColor: "rgba(10, 40, 71, 0.30)",
        paddingTop: 15,
        paddingBottom: 15,
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
        alignSelf: "center",
    },
    elevatorList: {
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "rgba(33, 137, 242, 0.45)",
        marginTop: 5,
        borderRadius: 10,
    }
}
export default ActiveList;