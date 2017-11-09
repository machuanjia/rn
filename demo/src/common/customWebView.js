import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    NavigatorIOS,
    WebView
} from 'react-native';

import Header from './header';


export default class CustomWebView extends Component<{}>{

    constructor(){
        super();
    }


    render(){
        // const navigation = this.props.navigation;

        return(
            <View style={{backgroundColor:'white',flex:1}}>
                <WebView
                    startInLoadingState={true}
                    contentInset={{top:-44,bottom:-120}}
                    source={{url:this.props.navigation.state.params.url}}
                />
            </View>
        );
    }

    // componentDidMount () {
    //     /**
    //      * 将单击回调函数作为参数传递
    //      */
    //     this.props.navigation.setParams({
    //         title: "ssss"
    //     });
    // }

}
