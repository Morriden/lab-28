export const chosenRoute = (link, userInput, method) => {
  switch(method) {
    case 'GET':
      return fetch(`${link}`)
        .then(res => res.json());
    case 'POST':
      return fetch(`${link}`, {
        method: 'POST',
        body: JSON.stringify(userInput)
      })
        .then(res => res.json());
    case 'PUT':
      return fetch(`${link}`, {
        method: 'PUT',
        body: JSON.stringify(userInput)
      })
        .then(res => res.json());
    case 'DELETE':
      return fetch(`${link}`, {
        method: 'DELETE',
        body: JSON.stringify(userInput)
      })
        .then(res => res.json());
  }
};
