import React from 'react';
import './TodoItem.css'

function TodoItem (props)
{
    return (
        <li>
            <p>{props.title}</p>
            <div className='todoitem-details'>
                <div>Completed?</div>
                <div>{props.created}</div>
            </div>
        </li>
    );
}

export { TodoItem }