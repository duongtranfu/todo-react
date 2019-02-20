import React from 'react';
export default function IICountListHoc(WrappedComponent) {
    return class extends WrappedComponent {
        constructor(props) {
            super(props)
        }

        componentDidMount() {
            this.setState({b: 2});
        }

        render() {
            const tree = super.render();
            return (
                <div>
                    Add Text
                    {tree}
                    <p>{JSON.stringify(this.props)}</p>
                    <p>{JSON.stringify(this.state)}</p>
                </div>
            );
        }
    }
}