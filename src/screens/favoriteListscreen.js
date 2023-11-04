import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, FlatList } from "react-native";
import * as Animatable from 'react-native-animatable';
import HeaderComponent from "../components/headerComponent";
import { CardComponent } from "../components/cardComponent";
import { useSelector } from "react-redux";
const FavoriteListScreen = ({ navigation }) => {
    const text_Color = '#1f1f5d'
    const favorites = useSelector((state) => state.movie.favorites)
    const movies = useSelector((state) => state.movie.movies)
    const filterdMovies = movies.filter(item => favorites?.includes(item?.id.toString()));

    return (
        <ScrollView style={styles.container}>
            <HeaderComponent title={'MY FAVORITE'} />
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
export default FavoriteListScreen
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: 'lightblue'

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
        flexWrap: 'wrap', marginTop: 20
    }

});