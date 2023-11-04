import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/Entypo'
import { useRoute } from '@react-navigation/native';
import { addToFavorite, addToWatchList, removeFromFavorite, removeFromWatchList } from "../action/movieAction";

import { useDispatch, useSelector } from "react-redux";
const DetailScreen = ({ }) => {

    const route = useRoute();
    const dispatch = useDispatch()
    const dataList = route?.params?.data;
    const favorites = useSelector((state) => state.movie.favorites)
    const isFavorite = favorites?.includes(dataList?.id.toString());

    const watchLists = useSelector((state) => state.movie.watchList)
    const isWatchList = watchLists?.includes(dataList?.id.toString());

    const base = 'https://image.tmdb.org/t/p/w500/' + dataList?.poster_path

    const toggleFavorite = () => {
        if (isFavorite) {
            dispatch(removeFromFavorite(dataList.id.toString()));
        } else {
            dispatch(addToFavorite(dataList.id.toString()));
        }
    };

    const toggleWatchList = () => {
        if (isWatchList) {
            dispatch(removeFromWatchList(dataList.id.toString()));
        } else {
            dispatch(addToWatchList(dataList.id.toString()));
        }
    };
    return (
        <ScrollView style={styles.container}>
            <Image
                source={{ uri: base }}
                style={styles.image}
            />
            <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#1f1f5d', fontSize: 30, width: '80%' }} numberOfLines={2}>
                        {dataList?.title}
                    </Text>
                    <View style={{ flexDirection: 'row', gap: 10 }}>
                        <TouchableOpacity onPress={toggleFavorite}>
                            {isFavorite ? <Icon name="heart" size={30} color="red" /> :
                                <Icon name="heart-outlined" size={30} color="black" />
                            }
                        </TouchableOpacity>

                        <TouchableOpacity onPress={toggleWatchList}>
                            {isWatchList ? <Icon name="shopping-cart" size={30} color="red" /> :
                                <Icon name="shopping-cart" size={30} color="black" />}
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={{ color: 'black' }}>Original Language : {dataList?.original_language}</Text>
                <Text style={{ color: 'black' }}>IMDB Rating : {dataList?.vote_average}</Text>

                <Text style={{ color: '#1f1f5d', fontSize: 18, marginTop: 10, marginBottom: 20 }} >
                    {dataList?.overview}
                </Text>
            </View>

        </ScrollView>
    )
}

export default DetailScreen;
const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 450,
        alignSelf: 'center'
    },
    container: {
        flex: 1
    }
});