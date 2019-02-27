import React, { Component } from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Close from 'material-ui/svg-icons/navigation/close';

class DeliveryInsuranceAmount extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{ padding: '24px' }}>
                <Card style={{ padding: '22px', position: 'relative' }}>

                    <CardTitle
                        style={{ padding: '0px' }}
                        title="Delivery insurance amount
                        " />
                    <TextField
                        floatingLabelText="Amount"
                    />
                    <FlatButton style={{ minWidth: '29px !important', position: 'absolute', top: '22px', right: '22px' }} icon={<Close />} />
                </Card>
            </div>
        );
    }
}

export default DeliveryInsuranceAmount;