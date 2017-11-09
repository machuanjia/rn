/**
 * Created by yanshi0429 on 2017/10/9.
 */
import React, { Component } from 'react';
import './css.css'
import Name from './component-name';
import Job from './component-job';
import Children from './component-children';
import Greeting from './component-proptypes';
import Action from './component-action';
import State from './component-state';
class App extends Component{
    render(){
        return (<div>

            <Name name={this.props.name}/>

            <Job job={this.props.job}  aa="dd"/>

            <Children title="list">
                <h4>java</h4>
                <h5>js</h5>
                <p>ssss</p>
                <div><div>sss</div></div>
            </Children>

            <Greeting name={this.props.name}></Greeting>

            <Action buttonTitle="button click"></Action>

            <State/>

        </div>);
    }
}

export default App;