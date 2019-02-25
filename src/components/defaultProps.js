import React, { Component } from 'react';
import propType from 'prop-types';

class DemoDefaultProps extends Component {
    static defaultProps = {
        address: 'Vietnam'
    }

    static propTypes = {
        address: propType.string.isRequired,
        people: propType.shape({
            name: propType.string,
            age: propType.number
        })
    }

    render() {
        // ...implement render method
        return (
            <div>
                <h1> Static defaultProps value </h1>
                {this.props.address}
                <br />
                {this.props.people}
            </div>
        );
    }
}

export default DemoDefaultProps;