import React, { Component } from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';

class CaculationSetup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pickerDate: null
        };
    }

    handleDatePickerChange = (e, date) => {
        this.setState({ pickerDate: date });
    }

    render() {

        return (
            <div style={{ padding: '24px' }}>
                <Card>
                    <div style={{ borderBottom: '1px solid #eeeeee', padding: '22px' }}>
                        <CardTitle
                            style={{ padding: '0px' }}
                            title="Caculation Set-up"
                            subtitle="Settings in this section apply to the entire calculation" />
                    </div>
                    <div style={{ padding: '22px' }}>
                        <DatePicker
                            value={this.state.pickerDate}
                            defaultDate={this.state.pickerDate}
                            onChange={this.handleDatePickerChange} container="inline" hintText="Document Date" />
                        <TextField
                            style={{ display: 'block' }}
                            floatingLabelText="Document number"
                        />
                        <SelectField style={{ display: 'block' }} floatingLabelText="Tax Calculation Type">
                            <MenuItem value={'1'} primaryText="1 - Forward calculation" />
                            <MenuItem value={'2'} primaryText="2 - Tax inclusive gross amount back calculation" />
                            <MenuItem value={'5'} primaryText="5 - Tax to gross calculation with force distribution" />
                            <MenuItem value={'6'} primaryText="6 - Tax to gross back calculation" />
                        </SelectField>
                        <SelectField style={{ display: 'block' }} floatingLabelText="Currency Type">
                            <MenuItem value={'USD'} primaryText="USD" />
                            <MenuItem value={'CAD'} primaryText="CAD" />
                            <MenuItem value={'AUD'} primaryText="AUD" />
                        </SelectField>
                        <Checkbox
                            style={{ marginTop: '28px' }}
                            label="Write To Audit"
                        />
                    </div>
                    <div style={{ borderTop: '1px solid #eeeeee', padding: '0px 22px 0px 22px', textAlign: 'right' }}>
                        <SelectField style={{ textAlign: 'left', padding: '0px' }} floatingLabelText="Add Calculation Set-up Items">
                            <MenuItem value={'1'} primaryText="Customs/Duties Amount" />
                            <MenuItem value={'2'} primaryText="Delivery Amount" />
                            <MenuItem value={'3'} primaryText="Discounts" />
                        </SelectField>
                    </div>
                </Card>
            </div>
        );
    }
}

export default CaculationSetup;