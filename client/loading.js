import React, { Component } from 'react';
import { StyleSheet, View, Text, StatusBar, Image } from 'react-native';
import { Font } from 'expo';
import logo from '../public/img/logo.png';


export default class loading extends Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        const { navigate } = this.props.navigation;
        setTimeout(() => {
            navigate('Input');
        }, 500)
    }


    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} />
                <Image style={styles.img} source={logo} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(128,130,133)',
        alignItems: 'center',
        paddingTop: '45%'
    },
    img: {
        height: 135,
        width: 220
    }
})