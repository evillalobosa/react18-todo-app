import React from 'react';

function TodoItem (props)
{
    return (
        <li>
            <p>{props.title}</p>
            <p>{props.created}</p>
        </li>
    );
}

export { TodoItem }