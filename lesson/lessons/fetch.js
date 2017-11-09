
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ListView
} from 'react-native';
export default class FetchComp extends Component<{}> {

    constructor() {
        super();
        this.movieData = require('./data.json');
        this.movies = this.movieData.movies;
        //避免全部渲染
        let ds = new ListView.DataSource({rowHasChanged: (o, n) => o !== n});
        this.state = {
            dataSource: ds,//ds.cloneWithRows(this.movies),
            loaded:false
        };
        this.url = "https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json";
    }

    renderLoading(){
        return(
            <View style={styles.loading}>
                <Text>Loading...</Text>
            </View>
        );
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
        if(!this.state.loaded){
            return this.renderLoading();
        }
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

    getData(){
        fetch(this.url).then((rv) => {
            return rv.json();
        }).then((rv)=>{
            this.setState({
                loaded:true,
                dataSource:this.state.dataSource.cloneWithRows(rv.movies)
            });
        }).catch((err)=>{
            console.log(err)
        });
    }


    componentDidMount(){
        this.getData();
    }
}
const styles = StyleSheet.create({
    loading:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
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

