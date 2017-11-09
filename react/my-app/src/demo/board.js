/**
 * Created by yanshi0429 on 2017/10/10.
 */
import React, { Component } from 'react';
import './css.css'
import Item from './item';

class App extends Component{

    constructor(){
        super();
        this.state={
            title:'',
            list:[]
        }
    }
    handleName(e){
        this.setState({
            title:e.target.value
        })
    }

    addItem(){
        let items = this.state.list;
        // let title = this.state.title;
        let title = this.refs.addTitle.value;
        if(title){
            items.push(title);
        }
        this.setState({
            title:'',
            list:items
        })
    }
    updateItem(title,i){
        var list = this.state.list;
        list[i] = title;
        // 更新状态
        this.setState({list: list});
    }

    delItem(i){
        var list = this.state.list;
        list.splice(i,1);
        // 更新状态
        this.setState({list: list});
    }

    eachList(title,i){
        return (
            <Item updateItem={this.updateItem.bind(this)} delItem={this.delItem.bind(this)}  key={i} index={i} title={title}></Item>
        );
    }
    render(){
        let title = this.state.title;
        return (
            <div className="list-wrap">
                <div>
                    <input type="input" ref="addTitle" className="text" onChange={this.handleName.bind(this)}/>
                    <button onClick={this.addItem.bind(this)}>+</button>
                </div>
                <div>
                    {
                        this.state.list.map(this.eachList.bind(this))
                    }
                </div>
            </div>
        );
    }
}

export default App;