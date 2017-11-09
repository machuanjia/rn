import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';

import ServiceURL from './../common/service';
import Util from './../common/util';
import Header from './../common/header';
import BookItem from './book_item';

export default class BookDetail extends Component<{}>{
    constructor(){
        super();
        this.state = {
            bookData:null
        };

    }
    static navigationOptions = ({ navigation }) => ({
        title: "详情"
    });

    getData(){
        const { navigate } = this.props.navigation;
        let url = ServiceURL.book_detail_id + this.props.navigation.state.params.bookID;
        let self = this;
        Util.getRequest(url,function(rv){
            if(rv){
                self.setState({
                    bookData:rv
                });
            }
        },function(err){
            console.log(err);
        })

    }

    render(){

        return(
            <ScrollView style={styles.container}>
                {
                    this.state.bookData?
                    <View>
                        <View style={styles.separator}>
                            <BookItem book={this.state.bookData}></BookItem>
                        </View>
                        <View>
                            <Text style={styles.title}>图书简介</Text>
                            <Text style={styles.text}>{this.state.bookData.summary}</Text>
                        </View>
                        <View>
                            <Text style={styles.title}>作者简介</Text>
                            <Text style={styles.text}>{this.state.bookData.author_intro}</Text>
                        </View>
                        <View style={{height:55}}></View>
                    </View>
                    :Util.loading
                }
            </ScrollView>
        );
    }
    componentDidMount(){
        this.getData();
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    title:{
        fontSize:16,
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        fontWeight:'bold',
        lineHeight:40
    },
    text:{
        marginLeft:15,
        marginRight:15,
        lineHeight:25
    },
    separator:{
        borderBottomWidth:1,
        borderColor:'#ccc',
        backgroundColor:'#fdfdfd',
    }
});