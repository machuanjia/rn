/**
 * Created by yanshi0429 on 2017/10/10.
 */
import React,{ Component } from 'react';
import PropTypes from  'prop-types';

export default class TodoItem extends Component{

    static propTypes = {
        todo:PropTypes.object.isRequired
    }

    render(){

        const { todo } = this.props;

        let elem = (

            <div className="views">

                <input type="checkbox"
                       className="toggle"
                       checked={todo.completed}

                />
                <label>{todo.text}</label>

                <button className="destory"></button>


            </div>

        );

        return (
            <li className="editing">{elem}</li>
        )



    }

}