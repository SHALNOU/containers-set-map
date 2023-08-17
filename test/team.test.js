import { Character, Team } from "../src/set/team/team"


test('test defold result return addAll', () => {

	const char1 = new Character('sema')
	const char2 = new Character('igor')
	const char3 = new Character('alex')
	const char4 = new Character('petr')

	const teamTwo = new Team();
	teamTwo.addAll(char1, char2, char3, char4)

	const result = [
		{ name: 'sema' },
		{ name: 'igor' },
		{ name: 'alex' },
		{ name: 'petr' }
	]

	expect(teamTwo.toArray()).toEqual(result)

})

test('test return throw new error', () => {
	const char1 = new Character('sema');
	const char2 = new Character('petr');
	const char3 = new Character('alex');
	const char4 = new Character('petr');

	const teamTwo = new Team();
	teamTwo.addAll(char1, char2, char3);

	expect(() => teamTwo.addAll(char4)).toThrowError('Персонаж с таким именем уже есть в команде.');
});

test('test return throw new error', () => {
	const char1 = new Character('sema');
	const char2 = new Character('petr');
	const char3 = new Character('alex');
	const char4 = new Character('petr');

	const teamTwo = new Team();
	teamTwo.addAll(char1, char2, char3);

	expect(() => teamTwo.addAll(char1)).toThrowError('Персонаж уже есть в команде.');
});

test('test defold result return add', () => {

	const char1 = new Character('sema')
	const char2 = new Character('igor')
	const char3 = new Character('alex')
	const char4 = new Character('petr')

	const teamTwo = new Team();
	teamTwo.add(char1)
	teamTwo.add(char2)
	teamTwo.add(char3)
	teamTwo.add(char4)

	const result = [
		{ name: 'sema' },
		{ name: 'igor' },
		{ name: 'alex' },
		{ name: 'petr' }
	]

	expect(teamTwo.toArray()).toEqual(result)

})

test('test return throw new error', () => {
	const char1 = new Character('sema');
	const char2 = new Character('petr');
	const char3 = new Character('alex');
	const char4 = new Character('petr');

	const teamTwo = new Team();
	teamTwo.add(char1)
	teamTwo.add(char2)
	teamTwo.add(char3)

	expect(() => teamTwo.add(char4)).toThrowError('Персонаж с таким именем уже есть в команде.');
});

test('test return throw new error', () => {
	const char1 = new Character('sema');
	const char2 = new Character('petr');
	const char3 = new Character('alex');
	const char4 = new Character('petr');

	const teamTwo = new Team();
	teamTwo.add(char1)
	teamTwo.add(char2)
	teamTwo.add(char3)

	expect(() => teamTwo.add(char1)).toThrowError('Персонаж уже есть в команде.');
});