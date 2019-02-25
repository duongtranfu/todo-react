import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class DataPoint extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <td>
                    <TextField
                        style={{ marginRight: '4px' }}
                        hintText="Quality"
                    />
                </td>
                <td>
                    <TextField
                        style={{ marginRight: '4px' }}
                        hintText="Goods/Service Code"
                    />
                </td>
                <td>
                    <TextField
                        style={{ marginRight: '4px' }}
                        hintText="Gross Amount"
                    />
                </td>
                <td>
                    <TextField
                        style={{ marginRight: '4px' }}
                        hintText="Discount"
                    />
                </td>
                <td>
                    <TextField
                        hintText="Delivery Amount"
                    />
                </td>
            </React.Fragment>
        );
    }
}

export default DataPoint;