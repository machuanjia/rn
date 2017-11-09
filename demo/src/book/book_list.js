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
import BookItem from './book_item';

export default class BookList extends Component<{}> {
    constructor() {
        super();
        let ds = new ListView.DataSource({rowHasChanged: (o, n) => o !== n});
        this.state = {
            dataSource: ds,
            show: false,
            keywords: 'React'
        }
    }
    static navigationOptions = ({ navigation }) => ({
        title: "图书"
    });

    getData() {
        this.setState({
            show: false
        });
        let self = this;
        let url = ServiceURL.book_search + "?count=20&q=" + this.state.keywords;
        Util.getRequest(url, function (rv) {
            if (!rv.books || rv.books.length === 0) {
                return;
            }
            let ds = new ListView.DataSource({rowHasChanged: (o, n) => o !== n});
            self.setState({
                show: true,
                dataSource: ds.cloneWithRows(rv.books)
            });


        }, function (err) {
            console.log(err);
        })
    }

    showDetail(id){
        this.props.navigation.navigate('BookDetail',{bookID:id})
    }

    renderRow(book) {
        return <BookItem book={book} onPress={this.showDetail.bind(this,book.id)}/>
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
                <SearchBar placeHolder="请输入图书名称"
                    onPress={this.searchPress.bind(this)}
                    onChangeText = {this.changeText.bind(this)}
                />
                {
                    this.state.show ?
                        <ListView
                            dataSource={this.state.dataSource}
                            initialListSize={10}
                            renderRow={this.renderRow.bind(this)}
                            renderSeparator={this.renderSeparator}
                        />
                        : Util.loading
                }
            </ScrollView>
        );
    }

    componentDidMount() {
        this.getData();
    }

}

const styles = StyleSheet.create({});