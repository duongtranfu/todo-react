import React, { Component } from 'react';

class ClassList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Class List</h1>
                <ul>
                    {
                        this.props && this.props.list.map(v => <li>{v}</li>)
                    }
                </ul><br/>
                Total: {this.props.count}
            </div>
        );
    }
}

export default ClassList;