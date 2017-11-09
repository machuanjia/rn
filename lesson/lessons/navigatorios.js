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
import FirstPage from './first';
import PropTypes from 'prop-types';


export default class NavigatorComp extends Component<{}> {
    render() {
        let contents = [];
        for (var score in this.props["scores"]) {
            contents.push(<Text key={score.name}>{score.name}:{score.value}{"\n"}</Text>);
        }

        return (
            <NavigatorIOS
                initialRoute={{
                    component: FirstPage,
                    title: '首页',
                    passProps: {title: 'Worktile'}
                }}
                style={styles.flex}/>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    highScoresTitle: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    scores: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    flex:{
        flex:1
    }
});
