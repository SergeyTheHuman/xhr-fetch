const usersUrl = 'https://jsonplaceholder.typicode.com/users'

const body = {
	name: 'Sergey',
	age: 22,
	address: "Belgorod"
}

function sendRequest(method, url, body = null) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest()

		xhr.open(method, url)

		xhr.responseType = 'json'
		xhr.setRequestHeader('content-type', 'application/json')

		xhr.onload = () => {
			if (xhr.status >= 400) {
				reject('Произошла ошибка. Попробуйте снова.')
			} else {
				resolve(xhr.response)
			}
		}

		xhr.onerror = (error) => {
			reject('Произошла ошибка. Попробуйте снова.');
		}

		xhr.send(JSON.stringify(body))
	})
}

sendRequest('GET', usersUrl)
	.then(data => console.log(data))
	.catch(error => console.log('Ошибка из промиса. ' + error))

sendRequest('POST', usersUrl, body)
	.then(data => console.log(data))
	.catch(error => console.log('Ошибка из промиса. ' + error))