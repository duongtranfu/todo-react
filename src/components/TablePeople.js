import React, { Component } from 'react';
import People from './People';

class TablePeople extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let input = '';
        return (
            <div>
                <form onSubmit={e => {
                    e.preventDefault();
                    this.props.addPeople(input.value);
                    input.value = '';
                }}>
                    <input ref={node => input = node} />
                </form>
                <table>
                    <tbody>
                        {
                            this.props.people.map(v => <People key={v.id} name={v.name} onDelete={() => this.props.deletePeople(v.id)} />)
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TablePeople;