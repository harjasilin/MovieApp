import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable';
import HeaderComponent from "../components/headerComponent";
import { CardComponent } from "../components/cardComponent";
import { useSelector } from "react-redux";
const WatchListScreen = ({ navigation }) => {
    const watchLists = useSelector((state) => state.movie.watchList)
    const movies = useSelector((state) => state.movie.movies)
    const filterdMovies = movies.filter(item => watchLists.includes(item.id.toString()));
    return (
        <ScrollView style={styles.container}>
            <HeaderComponent title={'MY WATCHLIST'} />

            <View style={styles.wrapper}>
                {filterdMovies &&

                    filterdMovies.map((movie, index) => (
                        <CardComponent data={movie} key={index} />
                    ))

                }
            </View>
        </ScrollView>
    )
}

export default WatchListScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue'

    },
    page: {
        padding: 25, marginTop: 20
    },
    wrapper: {
        flexDirection: 'row',
        marginHorizontal: 10,
        padding: 10,
        gap: 10,
        width: '100%',
        flexWrap: 'wrap',
        marginTop: 20
    }

});