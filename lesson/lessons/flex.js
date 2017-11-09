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

export default class Flex extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
               <View style={styles.child1}></View>
                <View style={styles.child2}></View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        marginTop:30,
        backgroundColor:'red',
        //默认主轴column
        //设置为横向排列
        // flexDirection:'row',
        //主轴方向 x
        // justifyContent:'center',
        //交叉轴 y
        // alignItems:'center',
        flex:1
    },
    child1:{
        backgroundColor:'green',
        flex:1
    },
    child2:{
        backgroundColor:'blue',
        flex:2
    }
});

