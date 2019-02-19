import React from 'react';

const People = (props) => {
    return (
        <tr>
            <td>{props.name}</td>
            <td><button onClick={props.onDelete}>delete</button></td>
        </tr>
    );
}

export default People;