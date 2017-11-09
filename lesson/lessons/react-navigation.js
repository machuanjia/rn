import React, {Component} from 'react';
import {
    Text,
    View,
    Button
} from 'react-native';

import {StackNavigator,TabNavigator,DrawerNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
class HomeScreen extends Component<{}> {
    static navigationOptions = {
        title: 'Welcome',//标题
    };

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Home Screen</Text>
                <Button
                    onPress={() => this.props.navigation.navigate('Details')}
                    title="Go to details"
                />
                <Button
                    onPress={() => this.props.navigation.navigate('DrawerToggle')}
                    title="Open Drawer"
                />
            </View>
        );
    }
}

class DetailsScreen extends Component<{}> {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Details Screen</Text>
            </View>
        );
    }
}

class ProfileScreen extends Component<{}> {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Profile Screen</Text>
                <Button
                    onPress={() => this.props.navigation.navigate('DrawerToggle')}
                    title="Open Drawer"
                />
            </View>
        );
    }
}
//
const NavigatorComp = StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            headerTitle: '首页',
        },
    },
    Details: {
        screen: DetailsScreen,
        navigationOptions: {
            headerTitle: '详情',
        },
    }
});




// const NavigatorComp = TabNavigator({
//     Home: {
//         screen: HomeScreen,
//         navigationOptions: {
//             tabBarLabel: 'Home',
//             tabBarIcon: ({ tintColor, focused }) => (
//                 <Ionicons
//                     name={focused ? 'ios-home' : 'ios-home-outline'}
//                     size={26}
//                     style={{ color: tintColor }}
//                 />
//             ),
//         },
//     },
//     Profile: {
//         screen: ProfileScreen,
//         navigationOptions: {
//             tabBarLabel: 'Profile',
//             tabBarIcon: ({ tintColor, focused }) => (
//                 <Ionicons
//                     name={focused ? 'ios-person' : 'ios-person-outline'}
//                     size={26}
//                     style={{ color: tintColor }}
//                 />
//             ),
//         },
//     }
// });

// const NavigatorComp =  DrawerNavigator({
//     Home: {
//         screen: HomeScreen,
//         navigationOptions: {
//             drawerLabel: 'Home',
//             drawerIcon: ({ tintColor, focused }) => (
//                 <Ionicons
//                     name={focused ? 'ios-home' : 'ios-home-outline'}
//                     size={20}
//                     style={{ color: tintColor }}
//                 />
//             ),
//         },
//     },
//     Profile: {
//         screen: ProfileScreen,
//         navigationOptions: {
//             drawerLabel: 'Profile',
//             drawerIcon: ({ tintColor, focused }) => (
//                 <Ionicons
//                     name={focused ? 'ios-person' : 'ios-person-outline'}
//                     size={20}
//                     style={{ color: tintColor }}
//                 />
//             ),
//         },
//     }
// });


export default class ReactNavigationComp extends Component {
    render() {
        return (
            <NavigatorComp/>
        );
    }
}