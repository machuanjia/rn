/**
 * Created by yanshi0429 on 2017/10/10.
 */
import React,{ Component } from 'react';
import TodoTextInput from './TodoTextInput';
import PropTypes from 'prop-types';

export default class Header extends Component{
    static propTypes = {
        addTodo:PropTypes.func.isRequired
    }

    handleSave = text =>{
        this.props.addTodo(text)
    }


    render(){
        return (

            <header className="heander">
                <h1>Todos</h1>
                <TodoTextInput placeholder="hello" onSave={this.handleSave} newTodo/>
            </header>

        );
    }



}