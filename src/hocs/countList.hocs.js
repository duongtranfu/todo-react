import React, { Component } from 'react';

const CountListHOC = listData => WrappedComponent => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = { count: listData.length, list: listData };
        }

        render() {
            return (
                <WrappedComponent {...this.state} {...this.props} />
            );
        }
    }
}

export default CountListHOC;