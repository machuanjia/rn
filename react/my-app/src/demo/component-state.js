/**
 * Created by yanshi0429 on 2017/10/9.
 */
import React, { Component } from 'react';
import './css.css'
//默认state
//修改state
//绑定
class State extends Component{

    constructor(){
        super();
        this.state = {
            isCheck:false,
            value:'hello'
        }
    }

    handleChange(){
        this.setState({
            isCheck:!this.state.isCheck
        })
    }

    handleTextChange(e){
        this.setState({
            value:e.target.value
        })
    }


    render(){
        let text = this.state.isCheck?'checked':'unchecked';

        let value = this.state.value;

        return (
            <div>
            <br/>
                <div>
                <input type="checkbox" onChange={this.handleChange.bind(this)}/>
                {text}
                </div>
            <br/>




                <div>
            <input type="input" value={value} onChange={this.handleTextChange.bind(this)}/>
                <br/>
                {value}
                </div>
                <br/>

            </div>
        );
    }
}

export default State;