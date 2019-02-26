import React, { Component } from 'react';
import ShipToAdddress from './ShipToAddress';
import ShipFromAddress from './ShipFromAddress';
import DataPointTable from './DataPointTable';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

const stylePaper = {
    padding: '24px'
};

class TaxCal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenShipOpt: false
        };
    }

    toggleShipOption = () => {
        console.log(this.state)
        this.setState((state, props) => ({ isOpenShipOpt: !state.isOpenShipOpt }));
    }

    render() {
        return (
            <React.Fragment>
                <ShipToAdddress openShipOpt={this.toggleShipOption} />
                {this.state.isOpenShipOpt && <ShipFromAddress closeShipOpt={this.toggleShipOption} />}
                <div style={{ paddingLeft: '24px', paddingRight: '24px' }}>
                    <Paper style={stylePaper} zDepth={1} rounded={false}>
                        <DataPointTable />
                        <div style={{textAlign: 'right'}}>
                            <RaisedButton label="Calculate tax" buttonStyle={{backgroundColor: '#14b9f1'}} primary={true} />
                        </div>
                    </Paper>
                </div>
            </React.Fragment>
        );
    }

}

export default TaxCal;