const usersUrl = 'https://jsonplaceholder.typicode.com/users'

const body = {
	name: 'Sergey',
	age: 22,
	address: "Belgorod"
}

function sendRequest(method, url, body = null) {
	const headers = {
		'content-type': 'application/json'
	}

	return fetch(url, {
		method: method,
		body: JSON.stringify(body),
		headers: headers
	}).then(response => {
		if (response.ok) {
			return response.json()
		}

		return response.json().then(error => {
			const e = new Error('Что-то пошло не так')
			e.data = error
			throw e
		})
	})
}

// sendRequest('GET', usersUrl)
// 	.then(data => console.log(data))
// 	.catch(error => console.log('Ошибка из промиса. ' + error))

sendRequest('POST', usersUrl, body)
	.then(data => console.log(data))
	.catch(error => console.log('Ошибка из промиса. ' + error))