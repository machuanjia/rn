/**
 * Created by yanshi0429 on 2017/10/10.
 */
import React , { Component } from 'react';

class Item extends Component{
    constructor(props){
        super(props);
        this.state = {
          isEdit:false
        };
    }

    editItem(){
        this.setState({
            isEdit:true
        })
    }

    saveItem(){
        let editTitle = this.refs.editTitle.value;
        this.props.updateItem(editTitle,this.props.index);
        this.setState({
            isEdit:false
        })
    }
    delItem(){
        this.props.delItem(this.props.index);
        this.setState({
            isEdit:false
        })
    }


    renderForm(){
        return (
            <div>
                <textarea ref="editTitle" defaultValue={this.props.title}></textarea>
                <a className="save" onClick={this.saveItem.bind(this)}>save</a>
            </div>
        );
    }
    renderNormal(){
        return (
            <div className="item">{this.props.title}<a className="edit" onClick={this.editItem.bind(this)}>edit</a><a className="del" onClick={this.delItem.bind(this)}>del</a></div>
        );
    }

    render(){
        if(this.state.isEdit){
            return this.renderForm();
        }else{
            return this.renderNormal();
        }
    }
}

export default Item;