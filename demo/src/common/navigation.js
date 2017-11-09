import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    NavigatorIOS
} from 'react-native';


export default class Navigation extends Component<{}>{

    constructor(){
        super();
    }



    render(){
        return(
            <NavigatorIOS
                initialRoute={{
                    title:this.props.title,
                    component: this.props.component,
                    passProps: {

                    }
                }}
                style={styles.flex}/>
        );
    }

}

const styles = StyleSheet.create({
    header:{
        height:44,
        backgroundColor:'#3497ff',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'

    },
    left_btn:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    btn_text:{
        color:'#fff',
        fontSize:17,
        fontWeight:'bold'
    },
    title_container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        color:'#fff',
        fontSize:18,
        lineHeight:18,
        fontWeight:'bold',
        width:200
    },
    flex:{
        flex:1
    }
});