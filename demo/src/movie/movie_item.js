import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';


export default class MovieItem extends Component<{}> {
    constructor() {
        super();
    }

    initMovie() {
        this.movie = this.props.movie;
        this.actors = [];
        let self = this;
        for(let i in this.movie.casts){
            self.actors.push(self.movie.casts[i].name);
        }
    }

    render() {
        this.initMovie();
        return (
            <TouchableOpacity style={styles.item} {...this.props}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} resizeMode="contain" source={{uri: this.movie.images.medium}}/>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>名称: {this.movie.title}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text} numberOfLines={1}>演员: {this.actors}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>评分: {this.movie.average}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>时间: {this.movie.year}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>标签: {this.movie.genres}</Text>
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
        marginLeft:15
    },
    textContainer: {
        flex: 1,
        padding:5,
        paddingLeft:0,
        justifyContent: 'center',
    },
    text: {
        color: '#000'
    }
});