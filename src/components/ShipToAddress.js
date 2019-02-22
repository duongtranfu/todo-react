import React, { Component } from 'react';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';

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
            <div>
                <DatePicker style={paddingLeft24} defaultDate={new Date()} container="inline" />
                <h3 style={paddingLeft24}>Ship-to Address</h3>
                <div style={{ display: 'flex' }}>
                    <div style={{ width: '50%' }}>
                        <div style={paddingLeft24}>
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
                <a style={paddingLeft24}  href="">+ Add Ship-from Address</a>
            </div>
        );
    }
}

export default ShipToAddress;