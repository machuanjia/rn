/**
     TouchableHighlight
     TouchableNativeFeedback
     TouchableOpacity
     TouchableWithoutFeedback
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TouchableOpacity,
    TextInput,
    Button,
    Image,
    ImageBackground,
} from 'react-native';


export  default  class TouchableComp extends Component{
    constructor(){
        super();
        this.state = {
            text: '',
        };
    }
    pressFn(){
        console.log(this);
    }

    changeFn(){
        console.log(this.refs.textInputRefer);
    }

    render(){
        return(
            <View style={[styles.flex,styles.container]}>

                <TouchableOpacity onPress={this.pressFn.bind(this)} style={[styles.item,styles.center,styles.op]}>
                    <Text style={styles.text}>TouchableOpacity</Text>
                </TouchableOpacity>


                <TouchableHighlight onPress={this.pressFn.bind(this)} underlayColor="red" style={[styles.item,styles.center,styles.hi]}>
                    <Text style={styles.text}>TouchableHighlight</Text>
                </TouchableHighlight>

                <TextInput
                    style={styles.input}
                    placeholder='Hello!'
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />

                <Text>
                    {this.state.text}
                </Text>

                <Button
                    onPress={this.pressFn.bind(this)}
                    title="Button"
                    accessibilityLabel="See an informative alert"
                />

                <Image style={styles.img} source={require('./logo-4year-scroll.png')} />

                <Image source={{uri: 'https://cdn.worktile.com/assets/images/home/index-desc-inner-bg.png'}}
                       style={{width: 200, height: 200}} />
                <ImageBackground source={{uri: 'https://cdn.worktile.com/assets/images/home/index-desc-inner-bg.png'}} style={{width: 100, height: 100}}>
                    <Text>Inside</Text>
                </ImageBackground>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    flex:{
        flex:1
    },
    container:{
        marginTop:30
    },
    center:{
      justifyContent:'center',
      alignItems:'center'
    },
    item:{
        width:150,
        height:40,
        margin:30
    },
    text:{
        fontSize:16,
        color:'#fff'
    },
    op:{
        backgroundColor:'orange'
    },
    hi:{
        backgroundColor:'blue'
    },
    input:{
        borderWidth:1,
        borderColor:'#ccc',
        height:40,
        margin:30,
        padding:5
    },
    img:{
        width:300,
        height:40
    }

});