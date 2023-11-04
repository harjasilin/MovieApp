import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { CardComponent, CardComponentHome } from "../components/cardComponent";
import Slider from "../components/sliderComponent/slider";
import { useDispatch, useSelector } from "react-redux";

const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const authenticatedUser = useSelector((state) => state.user.authenticatedUser)
    const movies = useSelector((state) => state.movie.movies)
    const name = authenticatedUser?.value?.userName
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.page}>
                Hello {name}
            </Text>
            <View style={{ marginTop: 20 }}>
                <Slider />
            </View>
            <Text style={{
                fontSize: 25,
                marginStart: 20,
                color: '#1f1f5d'
            }}>
                Movie
            </Text>
            <View style={styles.wrapper}>
                {movies.map((movie, index) => (
                    <CardComponent data={movie} key={index} />
                ))}
            </View>
        </ScrollView>
    )
}
export default HomeScreen
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: 'lightblue'
    },
    page: {
        marginTop: 20,
        fontSize: 25,
        marginStart: 50,
        color: '#1f1f5d'
    },
    wrapper: {
        flexDirection: 'row',
        marginHorizontal: 10,
        padding: 10,
        gap: 10,
        width: '100%',
        flexWrap: 'wrap'
    }



});