/**
 * Created by yanshi0429 on 2017/10/9.
 */
import React, { Component } from 'react';
//必须在react环境运行
//jsx就是html，不能用""括起来
//{}js表达式
class App extends Component{
    render(){
        return (<p>Hello  {new Date().toLocaleTimeString()}.</p>);
    }
}

export default App;