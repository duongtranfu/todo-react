import React, { Component } from 'react';

class ProductList extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <h1>Product List</h1>
                <ul>
                    {
                        this.props.data.list.map(v => <li>{v}</li>)
                    }
                </ul><br/>
                Total: {this.props.data.count}
            </div>
        );
    }
}

export default ProductList;