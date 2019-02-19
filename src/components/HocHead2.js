import React from 'react';

const HeadComponent2 = (props) => (
    <table>
        <tbody>
            <tr>
                <td style={{border: '1px solid black'}}>{props.title}</td>
                <td style={{border: '1px solid black'}}>{props.text}</td>
                <td><button onClick={props.onClick}>Click</button></td>
            </tr>
        </tbody>
    </table>
); 

export default HeadComponent2;