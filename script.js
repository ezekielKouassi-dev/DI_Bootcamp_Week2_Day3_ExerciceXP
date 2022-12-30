// Exercice 1 : Liste Des Personnes

//Partie I: Examen Des Tableaux

const people = ["Greg", "Mary", "Devon", "James"];

    let index = people.indexOf('Greg');
    console.log(index)
    if (index !== -1) {
        people.splice(index, 1);

        console.log(people)
    }

for (let i = 0; i < people.length; i++) {
    if (people[i] === 'James') {
        people[i] = 'Jason';
    }
}
console.log(people);

people.push("Konate")
console.log(people)

let index1 = people.indexOf('Mary');
console.log(index1);

let peopleCopy = people.slice(1,3)
console.log(peopleCopy)

const indexFoo = people.indexOf('Foo');

console.log(indexFoo); // -1


let last = people[people.length -1]

console.log(last)


//Partie II - Boucles

for(const person of people){
    console.log(person)
}

for (const person of people) {
    console.log(person);
    if (person === 'Jason') {
    break;
    }
}


// Exercice 2 : Vos Couleurs Préférées

const colors = ["rouge", "bleu", "vert", "jaune", "orange"]

for (let i = 0; i < colors.length; i++) {
    console.log(`Mon choix n°${i + 1} est ${colors[i]}`);
}

const suffixes = ['er', 'ème', 'ème', 'ème','ème'];

for (let i = 0; i < colors.length; i++) {
    console.log(`Mon ${i + 1}${suffixes[i]} choix est ${colors[i]}`);
}

// Exercice 3 : Répéter La Question

let nbr = prompt("Veuillez entrer un nombre svp")

console.log(typeof(nbr));

while (parseInt(nbr) < 10) {
    nbr = prompt('Veuillez entrer un numéro supérieur à 10 : ');
}


// Exercice 4 : Gestion Du Bâtiment

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

console.log(building['numberOfFloors']);

const firstFloorApts = building['numberOfAptByFloor']['firstFloor'];
const thirdFloorApts = building['numberOfAptByFloor']['thirdFloor'];
console.log(firstFloorApts +thirdFloorApts);

const secondTenantName = building.nameOfTenants[1];
const secondTenantRooms = building.numberOfRoomsAndRent[secondTenantName.toLowerCase()][0];
console.log(`${secondTenantName} a ${secondTenantRooms} chambres dans leur appartement.`)

const sarahRent = building['numberOfRoomsAndRent']['sarah'][1];
const davidRent = building['numberOfRoomsAndRent']['david'][1];
const danRent = building['numberOfRoomsAndRent']['dan'][1];
if (sarahRent + davidRent > danRent) {
    let newdanrent = building['numberOfRoomsAndRent']['dan'][1] = 1200
    console.log(`le loyer de dan est à ${newdanrent} maintenant`)
}


// Exercice 5 : Famille


const family = {
    mother: "Bohoussou",
    father: "Konan",
    children: ["ezekiel", "corine"],
    address: "555 Main Street",
    phoneNumber: "988-457-5412"
}

console.log("2.A l' aide d'une for in boucle, console.log les clés de l'objet.")

for (let k in family){
    console.log(k) //les cles
}

console.log("3.À l' aide d'une for inboucle, console.log les valeurs de l'objet.")

for(let k in family){
    console.log(family[k]) // les valeurs
}


// Exercise 6 : Rudolf

const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}

const sentence = [];
for (const key in details) {
    sentence.push(`${key} ${details[key]}`);
}
console.log(sentence.join(' '));


// Exercise 7 : Secret Group

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

const sortedNames = names.sort();

const initials = sortedNames.map(name => name[0]);

const societyName = initials.join('');

console.log(societyName);