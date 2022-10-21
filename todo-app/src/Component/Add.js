import React from 'react'
import ReactDOM from 'react-dom'
import {useEffect, useState} from 'react'

// Post

// function createTask(data) { 
//     const [posts, setPosts] = useState([])  
//     const sourceApi = 'https://60af56fe5b8c300017dec6c8.mockapi.io/tasks';
//     const requestOptions = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     };
//     fetch(sourceApi, requestOptions)
//         .then(function(response) {
//             response.json();
//         })
//         .then(posts => {
//             setPosts(posts)
//         })
//         .catch(error => console.log('error',error));
// }

// const sourceApi = 'https://60af56fe5b8c300017dec6c8.mockapi.io/tasks';
// function createTask(data) {
//     var options = {
//         method: 'POST',
//         // khi gửi dữ liệu đi chỉ nhận đc id còn name và description ko nhận đc vì ở dạng x-www-form-urlencoded ... hơi khó hiểu
//         // cái này giúp nhận dạng ...
//         // không có header là ko nhận đc dữ liệu
//         headers: {
//             'Content-Type': 'application/json'
//                 // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: JSON.stringify(data)
//     };
//     fetch(sourceApi, options)
//         .then(function(response) {
//             response.json();
//         })
//         .then(json);
// }

const Add = (e) => {
    const title = document.querySelector('.new-todo').value;
    const action = document.querySelector('.inputCheckbox').checked;
    const status = action ? "completed" : "not_started";
    const formData = {
        title: title,
        status: status,
    };
    console.log(formData)
    if(e.keyCode === '13') {
        alert(formData)
        console.log(formData)
        // createTask(formData);
    }
}

export default Add
