import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Remove from 'material-ui/svg-icons/content/remove';
import Paper from 'material-ui/Paper';

const stylePaper = {
    padding: '24px'
};

class ShipFromAddress extends Component {
    constructor(props) {
        super(props);
    }

    handleStateChange = (event, index, value) => {

    }

    render() {
        return (
            <div style={{ paddingLeft: '24px', paddingRight: '24px' }}>
                <Paper style={stylePaper} zDepth={1} rounded={false}>
                    <div>
                        <span style={{ color: '#434343', fontWeight: '500' }}>Ship-from Address (optional)</span>
                        <FlatButton style={{ float: 'right' }} icon={<Remove/>} />
                    </div>
                    <div style={{ width: '50%' }}>

                        <div>
                            <TextField
                                style={{ marginRight: '4px' }}
                                floatingLabelText="Ship from - Street"
                            />
                            <TextField
                                floatingLabelText="Ship from - State"
                                fullWidth={true}
                            />
                        </div>
                    </div>
                </Paper>
            </div>
        );
    }
}

export default ShipFromAddress;