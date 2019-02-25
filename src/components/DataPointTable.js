import React, { Component } from 'react';
import DataPoint from './DataPoint';

class DataPointTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <table>
                <tbody>
                    <DataPoint />
                </tbody>
            </table>
        );
    }
}

export default DataPointTable;