import React from 'react';
import './TodoCreate.css';

function TodoCreate()
{
    return (
        <form>
            <input type="text" placeholder="Create new tasks here!"/>
        </form>
    );
}

export { TodoCreate }