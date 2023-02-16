import React, {Component} from "react";
import {Text, View} from 'react-native';

export default class SpaceCraftScreen extends Component {
    render() {
        return (
            <View
            style = {{
                flex: 1,
                justifyContent: 'center',
                alingItems: 'center'
            }}>
                <Text>Tela da nave espacial!</Text>
            </View>
        )
    }
}