import React, { Component } from 'react';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

class ShipFromAddress extends Component {
    constructor(props) {
        super(props);
    }

    handleStateChange = (event, index, value) => {

    }

    render() {
        return (
            <div>
                <DatePicker defaultDate={new Date()} container="inline" />
                <h3>Ship-to Address</h3>
                <div style={{ width: '50%' }}>
                    <div>
                        <TextField
                            style={{ marginRight: '4px' }}
                            floatingLabelText="Street #"
                        />
                        <TextField
                            floatingLabelText="Street name"
                        />
                        <FlatButton label="-" style={{float: 'right'}}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShipFromAddress;