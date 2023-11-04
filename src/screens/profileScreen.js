import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable';
import HeaderComponent from "../components/headerComponent";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../action/authAction";
const ProfileScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const authenticatedUser = useSelector((state) => state.user.authenticatedUser)
    const text_Color = '#1f1f5d'
    const font_Size = 15
    const handleLogout = () => {
        dispatch(logout());
        navigation.navigate('SignIn')
    };

    return (
        <ScrollView style={styles.container}>
            <HeaderComponent title={'MY PROFILE'} />
            <View style={styles.page}>
                <View style={styles.wrapper}>
                    <Image
                        source={{ uri: authenticatedUser?.value?.imageURL }}
                        style={styles.image}
                    />
                    <View style={{ width: '55%', gap: 8 }}>
                        <Text
                            style={{ color: text_Color, fontSize: font_Size }}
                            numberOfLines={1}>
                            {authenticatedUser?.value?.userName}
                        </Text>
                        <Text style={{ color: text_Color, fontSize: font_Size }} numberOfLines={1}>{authenticatedUser?.value?.email}</Text>
                        <Text style={{ color: text_Color, fontSize: font_Size }} numberOfLines={1}>{authenticatedUser?.value?.phone}</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('FavoriteListScreen')}
                    style={styles.touchWrapper}>
                    <Text style={styles.text}>My Favorite</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('WatchListScreen')}
                    style={styles.touchWrapper}>
                    <Text style={styles.text}>My WatchList</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleLogout}
                    style={styles.touchWrapper}>
                    <Text style={styles.text}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
export default ProfileScreen
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: 'lightblue'

    },
    image: {
        height: 80,
        width: 80,
        borderRadius: 40
    },
    text: {
        color: '#1f1f5d', fontSize: 20
    },
    touchWrapper: {
        backgroundColor: 'white', padding: 20, borderWidth: 0.5, borderColor: '#1f1f5d', elevation: 3, borderRadius: 10, marginTop: 20

    },
    wrapper: {
        backgroundColor: 'white', padding: 30, width: '', borderWidth: 0.5, borderColor: '#1f1f5d', elevation: 3, borderRadius: 10,
        justifyContent: 'space-between', flexDirection: 'row'
    },
    page: {
        padding: 25, marginTop: 40
    }

});