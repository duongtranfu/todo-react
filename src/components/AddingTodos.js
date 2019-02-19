import React from 'react';

const AddTodo = (props) => {
    let input;
    let addTodoAction = props.addTodoAction;

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                addTodoAction(input.value);
                input.value = ''
            }}>
                <input ref={node => input = node} />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo;