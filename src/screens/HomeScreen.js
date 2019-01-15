import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput, AsyncStorage } from 'react-native'
import { Dimensions } from 'react-native'
import { Actions, ActionConst } from 'react-native-router-flux'

const { height, width } = Dimensions.get('window')

export default class HomeScreen extends React.Component {

    state = {
        email: '',
        password: ''
    }

    login = () => {
        AsyncStorage.setItem('email', this.state.email, () => {
            Actions.profile()
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.email}
                    placeholder='Enter your email'
                    onChangeText={email => {
                        console.log(this.state.email)
                        this.setState({ email })
                    }}
                    value={this.state.email}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Enter your password'
                    secureTextEntry
                    onChangeText={password => {
                        console.log(this.state.password)
                        this.setState({ password })
                    }}
                    value={this.state.password}
                />
                <TouchableOpacity onPress={this.login}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        ...center,
        height,
        width,
        flex: 1
    },
    email: {
        width: '80%',
        height: 20,
        marginTop: 300
    },
    password: {
        width: '80%',
        alignSelf: 'center',
        height: 20
    }
})

const center = {
    alignItems: 'center',
    justifyContent: 'center'
}

const a = 0
const b = 0
export { a, b } 