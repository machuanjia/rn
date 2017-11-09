/***
 * flex 布局
 * http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import PropTypes from 'prop-types';
export default class TextComp extends Component<{}> {

    constructor(){
        super();
        this.compList = [];
    }

    static defaultProps = {
        news:[]
    };

    // static propTypes = {
    //     name: PropTypes.array.isRequired
    // };


    setData (){
        for(let i in this.props.news){
            let text = (
                <Text style={styles.item} numberOfLines={2} key={i}>
                    {this.props.news[i]}
                </Text>
            );
            this.compList.push(text);
        }
    }
    render() {
        this.setData();
        return (
            <View style={[styles.flex,styles.container]}>
                <View style={styles.header}>
                   <Text style={styles.font}>
                       <Text style={styles.font_1}>这里</Text>
                       <Text style={styles.font_2}>背景色</Text>
                       <Text>正常</Text>
                   </Text>
                </View>
                <View style={[styles.flex,styles.body]}>
                    <Text style={styles.title}>标题</Text>
                    {this.compList}
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        marginTop:30,
    },
    header:{
        height:40,
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'#ef2d36'
    },
    font:{
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center'
    },
    font_1:{
        color:'#cd1d1c'
    },
    font_2:{
        color:'#fff',
        backgroundColor:'#cd1d1d'
    },

    flex:{
        flex:1
    },
    body:{

    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        color:'#cd1d1c',
        marginLeft:10,
        marginTop:15
    },
    item:{
        margin:10,
        fontSize:15,
        lineHeight:30
    }

});

