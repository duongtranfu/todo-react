import React, { Component } from 'react';

class ProductList extends Component {

    constructor(props) {
        super(props);
        this.state = {a: 1}
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <h1>Product List</h1>
                <ul>
                    {
                        this.props.list && this.props.list.map(v => <li>{v}</li>)
                    }
                </ul><br/>
                Total: {this.props.count} <br/>
            </div>
        );
    }
}

export default ProductList;