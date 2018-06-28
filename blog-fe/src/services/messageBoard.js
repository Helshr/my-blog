import request from '../utils/request'

export function postMessage(values) {
    return request('api/register', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
         },
        body:JSON.stringify(values)
    }) 
}

export function getMessage(values) {
    return request('api/all', {
        method: 'GET'
    }).then(data => data)
}