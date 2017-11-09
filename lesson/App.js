/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

//认识rn
import Hello from './lessons/hello';
//flex 布局
import Flex from './lessons/flex';
//view
import ViewComp from './lessons/view';

//text
import TextComp from './lessons/text';

//touchable
import TouchableComp from './lessons/touchable';

//列表
//import ListViewComp from './lessons/list-view'
import ListViewComp from './lessons/list-view2'


//NavigatorComp
import NavigatorComp from './lessons/navigatorios';

// import TabComp from './lessons/tab';


import ReactNavigationComp from './lessons/react-navigation';

// import FetchComp from './lessons/fetch'

export default class App extends Component<{}> {
  constructor(){
    super();
    this.list = ["1、这里是第一条内容这里是第一条内容这里是第一条内容这里是第一条内容这里是第一条内容这里是第一条内容这里是第一条内容这里是第一条内容","2、这里是第二条内容"]
  }
  render() {
    return (
        //<Hello></Hello>
        //<Flex></Flex>
        //<ViewComp></ViewComp>
        //<TextComp news={this.list}></TextComp>
        //<TouchableComp></TouchableComp>
        //<ListViewComp></ListViewComp>
        //<NavigatorComp></NavigatorComp>
        <ReactNavigationComp></ReactNavigationComp>
        //<TabComp></TabComp>
        //<FetchComp></FetchComp>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
