/**
 * Created by yanshi0429 on 2017/10/10.
 */
import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

export default class MainSection extends Component{

    static propTypes = {
        todos:PropTypes.array.isRequired,
        actions:PropTypes.object.isRequired
    }

    render(){

        const { todos,actions } = this.props;

        return (

            <section className="main">


                <ul className="todo-list">
                    {
                        todos.map(todo => {
                            <TodoItem todo={todo} key={todo.id} {...actions}/>
                        })

                    }
                </ul>

            </section>


        );


    }


}