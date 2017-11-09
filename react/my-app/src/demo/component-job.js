/**
 * Created by yanshi0429 on 2017/10/9.
 */
import React, { Component } from 'react';
import './css.css'
//...this.props 获取父组件所有属性
class Job extends Component{

    constructor(){
        super();
    }

    render(){
        return (<p {...this.props}>这里是job:{this.props.job}</p>);
    }
}

export default Job;