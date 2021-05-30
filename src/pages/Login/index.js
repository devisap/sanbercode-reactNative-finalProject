import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import Banner from '../../assets/images/banner.svg'

const Login = () => {
    return (
        <ScrollView>
            <Banner />
        </ScrollView>
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

export default Login