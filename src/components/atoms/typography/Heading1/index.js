import React from 'react'
import { StyleSheet, Text } from 'react-native'

const Heading1 = props => {
    return (
        <Text style={styles.heading1}>{props.text?props.text : 'Heading1'}</Text>
    )
}

const styles = StyleSheet.create({
    heading1: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 32
    }
})

export default Heading1