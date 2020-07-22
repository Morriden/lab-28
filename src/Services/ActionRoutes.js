export const chosenRoute = (link, userInput, method) => {
    switch(method) {
        case 'GET':
            return fetch(`${link}`)
            .then(res => res.json())
            break;
        case 'POST':
            return fetch(`${link}`, {
                method: 'POST',
                body: `${userInput}`
            })
            .then(res => res.json())
            break;
        case 'PUT':
            return fetch(`${link}`, {
                method: 'PUT',
                body: `${userInput}`
            })
            .then(res => res.json())
            break;
        case 'DELETE':
            return fetch(`${link}`, {
                method: 'DELETE',
                body: `${userInput}`
            })
            .then(res => res.json())
            break;
    }
}

// export const GetRoute = (userInput) => {
//     return fetch(`${userInput}`)
//     .then(res => res.json())
// }

// export const PostRoute = (link, userInput) => {
//     return fetch(`${link}`, {
//         method: 'POST',
//         body: `${userInput}`
//     })
//     .then(res => res.json())
// }

// export const PutRoute = (link, userInput) => {
//     return fetch(`${link}`, {
//         method: 'PUT',
//         body: `${userInput}`
//     })
//     .then(res => res.json())
// }

// export const DeleteRoute = (link, userInput) => {
//     return fetch(`${link}`, {
//         method: 'DELETE',
//         body: `${userInput}`
//     })
//     .then(res => res.json())
// }