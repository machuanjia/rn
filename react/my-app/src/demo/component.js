/**
 * Created by yanshi0429 on 2017/10/9.
 */
import React, { Component } from 'react';
import './css.css'
//样式: json  className
//参数:this.props 获取
class App extends Component{

    constructor(){
        super();
        this.style={
            color:'green'
        }
    }

    render(){
        return (<h1 className="h1" style={this.style}>Hello  {this.props.name} {this.props.job}</h1>);
    }
}

export default App;