/***
 * flex 布局
 * http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class ViewComp extends Component<{}> {
    render() {
        return (
            <View style={[styles.flex, styles.container]}>
                <View style={styles.item}>
                    <View style={[styles.flex, styles.center]}><Text>1</Text></View>
                    <View style={[styles.flex, styles.lineLeftRight]}>

                        <View style={[styles.flex, styles.center, styles.lineCenter]}>
                            <Text>21</Text>
                        </View>
                        <View style={[styles.flex, styles.center]}>
                            <Text>22</Text>
                        </View>


                    </View>
                    <View style={styles.flex}>
                        <View style={[styles.flex, styles.center, styles.lineCenter]}>
                            <Text>31</Text>
                        </View>
                        <View style={[styles.flex, styles.center]}>
                            <Text>32</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        backgroundColor: '#F2F2F2'
    },
    flex: {
        flex: 1
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    item: {
        flexDirection: 'row',
        backgroundColor: '#FF607C',
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        height: 80,
        borderRadius: 5
    },
    lineLeftRight: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: 'white'
    },
    lineCenter: {
        borderBottomWidth: 1,
        borderColor: 'white'
    }


});

