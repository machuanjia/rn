/**
 * Created by yanshi0429 on 2017/10/10.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as Action from '../actions';



// React component
class Counter extends Component {
    render() {
        const {value, onIncreaseClick} = this.props
        return (
            <div>
                <span>{value}</span>
                <button onClick={onIncreaseClick}>Increase</button>
            </div>
        )
    }
}


Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncreaseClick: PropTypes.func.isRequired
}
// Map Redux state to component props
function mapStateToProps(state) {
    return {
        value: state.count
    }
}


// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(Action.increaseAction)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

