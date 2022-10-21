import React from 'react'
import ReactDOM from 'react-dom'
import {useEffect, useState} from 'react'

// Get

const GetApi = () => {
    const [posts, setPosts] = useState([])
    const sourceApi = 'https://60af56fe5b8c300017dec6c8.mockapi.io/tasks';
    useEffect(() => {
        fetch(sourceApi)
            .then (response => response.json())
            .then(json => {
                setPosts(json)
            })
            .catch(error => console.log('error',error));
    },[])

    return posts
}

export default GetApi