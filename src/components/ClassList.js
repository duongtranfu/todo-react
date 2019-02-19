import React, { Component } from 'react';

class ClassList extends Component {

    constructor(props) {
        super(props);
        this.state = Object.assign({}, props.data);
    }

    render() {
        return (
            <div>
                <h1>Class List</h1>
                <ul>
                    {
                        this.state.list.map(v => <li>{v}</li>)
                    }
                </ul><br/>
                Total: {this.state.count}
            </div>
        );
    }
}

export default ClassList;