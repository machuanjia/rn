/**
 * Created by yanshi0429 on 2017/10/10.
 */
import React,{ Component } from 'react';

import PropTypes from 'prop-types';

export default class TodoTextInput extends Component{

    static propTypes = {
        text:PropTypes.string,
        placeholder:PropTypes.string
    };
    constructor(){
        super();
        this.state = {
            text: ''
        }
    }
    handleSubmit(e){
        const text = e.target.value.trim()
        if(e.which === 13){
            this.props.onSave(text);
            if(this.props.newTodo){
                this.setState({text:''})
            }
        }
    }
    handleChange(e){
        this.setState({
            text:e.target.value
        })
    }
    handleBlur(e){
        if(!this.props.newTodo){
            this.props.onSave(e.target.value)
        }
    }

    render(){
        return(
            <input type="text"
                   placeholder={this.props.placeholder}
                   value={this.state.text}
                   onKeyDown={this.handleSubmit.bind(this)}
                   onChange={this.handleChange.bind(this)}
                   onBlur={this.handleBlur.bind(this)}




            />


        );
    }

}