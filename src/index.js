import { Team, Character } from "./set/team/team.js";

// const char1 = new Character('bolune');
// const char2 = new Character('lizon');
// const char3 = new Character('vladlen');
// const char4 = new Character('lizon');

// const team = new Team();

// team.add(char1);
// team.add(char2);
// team.add(char3);
// team.add(char4); // здесь должна возникнуть ошибка имени
// team.add(char1) // Здесь должна возникнуть ошибка перснажа
// console.log(team.toArray());


const char1 = new Character('sema')
const char2 = new Character('petr')
const char3 = new Character('alex')
const char4 = new Character('petr')


const teamTwo = new Team();


teamTwo.addAll(char1, char2, char3, char4)

console.log(teamTwo.toArray())