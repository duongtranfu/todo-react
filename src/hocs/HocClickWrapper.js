import React from 'react';

const ClickWrapper = (WrapperComponent) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
        }

        onClick = (e) => {
            alert('hoc click');
        }

        render() {
            return (
                <div>
                    <WrapperComponent {...this.props} title={'hi'} text={'an example of HOC'} onClick={this.onClick} />
                </div>
            );
        }
    }
}

export default ClickWrapper;