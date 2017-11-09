/**
 *
 * ScrollView会简单粗暴地把所有子元素一次性全部渲染出来
 * ListView会惰性渲染子元素，只在它们将要出现在屏幕中时开始渲染。
 */


import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView
} from 'react-native';
export default class ListViewComp extends Component<{}> {

    constructor() {
        super();
        this.array = [
            '任务',
            '日程',
            '简报',
            '审批',
            '消息',
            '公告'
        ];
        //避免全部渲染
        let ds = new ListView.DataSource({rowHasChanged: (o, n) => o !== n});
        this.state = {
            dataSource: ds.cloneWithRows(this.array),
        };
    }


    renderRow (row){
        return (
            <View style={styles.row}>
                <Text style={styles.content}>{row}</Text>
            </View>
        );
    }

    render() {
        return (
            <ListView style={styles.container}
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:30

    },
    row:{
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        height:100,
        borderBottomWidth:1,
        borderColor:'#ccc'
    },
    content:{
        flex:1,
        fontSize:20,
        color:'blue',
        lineHeight:100
    }
});

