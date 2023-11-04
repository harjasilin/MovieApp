import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import * as Animatable from 'react-native-animatable';
import { useSelector, useDispatch } from 'react-redux';
import { importMovie } from "./action/movieAction"
const SplashScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const authenticatedUser = useSelector((state) => state.user.authenticatedUser)

    useEffect(() => {
        getMovie()
        const timer = setTimeout(() => {
            navigation.replace('Navigation');
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, [navigation]);
    const getMovie = () => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=a33f2538f9d0d87f5b14e450be9505b2")
            .then(res => res.json())
            .then(json => {
                dispatch(importMovie(json.results));
            });
    }

    return (
        <View style={styles.container}>
            <Animatable.Image
                animation="zoomIn"
                duration={3500}
                delay={1500}
                source={require('./assets/SplashImage.jpeg')}
                style={styles.image}
            />


        </View>
    )
}
export default SplashScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
    },
    image: {
        width: 500, height: 500
    },
});