import React, { Component } from 'react';
import ShipToAdddress from './ShipToAddress';
import ShipFromAddress from './ShipFromAddress';
import DataPointTable from './DataPointTable';

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
                <DataPointTable />
            </React.Fragment>
        );
    }

}

export default TaxCal;