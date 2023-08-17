export default class ErrorRepository {


	constructor() {
		this.error = new Map();
	}

	addError(code, description) {
		this.error.set(code, description)
	}

	translate(code) {
		return this.error.has(code) ? this.error.get(code) : 'Unknown error'
	}
}

const errorcode = new ErrorRepository()


errorcode.addError(404, 'Page not found');
errorcode.addError(500, 'Internal server error');
errorcode.addError(403, 'Access denied');

console.log(errorcode.translate(404))