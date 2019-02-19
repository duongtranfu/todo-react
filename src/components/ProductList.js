import React, { Component } from 'react';

class ProductList extends Component {

    constructor(props) {
        super(props)
        this.state = Object.assign({}, props.data);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <h1>Product List</h1>
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

export default ProductList;