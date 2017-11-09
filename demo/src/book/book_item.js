import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';


export default class BookItem extends Component<{}> {
    constructor() {
        super();
    }

    initBook() {
        this.book = this.props.book;
    }

    render() {
        this.initBook();
        return (
            <TouchableOpacity style={styles.item} {...this.props}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{uri: this.book.image}}/>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.textContainer}>
                        <Text numberOfLines={1}>{this.book.title}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.publisher_author} numberOfLines={1}>{this.book.publisher}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.publisher_author} numberOfLines={1}>{this.book.author}</Text>
                    </View>
                    <View style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
                        <Text style={styles.price}>{this.book.price}</Text>
                        <Text style={styles.pages}>{this.book.pages}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        height: 120,
        padding: 10
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 80,
        height: 100
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        marginLeft:10
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    publisher_author: {
        color: '#a3a3a3',
        fontSize: 13
    },
    price: {
        color: '#2bb2a3',
        fontSize: 16
    },
    pages: {
        marginLeft: 10,
        color: '#a7a0a0'
    }
});