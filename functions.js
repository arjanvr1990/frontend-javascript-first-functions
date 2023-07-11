/* Opdracht 0: voorbeeld */
// Schrijf een functie die de string "Goedemorgen" teruggeeft
// ---- Verwachte uitkomst bij het aanroepen van de functie: "Goedemorgen"

function morningGreeter() {
  return "Goedemorgen";
}

const greeting = morningGreeter();

console.log(greeting);

/* Opdracht 1 */
// Schrijf een functie genaamd getSchool, die de string "Novi Hogeschool" teruggeeft
// ---- Verwachte uitkomst bij het aanroepen van de functie: "Novi Hogeschool"

function getSchool() {
  return "Novi Hogeschool"
}

const schoolName = getSchool();

console.log(schoolName);

/* Opdracht 2 */
// Schrijf een functie genaamd compliment, die jou een complimentje geeft!
// ---- Verwachte uitkomst bij het aanroepen van de functie: "Lekker bezig met die functies, Jan!"

function getCompliment () {
  return "Je bent zulke mooie stappen aan het maken, keep up the good work!!"

}

const compliment = getCompliment();

console.log("Arjan " + compliment);



/* Opdracht 3 */
// Schrijf een functie genaamd getGrades, die een array met de cijfers 8, 8.5, 6 en 7 teruggeeft.
// ---- Verwachte uitkomst bij het aanroepen van de functie: [8, 8.5, 6, 7]

function getGrades () {
  return [8, 8.5, 6, 7]
}

const grades = getGrades();

console.log(grades);

/* Opdracht 4 */
// Schrijf een functie genaamd getDetails, die een object met daarin jouw eigen naam en achternaam teruggeeft.
// ---- Verwachte uitkomst bij het aanroepen van de functie: { firstName: 'Jan', lastName: 'Janssen' }

function getDetails (firstName, lastName) {
  const fullName = firstName + " " + lastName;
  return [fullName];

}

const firstAndLastName = getDetails("Arjan", "van Raamsdonk");
console.log(firstAndLastName);

const firstAndLastName2 = getDetails("Rob", "van Raamsdonk");
console.log(firstAndLastName2);