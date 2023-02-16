import React, {Component} from "react";
import {Text, View} from 'react-native';

export default class StartMapScreen extends Component {
    render() {
        return (
            <View
            style = {{
                flex: 1,
                justifyContent: 'center',
                alingItems: 'center'
            }}>
                <Text>Tela do Mapa da Estrela!</Text>
            </View>
        )
    }
}