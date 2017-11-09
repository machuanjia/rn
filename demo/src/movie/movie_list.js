import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    ListView,
    ScrollView
} from 'react-native';

import Util from './../common/util';
import SearchBar from './../common/searchBar';
import ServiceURL from './../common/service';
import MovieItem from './movie_item';

export default class MovieList extends Component<{}> {
    constructor() {
        super();
        let ds = new ListView.DataSource({rowHasChanged: (o, n) => o !== n});
        this.state = {
            dataSource: ds,
            show: false,
            keywords: '加勒比海盗'
        }
    }

    static navigationOptions = ({ navigation }) => ({
        title: "电影"
    });

    getData() {
        this.setState({
            show: false
        });
        let self = this;
        let url = ServiceURL.movie_search + "?count=20&q=" + this.state.keywords;
        Util.getRequest(url, function (rv) {
            if (!rv.subjects || rv.subjects.length === 0) {
                return;
            }
            let ds = new ListView.DataSource({rowHasChanged: (o, n) => o !== n});
            self.setState({
                show: true,
                dataSource: ds.cloneWithRows(rv.subjects)
            });


        }, function (err) {
            console.log(err);
        })
    }

    showDetail(title,url){
        this.props.navigation.navigate('MovieDetail',{url:url,title:title})
    }

    renderRow(movie) {
        return <MovieItem movie={movie} onPress={this.showDetail.bind(this,movie.title,movie.alt)}></MovieItem>
    }

    renderSeparator(sectionID, rowID) {
        var style = {
            height: 1,
            backgroundColor: '#ccc'
        }

        return <View style={style} key={sectionID + rowID}/>
    }


    changeText(text){
        this.setState({
            keywords:text
        });
    }

    searchPress(){
        this.getData();
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                <SearchBar placeHolder="请输入电影名称"
                       onPress={this.searchPress.bind(this)}
                       onChangeText = {this.changeText.bind(this)}/>
                {
                    this.state.show?
                    <ListView
                        dataSource={this.state.dataSource}
                        initialListSize={10}
                        renderRow={this.renderRow.bind(this)}
                        renderSeparator={this.renderSeparator}
                    ></ListView>
                    :Util.loading

                }
            </ScrollView>
        );
    }

    componentDidMount() {
        this.getData();
    }

}

const styles = StyleSheet.create({

});