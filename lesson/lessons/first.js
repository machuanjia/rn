/***
 * flex 布局
 * http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    NavigatorIOS,
    TouchableHighlight
} from 'react-native';
import PropTypes from 'prop-types';
import MyView from './second';

export  default  class FirstPage extends Component {
    static propTypes = {
        //title: PropTypes.string.isRequired,
        navigator: PropTypes.object.isRequired,
    }


    constructor(props, context) {
        super(props, context);
        this._onForward = this._onForward.bind(this);
        //this._onBack = this._onBack.bind(this);
    }


    _onForward() {
        this.props.navigator.push({
            component: MyView,
            title: '第二个页面',
            passProps: {myProp: 'genius'},
        });
    }


    render() {
        console.log("rendering");
        return (
            <View style={styles.container}>
                <Text style={styles.title}>你好: { this.props.title }</Text>
                <TouchableOpacity onPress={this._onForward} style={styles.button}>
                    <Text style={styles.buttonText}>点击显示下一个页面</Text>
                </TouchableOpacity>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange',
    },
    title:{
      fontSize:20,
        margin:30,
        color:'#fff'

    },
    button:{
      borderWidth:1,
        borderColor:'#fff',
        padding:10
    },
    buttonText:{
        color:'#fff'
    }
});
