import React, { useState } from 'react'
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Banner from '../../assets/images/banner.svg'
import Heading1 from '../../components/atoms/typography/Heading1'
import Icon from 'react-native-vector-icons/Ionicons'

const Register = ({ navigation }) => {
    const [isSecurePass, setIsSecurePass] = useState(true)
    const [isSecurePass2, setIsSecurePass2] = useState(true)
    return (
        <View style={styles.container}>
            <View style={styles.boxBanner}>
                <Banner />
            </View>
            <View style={styles.boxTitle}>
                <Heading1 text="Register" />
            </View>
            <View style={styles.boxInput}>
                <TextInput 
                    style={styles.input} 
                    placeholder="username"
                    placeholderTextColor="#A1A3A5"
                    selectionColor="#2C2B2E"
                />
                <Icon name="person" size={20} color="#A1A3A5" style={styles.inputIcon} />
                <View style={{marginTop: 16}}>
                    <TextInput
                        style={styles.input} 
                        placeholder="password"
                        placeholderTextColor="#A1A3A5"
                        selectionColor="#2C2B2E"
                        secureTextEntry={isSecurePass}
                    />
                    <TouchableOpacity style={styles.inputIcon} onPress={() => setIsSecurePass(!isSecurePass)}>
                        <Icon name="eye" size={20} color="#A1A3A5"/>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop: 16}}>
                    <TextInput
                        style={styles.input} 
                        placeholder="verification password"
                        placeholderTextColor="#A1A3A5"
                        selectionColor="#2C2B2E"
                        secureTextEntry={isSecurePass2}
                    />
                    <TouchableOpacity style={styles.inputIcon} onPress={() => setIsSecurePass2(!isSecurePass2)}>
                        <Icon name="eye" size={20} color="#A1A3A5"/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.boxFooter}>
                <View style={styles.boxQuestion}>
                    <Text style={styles.question1}>Already have an account? </Text>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.replace('Login')}>
                        <Text style={styles.question2}> Login</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity 
                    style={styles.btnSubmit} 
                    activeOpacity={0.8}
                    onPress={() => navigation.replace('Home')}
                >
                    <Text style={styles.btnSubmitText}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1F5F8',
        paddingHorizontal: 24
    },
    boxBanner: {
        alignItems: 'center',
        marginTop: 24
    },
    boxTitle: {
        marginTop: 32,
        alignItems: 'center'
    },
    boxInput: {
        marginTop: 32
    },
    input: {
        fontFamily: 'Montserrat',
        color: '#111100',
        backgroundColor: '#DEE2E5',
        borderRadius: 10,
        paddingLeft: 16
    },
    inputIcon : {
        position: 'absolute',
        alignSelf: 'flex-end',
        top: 14, right: 16
    },
    boxFooter: {
        flex: 1, 
        justifyContent: 'flex-end',
        marginBottom: 24
    },
    boxQuestion: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: 16
    },
    question1: {
        fontFamily: 'Montserrat',
        fontSize: 13,
        color: '#111100',
    },
    question2: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 13,
        color: '#111100',
    },
    btnSubmit: {
        backgroundColor: '#111100',
        borderRadius: 10
    },
    btnSubmitText: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16,
        color: '#fff',
        alignSelf: 'center',
        marginVertical: 16
    }
})

export default Register