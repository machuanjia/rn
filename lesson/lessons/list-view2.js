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
    Image,
    ListView
} from 'react-native';
export default class ListViewComp extends Component<{}> {

    constructor() {
        super();
        this.movieData = require('./data.json');
        this.movies = this.movieData.movies;
        //避免全部渲染
        let ds = new ListView.DataSource({rowHasChanged: (o, n) => o !== n});
        this.state = {
            dataSource: ds.cloneWithRows(this.movies),
        };
        this.url = "https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json";
    }

    renderRow(row) {
        return (
            <View style={styles.row}>
                <Image style={styles.thumnail}
                        source={{uri: row.posters.thumbnail}}
                />
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{row.title}</Text>
                    <Text style={styles.year}>{row.year}</Text>
                </View>
            </View>
        );
    }

    renderHeader() {
        return (
            <View style={styles.header}>
                <Text style={styles.header_text}>Movies List</Text>
            </View>
        );
    }

    renderSeparator(sectionID, rowID) {
        return (
            <View style={styles.separator} key={sectionID+rowID}></View>
        );
    }

    render() {
        return (
            <ListView style={styles.listView}
                      dataSource={this.state.dataSource}
                      renderRow={this.renderRow}
                      renderHeader={this.renderHeader}
                      renderSeparator={this.renderSeparator}
                      initialListSize={10}
            />
        );
    }
}
const styles = StyleSheet.create({
    listView: {
        flex: 1,
        marginTop: 30,
        backgroundColor: '#f5fcff'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        backgroundColor: '#f5fcff'
    },
    thumnail: {
        width: 53,
        height: 81,
        backgroundColor: 'gray'
    },
    rightContainer: {
        marginLeft: 30,
        flex: 1
    },
    title: {
        fontSize: 18,
        marginTop: 3,
        marginBottom: 3,
    },
    year:{
        color:'#666'
    },
    separator:{
        borderBottomWidth:1,
        borderBottomColor:'#ccc'
    },
    header:{
        height:50,
        alignItems:'center',
        backgroundColor: '#f5fcff',
        borderBottomWidth:1,
        borderBottomColor:'#666'
    },
    header_text:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        lineHeight:44
    }
});

