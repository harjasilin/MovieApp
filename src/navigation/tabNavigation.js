import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Entypo'
import HomeScreen from '../screens/homeScreen';
import FavoriteListScreen from '../screens/favoriteListscreen';
import WatchListScreen from '../screens/watchListScreen';
import ProfileScreen from '../screens/profileScreen';
import SearchScreen from '../screens/searchScreen'
import { useSelector } from 'react-redux';
import SignIn from '../auth/signIn';

const Tab = createBottomTabNavigator();
const Navigation = () => {
    const authenticatedUser = useSelector((state) => state.user.authenticatedUser)
    return (

        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: 'black',
            }}>
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Fontisto name="home" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="SearchScreen"
                component={authenticatedUser ? SearchScreen : SignIn}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="search" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="FavoriteListScreen"
                component={authenticatedUser ? FavoriteListScreen : SignIn}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="heart" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="WatchListScreen"
                component={authenticatedUser ? WatchListScreen : SignIn}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="shopping-cart" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="ProfileScreen"
                component={authenticatedUser ? ProfileScreen : SignIn}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="people" size={size} color={color} />
                    ),
                }}
            />

        </Tab.Navigator>

    );
};

export default Navigation;

const styles = StyleSheet.create({});