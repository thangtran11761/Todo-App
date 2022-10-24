import React from 'react'
import ReactDOM from 'react-dom'
import {useEffect, useState} from 'react'
import GetApi from './GetApi'
import Status from './Status'
import Delete from './Delete'

// Get
// onClick={Status(post.id)}
function Task() {

    return (  
        <div className='container list-todo-not-started'>
            {GetApi().map((post) => {
                if(post.status === 'not_started') {
                    return (                   
                        <li className='task' key={post.id}>
                            <div>
                                <input className='status' id={post.id} type='checkbox' />
                                <label className='task-content'>{post.title}</label>
                            </div>
                            <button onClick={Delete}>Xoa</button>
                        </li>
                    )
                }
            })}
        </div>          
    )
}



export default Task

