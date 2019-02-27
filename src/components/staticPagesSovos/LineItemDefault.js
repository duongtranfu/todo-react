import React, { Component } from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

class LineItemDefault extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{ padding: '24px' }}>
                <Card style={{ padding: '22px', position: 'relative' }}>
                    <div style={{ borderBottom: '1px solid #eeeeee', padding: '22px' }}>
                        <CardTitle
                            style={{ padding: '0px' }}
                            title="Line Item Defaults"
                            subtitle="Settings in this section apply to all added Data Point Line Items, and can be edited per line."
                        />
                    </div>
                    <div style={{ padding: '22px' }}>
                        <RadioButtonGroup style={{ display: 'inline-flex' }} name="type_card" defaultSelected="debit">
                            <RadioButton
                                value="debit"
                                label="Debit"
                                style={{ marginRight: '4px' }}
                            />
                            <RadioButton
                                value="credit"
                                label="Credit"
                            />
                        </RadioButtonGroup>
                    </div>
                    <div style={{ borderTop: '1px solid #eeeeee', padding: '0px 22px 0px 22px', textAlign: 'right' }}>
                        <SelectField style={{ textAlign: 'left', padding: '0px' }} floatingLabelText="Add Line Items Defaults">
                            <MenuItem value={'1'} primaryText="Custom Attributes" />
                            <MenuItem value={'2'} primaryText="Delivery Amount" />
                            <MenuItem value={'3'} primaryText="Delivery Insurance Amount" />
                        </SelectField>
                    </div>
                </Card>
            </div>
        );
    }
}

export default LineItemDefault;