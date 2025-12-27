import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
const Home = () => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                style={[{ width: 50, height: 50 }, styles.img]}
            />

            <Text style={styles.title}>Home</Text>
            <Text style={{ marginTop: 10, marginBottom: 10 }}>First app</Text>
            <View style={{ gap: 10 }}>

                <View style={styles.card}>
                    <Link href="/about">About page</Link>
                </View>
                <View style={styles.card}>
                    <Link href="/contact">Contact page</Link>
                </View>
            </View>

        </View>
    )
}

export default Home

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
    img: {
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    card: {
        backgroundColor: '#eee',
        padding: 20,
        borderRadius: 10,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
})