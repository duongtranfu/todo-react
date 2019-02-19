import React, {Component} from 'react';

export default function CountListHOC(WrappedComponent, listData) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {count: listData.length, list: listData};
        }

        render() {
            return (
                <WrappedComponent data={this.state} {...this.props} />
            );
        }
    }
}