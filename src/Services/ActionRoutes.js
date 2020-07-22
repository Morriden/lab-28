export const GetRoute = (userInput) => {
    return fetch(`${userInput}`)
    .then(res => res.json())
}

export const PostRoute = (link, userInput) => {
    return fetch(`${link}`, {
        method: 'POST',
        body: `${userInput}`
    })
    .then(res => res.json())
}

export const PutRoute = (link, userInput) => {
    return fetch(`${link}`, {
        method: 'PUT',
        body: `${userInput}`
    })
    .then(res => res.json())
}

export const DeleteRoute = (link, userInput) => {
    return fetch(`${link}`, {
        method: 'DELETE',
        body: `${userInput}`
    })
    .then(res => res.json())
}