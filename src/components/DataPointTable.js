import React, { Component } from 'react';
import DataPoint from './DataPoint';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow
} from 'material-ui/Table';

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
            arrRow: state.arrRow.concat({ id: state.arrRow.length })
        }));
    }

    removeLine = (id) => {
        this.setState((state, props) => ({
            arrRow: state.arrRow.filter(v => v.id !== id)
        }));
    }

    render() {
        return (
            <React.Fragment>
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
                            this.state.arrRow.map(v => <DataPoint key={v.id} remove={() => this.removeLine(v.id)} />)
                        }
                    </TableBody>
                </Table>
                <div style={{ marginTop: '12px' }}>
                    <a style={{ textDecoration: 'none', color: '#14B9F1' }} onClick={this.addLine} href="#!">+ Add Another Line</a>
                </div>
            </React.Fragment>
        );
    }
}

export default DataPointTable;