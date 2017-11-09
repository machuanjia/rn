import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    ActivityIndicator
} from 'react-native';


export default Util = {
    windowSize:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height
    },
    getRequest(url,resolve,reject){
        fetch(url).then((response) => {
            return response.json()
        }).then((rv) => {
            resolve(rv);
        }).catch((error) => {
            reject(error);
        });
    },
    loading:<ActivityIndicator style={{marginTop:200}}/>
}