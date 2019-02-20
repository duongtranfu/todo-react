import React, {Component} from 'react';

export default function IICountListHoc (WrappedComponent) {
    return class extends WrappedComponent {
        constructor(props) {
            super(props)
        }

        componentDidMount() {

        }

        render() {
            const tree = super.render();
            return (
                {tree}
            );
        }
    }
}