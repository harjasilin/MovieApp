import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { CardComponent } from "../components/cardComponent";
import { useSelector } from "react-redux";
const SearchScreen = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredMovieList, setFilteredMovieList] = useState([]);
    const movies = useSelector((state) => state.movie.movies)
    const handleSearch = (query) => {
        setSearchQuery(query);

        if (query.trim() === '') {
            setFilteredMovieList([]);
        } else {
            const filteredMovies = movies.filter(movie => {
                return movie.title.toLowerCase().includes(query.toLowerCase());
            });
            setFilteredMovieList(filteredMovies);
        }
    }
    return (
        <ScrollView style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder="Search here..."
                placeholderTextColor={'black'}
                value={searchQuery}
                onChangeText={handleSearch}
            />
            <View style={styles.wrapper}>
                {filteredMovieList.map(movie => (
                    <CardComponent key={movie.id} data={movie} />
                ))}
            </View>
        </ScrollView>
    )
}
export default SearchScreen
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: 'lightblue'
    },

    textInput: {
        height: 50,
        width: '85%',
        backgroundColor: 'white',
        alignSelf: 'center',
        borderWidth: 0.5,
        borderColor: '#1f1f5d',
        borderRadius: 15,
        marginTop: 40,
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