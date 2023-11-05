import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable';
import HeaderComponent from "../components/headerComponent";
import { CardComponent } from "../components/cardComponent";
import { useSelector } from "react-redux";
const WatchListScreen = ({ navigation }) => {
    const text_Color = '#1f1f5d'
    const watchLists = useSelector((state) => state.movie.watchList)
    const movies = useSelector((state) => state.movie.movies)
    const filterdMovies = movies?.filter(item => watchLists?.includes(item.id.toString()));
    return (
        <ScrollView style={styles.container}>
            <HeaderComponent title={'MY WATCHLIST'} />
            {filterdMovies.length > 0 ? (
                <View style={styles.wrapper}>
                    {
                        filterdMovies.map((movie, index) => (
                            <CardComponent data={movie} key={index} />
                        ))
                    }

                </View>
            ) : (
                <View style={{ marginTop: '40%', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20 }}>No data present!!</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}
                        style={{ backgroundColor: 'white', padding: 10, borderRadius: 10, elevation: 10, marginTop: 10 }}>
                        <Text style={{ color: text_Color }}>Go to Home Screen</Text>
                    </TouchableOpacity>
                </View>
            )}
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