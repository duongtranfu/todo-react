import React, { Component } from 'react';

class RefsDemo extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.textInput = React.createRef();
    }

    focusTextInput = () => {
        this.textInput.current.focus();
    }

    render() {
        return (
            <div>
                <button onClick={this.focusTextInput}>Focus</button>
                <input type='text' ref={this.textInput} />
            </div>
        );
    }
}

export default RefsDemo;