import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useSelector } from "react-redux";
export const CardComponent = ({ data, }) => {
    const authenticatedUser = useSelector((state) => state.user.authenticatedUser)
    const navigation = useNavigation();
    const base = 'https://image.tmdb.org/t/p/w500/' + data.poster_path
    return (
        <TouchableOpacity onPress={() => navigation.navigate(authenticatedUser ? 'DetailScreen' : 'SignIn', { data: data })}
            style={styles.page}>
            <Image
                source={{ uri: base }}
                style={styles.image}
                resizeMode="contain"
            />
            <View style={styles.footerWrap}>
                <Text style={styles.movieDetail} numberOfLines={2}>
                    {data?.title}
                </Text>
            </View>
        </TouchableOpacity >

    )
}

const styles = StyleSheet.create({
    page: {
        borderRadius: 20,
        padding: 2,
        backgroundColor: 'white',
        width: '46%'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1f1f5d'
    },
    image: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: 170,
        width: '100%'
    },
    footerWrap: {
        justifyContent: 'center',
    },
    movieDetail: {
        color: 'black',
        padding: 8
    },
    pageHome: {
        borderRadius: 20,
        padding: 2,
        backgroundColor: 'white', margin: 5

    },
    imageHome: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: 170,
        width: 170
    },
    footerWrap: {
        justifyContent: 'center', width: 170
    },

});