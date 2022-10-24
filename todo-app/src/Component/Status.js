// Put

const Status = (idTask) => {

    const sourceApi = `https://60af56fe5b8c300017dec6c8.mockapi.io/tasks/${idTask}`;
    
    const status = document.querySelector(`#${idTask}`).checked;
    const changeStatus = status ? "not_started" : "completed" ;

    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*'
        },
        body: JSON.stringify({status: changeStatus})
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

export default Status
