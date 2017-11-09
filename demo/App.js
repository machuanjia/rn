/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TabBarIOS,
    StatusBar
} from 'react-native';

import {StackNavigator,TabNavigator,DrawerNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Navigation from './src/common/navigation';

import BookDetail from './src/book/book_detail';
import BookList from './src/book/book_list';
import MovieList from './src/movie/movie_list';
import CustomWebView from './src/common/customWebView';

const TabNavigatorComp = TabNavigator({
    Book: {
        screen: BookList,
        navigationOptions: {
            tabBarLabel: '图书',
            tabBarIcon: ({ tintColor, focused }) => (
                <Ionicons
                    name='ios-book'
                    size={26}
                    style={{ color: tintColor }}
                />
            ),
        },
    },
    Movie: {
        screen: MovieList,
        navigationOptions: {
            tabBarLabel: '电影',
            tabBarIcon: ({ tintColor, focused }) => (
                <Ionicons
                    name='ios-videocam'
                    size={26}
                    style={{ color: tintColor }}
                />
            ),
        },
    }
});

const NavigatorComp = StackNavigator({
    Home: { screen: TabNavigatorComp },
    BookDetail: { screen: BookDetail },
    MovieDetail:{screen:CustomWebView}
});

export default class App extends Component<{}> {
    render() {
        return (
            <NavigatorComp/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
