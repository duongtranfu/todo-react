import React, { Component } from 'react';
import DataPoint from './DataPoint';
import Paper from 'material-ui/Paper';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow
} from 'material-ui/Table';

const stylePaper = {
    padding: '24px'
};

const tableHeaderColumnStyle = {
    color: '#666666', fontSize: '11.0pt', textDecoration: 'none', fontFamily: "'Roboto-Bold',Arial"
}

class DataPointTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            arrRow: [
                { id: 0 },
                { id: 1 }
            ]
        };
    }

    addLine = () => {
        this.setState((state, props) => ({
            arrRow: state.arrRow.push({ id: 123 })
        }));
    }

    render() {
        return (
            <div style={{ paddingLeft: '24px', paddingRight: '24px' }}>
                <Paper style={stylePaper} zDepth={1} rounded={false}>
                    <Table>
                        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                            <TableRow displayBorder={false}>
                                <TableHeaderColumn style={tableHeaderColumnStyle}>Quantity</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeaderColumnStyle}>Goods/Service Code</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeaderColumnStyle}>Gross Amount</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeaderColumnStyle}>Discount</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeaderColumnStyle}>Delivery Amount</TableHeaderColumn>
                                <TableHeaderColumn style={{ width: '30px' }}></TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody style={{ border: 'none !important' }} displayRowCheckbox={false}>
                            {
                                this.state.arrRow.map(v => <DataPoint key={v.id} />)
                            }
                        </TableBody>
                    </Table>
                    <div style={{ marginTop: '12px' }}>
                        <a style={{ textDecoration: 'none', color: '#14B9F1' }} onClick={this.addLine} href="#!">+ Add Another Line</a>
                    </div>
                </Paper>
            </div>
        );
    }
}

export default DataPointTable;