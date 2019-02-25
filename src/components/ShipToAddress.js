import React, { Component } from 'react';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';

const stylePaper = {
    padding: '24px'
};

class ShipToAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // isShow
            pickerDate: new Date()
        };
    }

    handleStateChange = (event, index, value) => {

    }

    handleDatePickerChange = (e, date) => {
        this.setState({ pickerDate: date });
    }

    render() {
        return (
            <div style={{ padding: '24px 24px 8px 24px' }}>
                <Paper style={stylePaper} zDepth={1} rounded={false}>
                    <DatePicker style={{ marginBottom: '24px' }} value={this.state.pickerDate} defaultDate={this.state.pickerDate} onChange={this.handleDatePickerChange} container="inline" />
                    <span style={{ color: '#434343', fontWeight: '500' }}>Ship-to Address</span>
                    <div style={{ display: 'flex' }}>
                        <div style={{ width: '50%', marginRight: '12px' }}>
                            <div>
                                <TextField
                                    style={{ width: '73px', marginRight: '4px' }}
                                    floatingLabelText="Street #"
                                />
                                <TextField
                                    style={{ width: 'calc(100% - 77px)' }}
                                    floatingLabelText="Street name"
                                />
                            </div>
                            <div>
                                <SelectField style={{ width: '100%' }} floatingLabelText="State" onChange={this.handleStateChange}>
                                    <MenuItem value={'state1'} primaryText="State 1" />
                                    <MenuItem value={'state2'} primaryText="State 2" />
                                </SelectField>
                                <SelectField style={{ width: '100%' }} floatingLabelText="Country" onChange={this.handleStateChange}>
                                    <MenuItem value={'vietnam'} primaryText="Vietnam" />
                                    <MenuItem value={'usa'} primaryText="USA" />
                                </SelectField>
                            </div>
                        </div>
                        <div style={{ width: '50%' }}>
                            <TextField
                                fullWidth={true}
                                floatingLabelText="City"
                            />
                            <div>
                                <TextField
                                    style={{ width: '85px', marginRight: '4px' }}
                                    floatingLabelText="Zip code #"
                                />
                                <TextField
                                    style={{ width: '50px' }}
                                    floatingLabelText="+4 Ext"
                                />
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'inline-flex', marginTop: '12px' }}>
                        <a onClick={this.props.openShipOpt} style={{ textDecoration: 'none', color: '#14B9F1' }} href="#!">
                            + Add Ship-from Address</a>
                    </div>
                </Paper>
            </div>
        );
    }
}

export default ShipToAddress;