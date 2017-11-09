import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TabBarIOS
} from 'react-native';
import PropTypes from 'prop-types';

//flex 布局
import Flex from './flex';
//view
import ViewComp from './view';

//text
import ListViewComp from './list-view2';


export default class TabComp extends Component<{}> {

    constructor() {
        super();
        this.state = {
            tab:'Flex'
        };

    }
    pressFn(tabName){
        this.setState({
            tab:tabName
        });
    }

    render() {
        return (
            <TabBarIOS style={styles.container}
                       unselectedTintColor="yellow"
                       tintColor="white"
                       barTintColor="darkslateblue"

            >
                <TabBarIOS.Item
                    title="Flex"
                    systemIcon="contacts"
                    onPress={this.pressFn.bind(this,'Flex')}
                    selected={this.state.tab === 'Flex'}
                >
                    <Flex></Flex>
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    title="ViewComp"
                    systemIcon="bookmarks"
                    onPress={this.pressFn.bind(this,'ViewComp')}
                    selected={this.state.tab === 'ViewComp'}>

                    <ViewComp></ViewComp>

                </TabBarIOS.Item>

                <TabBarIOS.Item
                    title="ListViewComp"
                    systemIcon="downloads"
                    onPress={this.pressFn.bind(this,'ListViewComp')}
                    selected={this.state.tab === 'ListViewComp'}>

                    <ListViewComp></ListViewComp>

                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

