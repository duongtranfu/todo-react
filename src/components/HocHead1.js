import React from 'react';

class HeadComponent extends React.Component {
    render() {
        return (
            <div onClick={this.props.onClick}>

                <h1>{this.props.title}</h1>
                <p>{this.props.text}</p>
            </div>
        );
    }
}
export default HeadComponent;