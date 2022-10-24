import React from 'react'
import Status from './Status'
import GetApi from './GetApi'
import Delete from './Delete'

// Get

function Completed() {
    return (  
        <div className='container list-todo-completed'>
        <h2>Completed</h2>
            {GetApi().map((post,index) => {
              if(post.status === 'completed') {
                return (                   
                  <li className='task' key={index}>
                      <div>
                          <input className='status' type='checkbox' checked="true" />
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

export default Completed

