export class Character {
	constructor(name) {
		this.name = name;
	}
}

export class Team {
	constructor() {
		this.members = new Set();
	}

	add(character) {
		if (this.members.has(character)) {
			throw new Error('Персонаж уже есть в команде.');
		} else {
			for (let member of this.members) {
				if (member.name === character.name) {
					throw new Error('Персонаж с таким именем уже есть в команде.');
				}
			}
			this.members.add(character);
		}
	}

	addAll(...characters) {
		for (let character of characters) {
			if (this.members.has(character)) {
				throw new Error('Персонаж уже есть в команде.');
			} else {
				for (let member of this.members) {
					if (member.name === character.name) {
						throw new Error('Персонаж с таким именем уже есть в команде.');
					}
				}
				this.members.add(character);
			}
		}
	}

	toArray() {
		return [...this.members];
	}
}
