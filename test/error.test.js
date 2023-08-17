import ErrorRepository from "../src/set/error/error";

describe('ErrorRepository', () => {
	test('should add and translate errors correctly', () => {
		const errorcode = new ErrorRepository();

		errorcode.addError(404, 'Page not found');
		errorcode.addError(500, 'Internal server error');
		errorcode.addError(403, 'Access denied');

		expect(errorcode.translate(404)).toBe('Page not found');
		expect(errorcode.translate(500)).toBe('Internal server error');
		expect(errorcode.translate(403)).toBe('Access denied');
		expect(errorcode.translate(200)).toBe('Unknown error');
	});
});
