const Delete = (idTask) => {

    const sourceApi = `https://60af56fe5b8c300017dec6c8.mockapi.io/tasks/${idTask}`;

    const requestOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*'
        },
    };
    fetch(sourceApi, requestOptions)
            .then(response => {
                response.json()
                }      
            )
            .then(function(json) {
               json.remove();
            })
            .catch(error => {
                console.log('error',error)
            }); 
}

export default Delete