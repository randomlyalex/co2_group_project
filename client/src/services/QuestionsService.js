const baseURL = 'http://localhost:3000/api/questions/';

export default {
	getQuestions() {
		return fetch(baseURL).then((res) => res.json());
	},
	addQuestion(question) {
		return fetch(baseURL, {
			method: 'POST',
			body: JSON.stringify(question),
			headers: { 'Content-Type': 'application/json' },
		}).then((res) => res.json());
	},
	deleteQuestion(id) {
		return fetch(baseURL + id, {
			method: 'DELETE',
		});
	},
	updateQuestion(question, id) {
		return fetch(baseURL + id, {
			method: 'PUT',
			body: JSON.stringify(question),
			headers: { 'Content-Type': 'application/json' },
		}).then((res) => res.json());
	},
};
