/**
 * Created by yanshi0429 on 2017/10/9.
 */
import React, { Component } from 'react';
import './css.css'
class Name extends Component{

    constructor(){
        super();
    }

    render(){
        return (<h1 className="h1" style={this.style}>这里是name:{this.props.name}</h1>);
    }
}

export default Name;