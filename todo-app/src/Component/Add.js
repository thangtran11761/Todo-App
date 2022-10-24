import React from 'react'
import ReactDOM from 'react-dom'


// Post

const sourceApi = 'https://60af56fe5b8c300017dec6c8.mockapi.io/tasks';
 
const CreateTask = (data) => { 

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin' : '*'
            },
            body: JSON.stringify(data)
        };

        fetch(sourceApi, requestOptions)
            .then(response => {
                response.json()
                }      
            )
            .catch(error => {
                console.log('error',error)
            }); 
}

const Add = (e) => {
    // e.preventDefault();

    if(e.keyCode === 13) {
        const title = document.querySelector('.new-todo').value;
        const action = document.querySelector('.inputCheckbox').checked;
        const status = action ? "completed" : "not_started";
        const data = {
            categoryId: '',
            createdAt: null,
            endDate: null,
            id: 1,
            name: 'Thang ',
            startDate: null,
            status: status,
            title: title,
            updatedAt: '',    
        };
        CreateTask(data); 

    }
    // e.stopPropagation();
        
}

 export default Add

