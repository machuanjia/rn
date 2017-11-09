/**
 * Created by yanshi0429 on 2017/10/9.
 */
import React, { Component } from 'react';
import './css.css'
//事件绑定
//生命周期
/**
 * 生命周期3个状态
 *Mount 组件挂载 已经插入真是dom
 *Updating:组件更新，正在被重新渲染
 *Unmounting:组件移除，已移出真实dom
 *
 */




/**
 *2.生命周期四个阶段
 * 创建 实例化 更新 销毁
 *
*/


/***
 * 生命周期方法
 *
 * 1.Mounting
 *
 * componentWillMount
 * 组件将要挂载，在render之前，仅执行一次,即使多次渲染也执行仅仅一次
 *
 * componentDidMount
 * 组件已经挂载，在render之后执行，同一个组件重复渲染只执行一次
 *
 *
 * 2.Updating
 *
 * componentWillReceiveProps(object nextProps)
 * 已加载组件收到新的props之前调用,组件初始化不执行
 *
 * shouldComponentUpdate(object nextProps,object nextState)
 * 组件判断是否重新渲染时调用，组件在接受到新的props或state，立即调用
 *
 * componentWillUpdate(object nextProps,object nextState)
 * 组件将要更新
 *
 * componentDidUpdate(object prevProps,object prevState)
 * 已更新
 *
 *
 * 3.Unmounting
 * componentWillUnmount
 * 被移除之前调用
 *
 *
 */



class Action extends Component{

    constructor(){
        super();
        this.state = {
            flag:false
        }
    }
    static defaultProps = {
        name:'machuanjia'
    };


    handleClick(){
        this.setState({
            flag:!this.state.flag
        })
    }

    componentWillMount(){
        console.log('componentWillMount');
    }
    render(){
        let text = this.state.flag?this.props.name:'null'
        console.log('render');
        return (<button onClick={this.handleClick.bind(this)}>{this.props.buttonTitle} {text}</button>);
    }
    componentDidMount(){
        //可以读取dom节点
        console.log('componentDidMount');
    }
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps');
    }
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate');
        return true;
    }
    componentWillUpdate(){
        console.log('componentWillUpdate');
    }
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

}

export default Action;