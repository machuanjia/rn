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


export default  class MyView extends Component {
    _handleBackPress() {
        this.props.navigator.pop();
    }


    _handleNextPress(nextRoute) {
        this.props.navigator.push(nextRoute);
    }


    _onBack() {
        this.props.navigator.pop();
    }

    render() {
        const nextRoute = {
            component: MyView,
            title: 'Bar That',
            passProps: {myProp: 'bar'}
        };
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this._handleNextPress(nextRoute)} style={styles.button}>
                    <Text  style={styles.buttonText}>
                        下一次页面 {this.props.myProp}!
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._onBack.bind(this)} style={styles.button}>
                    <Text style={styles.buttonText}>返回 </Text>
                </TouchableOpacity>
            </View>
        );


    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#22d7bb',
    },
    title:{
        fontSize:20,
        margin:30,
        color:'#fff'

    },
    button:{
        borderWidth:1,
        borderColor:'#fff',
        padding:10,
        margin:30
    },
    buttonText:{
        color:'#fff'
    }
});
