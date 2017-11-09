/**
 * Created by yanshi0429 on 2017/10/9.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Greeting extends Component {
    static defaultProps = {
        name:'machuanjia'
    };
    static propTypes = {
        name: PropTypes.string.isRequired
    };
    render() {
        return (
            <h1>propTypes: {this.props.name}</h1>
        )
    };
}
// Greeting.defaultProps = {
//     name:'machuanjia'
// }
// Greeting.propTypes = {
//     name: PropTypes.string.isRequired
// };

export default Greeting;