import React from 'react'
import ReactDOM from 'react-dom'
import {useEffect, useState} from 'react'
import GetApi from './GetApi'

// Get

function Task() {
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
    
    return (  
        <div className='container list-todo-not-started'>
            {GetApi().map((post,index) => {
                if(post.status === 'not_started') {
                    return (                   
                        <li className='task' key={post.id}>
                            <div>
                                <input className='status' type='checkbox' />
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



export default Task

