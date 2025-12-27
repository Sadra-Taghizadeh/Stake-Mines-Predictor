import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
const About = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>About about </Text>
            <Link href="/" style={styles.link}>Home page</Link>
        </View>

    )
}

export default About

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    link: {
        marginVertical: 10,
        marginTop: 20,
        fontSize: 16,
        backgroundColor: '#eee',
        padding: 10,
        borderRadius: 10,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
})