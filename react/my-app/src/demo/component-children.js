/**
 * Created by yanshi0429 on 2017/10/9.
 */
import React, { Component } from 'react';
import './css.css'
//this.props.children 是唯一一个不和属性匹配的，表示组件的所有子节点
//React.Children.map遍历

class Children extends Component{
    constructor(){
        super();
    }

    render(){
        return (<ul>
            {
                React.Children.map(this.props.children,function(child){
                    return <li>{child}</li>;
                })
            }

        </ul>);
    }
}

export default Children;