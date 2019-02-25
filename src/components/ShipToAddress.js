import React, { Component } from 'react';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';

const stylePaper = {
    padding: '24px'
};

const paddingLeft24 = { paddingLeft: '24px' };

class ShipToAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // isShow
        };
    }

    handleStateChange = (event, index, value) => {

    }

    render() {
        return (
            <div style={{ padding: '24px 24px 8px 24px' }}>
                <Paper style={stylePaper} zDepth={1} rounded={false}>
                    <DatePicker defaultDate={new Date()} container="inline" />
                    <span style={{ color: '#434343', fontWeight: '500' }}>Ship-to Address</span>
                    <div style={{ display: 'flex' }}>
                        <div style={{ width: '50%' }}>
                            <div>
                                <TextField
                                    style={{ width: '73px', marginRight: '4px' }}
                                    floatingLabelText="Street #"
                                />
                                <TextField
                                    floatingLabelText="Street name"
                                />
                            </div>
                            <div>
                                <DropDownMenu style={{ width: '100%' }} value={'state1'} onChange={this.handleStateChange}>
                                    <MenuItem value={'state1'} primaryText="State 1" />
                                    <MenuItem value={'state2'} primaryText="State 2" />
                                </DropDownMenu>
                                <DropDownMenu style={{ width: '100%' }} value={'vietnam'} onChange={this.handleStateChange}>
                                    <MenuItem value={'vietnam'} primaryText="Vietnam" />
                                    <MenuItem value={'usa'} primaryText="USA" />
                                </DropDownMenu>
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
                    <a style={{ textDecoration: 'none', color: '#14B9F1' }} href="#!">
                        + Add Ship-from Address
                </a>
                </Paper>
            </div>
        );
    }
}

export default ShipToAddress;