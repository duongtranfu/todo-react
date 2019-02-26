import React, { Component } from 'react';
import { object, string } from 'yup';

const optionalRequiredSchema = object().shape({
    additionObj: object().required(),
    otherAdditionObj: string().required()
});

class DemoYup extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    add = () => {
        this.setState({
            additionObj: {},
            otherAdditionObj: '123'
        });
    }

    render() {
        const valid = optionalRequiredSchema.isValidSync(this.state);

        return (
            <div className="container">
                <div className="text" style={{ backgroundColor: valid ? "green" : "red" }}>
                    Valid Data: {"" + valid}
                </div>
                <button onClick={this.add}>Add Optional</button>
            </div>
        );
    }
}

export default DemoYup;