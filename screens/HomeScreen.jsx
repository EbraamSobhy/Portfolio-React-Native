    import React, { useState } from 'react';
    import { View, Text, Image, StyleSheet, Switch } from 'react-native';

    export default function HomeScreen() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const styles = createStyles(isDarkMode);

    return (
        <View style={styles.container}>
        <View style={styles.switchContainer}>
        <Text style={styles.text}>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</Text>
            <Switch
            value={isDarkMode}
            onValueChange={toggleTheme}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
            />
        </View>
        <Text style={styles.welcomeTitle}>Welcome To My Portfolio</Text>
        <Image source={require('../assets/Ebraam.jpeg')} style={styles.profileImage} />
        <Text style={styles.title}>Ebraam Sobhy</Text>
        <Text style={styles.subtitle}>Software Developer</Text>
        </View>
    );
    }

    const createStyles = (isDarkMode) => {
    return StyleSheet.create({
        container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: isDarkMode ? '#121212' : '#ffffff',
        },
        switchContainer: {
        position: 'absolute',
        top: 10,
        right: 10,
        },
        profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 20,
        borderColor: isDarkMode ? '#ffffff' : '#121212',
        borderWidth: 2,
        },
        title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: isDarkMode ? '#ffffff' : '#000000',
        },
        subtitle: {
        fontSize: 18,
        color: isDarkMode ? '#bbbbbb' : '#555555',
        },
        welcomeTitle: {
        paddingBottom: 80,
        fontSize: 24,
        fontWeight: 'bold',
        color: isDarkMode ? '#ffffff' : '#000000',
        },
        text: {
            fontSize: 15,
            color: isDarkMode ? 'white' : 'black',
        }
    });
    };
