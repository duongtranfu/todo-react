import React, { Component } from 'react';
import CustomTextInput from './RefsCustomInput';

class AutoFocusTextInput extends Component {
    constructor(props) {
        super(props);
        this.customTextInput = React.createRef();
    }

    componentDidMount() {
        this.customTextInput.current.focusTextInput();
        console.log(this.customTextInput.current);
    }

    render() {
        return (
            <CustomTextInput ref={this.customTextInput} />
        );
    }
}

export default AutoFocusTextInput;