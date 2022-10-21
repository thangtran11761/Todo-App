import React from 'react'
import ReactDOM from 'react-dom'
import {useEffect, useState} from 'react'
import GetApi from './GetApi'

// Get

function Completed() {
    // const [posts, setPosts] = useState([])
    // const sourceApi = 'https://60af56fe5b8c300017dec6c8.mockapi.io/tasks';
    // useEffect(() => {
    //     fetch(sourceApi)
    //         .then (response => response.json())
    //         .then(json => {
    //             setPosts(json)
    //         })
    //         .catch(error => console.log('error',error));
    // },[])
    console.log('getapi',GetApi());
    return (  
        <div className='container list-todo-completed'>
        <h2>Completed</h2>
            {GetApi().map((post,index) => {
              if(post.status === 'completed') {
                return (                   
                  <li className='task' key={index}>
                      <div>
                          <input className='status' type='checkbox' checked="true"/>
                          <label className='task-content'>{post.title}</label>
                      </div>
                      <button>Xoa</button>
                  </li>
                )
              }              
            })}
        </div>          
    )
}

export default Completed

