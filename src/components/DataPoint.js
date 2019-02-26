import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import {
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import Close from 'material-ui/svg-icons/navigation/close';

class DataPoint extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TableRow displayBorder={false}>
                <TableRowColumn>
                    <TextField
                        style={{ marginRight: '4px' }}
                        hintText="Quality"
                    />
                </TableRowColumn>
                <TableRowColumn>
                    <TextField
                        style={{ marginRight: '4px' }}
                        hintText="Goods/Service Code"
                    />
                </TableRowColumn>
                <TableRowColumn>
                    <TextField
                        style={{ marginRight: '4px' }}
                        hintText="Gross Amount"
                    />
                </TableRowColumn>
                <TableRowColumn>
                    <TextField
                        style={{ marginRight: '4px' }}
                        hintText="Discount"
                    />
                </TableRowColumn>
                <TableRowColumn>
                    <TextField
                        hintText="Delivery Amount"
                    />
                </TableRowColumn>
                <TableRowColumn style={{ width: '30px' }}>
                    <FlatButton onClick={this.props.remove} style={{ minWidth: '29px !important' }} icon={<Close />} />
                </TableRowColumn>
            </TableRow>
        );
    }
}

export default DataPoint;