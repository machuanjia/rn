import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';

import LeftIcon from './left.icon';

export default class Header extends Component<{}>{

    constructor(){
        super();
    }

    _pop(){
        this.props.navigator.pop();
    }

    initHeader(){
        this.headerContent = this.props.initObj;
    }

    render(){
        this.initHeader();
        return(
            <View style={styles.header}>
                <TouchableOpacity style={styles.left_btn} onPress={this._pop}>
                    <LeftIcon navigator={this.props.navigator}></LeftIcon>
                    <Text style={styles.btn_text}>{this.headerContent.backName}</Text>
                </TouchableOpacity>
                <View style={styles.title_container}>
                    <Text style={styles.title} numberOfLines={1}>{this.headerContent.barTitle}</Text>
                </View>
            </View>
        );
    }
    componentDidMount(){
    }

}

const styles = StyleSheet.create({
    header:{
        height:44,
        backgroundColor:'#3497ff',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'

    },
    left_btn:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    btn_text:{
        color:'#fff',
        fontSize:17,
        fontWeight:'bold'
    },
    title_container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        color:'#fff',
        fontSize:18,
        lineHeight:18,
        fontWeight:'bold',
        width:200
    }
});