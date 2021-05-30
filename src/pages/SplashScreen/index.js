import React from 'react'
import { StatusBar, StyleSheet, View,  } from 'react-native'
import Logo from '../../assets/images/logo.svg'

const SplashSceen = () => {
    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor={'transparent'} />
            <Logo />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1F5F8',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default SplashSceen