// 2)
var message = "Assslam o Aliokum!,Abdullah whould you like to learn Python";
console.log(message);
// 3)
var person_name = "Abdullah Asif";
console.log("person_name in upper case", person_name.toUpperCase());
// 4)
console.log("Umar b. al-Khattab said,'To be alone means you avoid bad company.But to have a true friend is batter than being alone'");
// 5)
var famous_person = "Umar b. al-Khattab said,'To be alone means you avoid bad company.But to have a true friend is batter than being alone'";
var famous_quote = famous_person;
console.log(famous_quote);
// 6)
var name1 = "\tAbdullah\t";
console.log(name1);
console.log(name1.trim());
// 7)
console.log(5+3)
console.log(11-3);
console.log(4*2)
console.log(16/2);
// 8)
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
// 9)
var fav_number = 0;
console.log("My Favorite Number Is : ", fav_number);
// 11)
var names = ["Akmal","Fahad","Ahsan"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
// 12)
var names = ["Akmal","Fahad","Ahsan"];
var message = "My Freiend name is {name}";
for (const name of names) {
    var personalizedMessage = message.replace("{name}", name);
    console.log(personalizedMessage);
}
// 13)
var transport = ["Bike","car","Raksha"];
var trsns_name = "My transport name is {transports}";
for (var transports of transport){
    var trans_message = trsns_name.replace("{transports}",transports)
    console.log(trans_message)
}
// 14)
var night_dinner = ["Akmal","Fahad","Asif"]
for (var guest of night_dinner) {
    console.log(`Dear ${guest},\nYou are cordially invited to dinner at my place. It would be an honor to have your presence and engage in stimulating conversations.\nLooking forward to seeing you on the scheduled date!\nSincerely,\n[Abdullah]`);
}
// 15)
var guests: string[] = ['Albert Einstein', 'Marie Curie', 'Leonardo da Vinci'];
var guestWhoCantMakeIt: string = 'Marie Curie';
var newInvitee: string = 'Nikola Tesla';
var index = guests.indexOf(guestWhoCantMakeIt);
if (index !== -1) {
    guests[index] = newInvitee;
}
for (var guest of guests) {
    console.log(`Dear ${guest},\nYou are cordially invited to dinner at my place. It would be an honor to have your presence and engage in stimulating conversations.\nLooking forward to seeing you on the scheduled date!\nSincerely,\n[Abdullah]`);
    console.log('---');
}
console.log(`${guestWhoCantMakeIt} can't make it to the dinner.`);
// 16)
var guests: string[] = ['Albert Einstein', 'Marie Curie', 'Leonardo da Vinci'];
var guestWhoCantMakeIt: string = 'Marie Curie';
var newInvitee: string = 'Nikola Tesla';
var additionalGuests: string[] = ['Isaac Newton', 'Galileo Galilei', 'Ada Lovelace'];
var index = guests.indexOf(guestWhoCantMakeIt);
if (index !== -1) {
  guests[index] = newInvitee;
}
guests.unshift('New Guest 1');
var middleIndex = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, 'New Guest 2');
guests.push('New Guest 3');
console.log("Good news! We found a bigger dinner table.");
for (var guest of guests) {
  console.log(`Dear ${guest},\nYou are cordially invited to dinner at my place. It would be an honor to have your presence and engage in stimulating conversations.\nLooking forward to seeing you on the scheduled date!\nSincerely,\n[Abdullah]`);
}
// 17)
var people: string[] = ["Alice", "Bob", "Charlie", "David", "Eve"];
console.log("Sorry, the new dinner table won't arrive in time. I can only invite two people for dinner.");
while (people.length > 2) {
    var removedGuest = people.pop();
    if (removedGuest) {
        console.log(`Sorry ${removedGuest}, I can't invite you to dinner.`);
    }
}
for (var guest of people) {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
}
people = [];
console.log("After removing all guests, the list is now:", people);
// 18)
var placesToVisit: string[] = ["Paris", "Tokyo", "New York", "Rome", "Sydney"];
console.log("Original order:", placesToVisit);
console.log("Alphabetical order:", [...placesToVisit].sort());
console.log("Original order after sorting:", placesToVisit);
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());
console.log("Original order after reverse sorting:", placesToVisit);
placesToVisit = placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);
placesToVisit = placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);
placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placesToVisit);
// 19)
console.log("Original guest list:", guests);
console.log("Number of people invited to dinner:", guests.length);
// 20)
var famous_places: string[] = [
    "Eiffel Tower",
    "Great Wall of China",
    "Machu Picchu",
    "Pyramids of Giza",
    "Statue of Liberty",
    "Taj Mahal",
    "Christ the Redeemer",
    "Colosseum",
    "Sydney Opera House",
    "Petra"
];
console.log("List of Famous Landmarks: \n", famous_places);
// 21)
var author_person = {
    first:["Quran","Hidth","English"],
    second:["Hazrat Muhammad","Abdullah","Abu Mutlab"],
    name9: "Abdullah"
};
console.log(author_person.first[2]);
// 22)
var colors = ["Blue","Green","Red"] 
console.log(colors[2])
// 23)
var car = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');  // True

console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda');   // False

console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru');  // False

console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru');  // False

console.log("Is car !== 'honda'? I predict True.");
console.log(car !== 'honda');   // True

console.log("Is car.length == 6? I predict True.");
console.log(car.length == 6);   // True

console.log("Is car.length <= 7? I predict True.");
console.log(car.length <= 7);   // True

console.log("Is car.length > 5? I predict False.");
console.log(car.length > 5);    // False

console.log("Is car.charAt(0) == 's'? I predict True.");
console.log(car.charAt(0) == 's');  // True

console.log("Is car.charAt(2) != 'u'? I predict False.");
console.log(car.charAt(2) != 'u');  // False
// 24)
// Tests for equality and inequality with strings
var pet = "dog";
if (pet === "dog") {
    console.log("You have a dog");
} else {
    console.log("You don't have a dog");
}

if (pet !== "cat") {
    console.log("You don't have a cat");
} else {
    console.log("You have a cat");
}
// Tests using the lower case function
var message = "Hello TypeScript";
if (message.toLowerCase() === "hello typescript") {
    console.log("The message is in lower case");
} else {
    console.log("The message is not in lower case");
}
var quantity = 15;
if (quantity === 15) {
    console.log("Quantity is 15");
} else {
    console.log("Quantity is not 15");
}
if (quantity > 10) {
    console.log("Quantity is greater than 10");
}
if (quantity < 20) {
    console.log("Quantity is less than 20");
}
if (quantity >= 15) {
    console.log("Quantity is greater than or equal to 15");
}
if (quantity <= 18) {
    console.log("Quantity is less than or equal to 18");
}
var temperature = 28;
if (temperature > 25 && temperature < 30) {
    console.log("Temperature is between 25 and 30 degrees");
}
if (temperature < 20 || temperature > 30) {
    console.log("Temperature is either too low or too high");
}
var fruits = ["apple", "banana", "orange"];
// if (fruits.includes("banana")) {
    // console.log("Banana is in the fruits array");
// }
// if (!fruits.includes("grape")) {
    // console.log("Grape is not in the fruits array");
// }
// 25)
var alien_color = "Green"
if (alien_color=="Green"){
    console.log("Player you just earned 5 points")
}
var alien_color = "Yellow"
if (alien_color=='Green'){
    console.log("Player you just earned 5 points")
}
// 26)
var alien_color = "Green"
if (alien_color=='Green'){
    console.log("Player you just earned 5 points")
}else{
    console.log("Player you just earned 10 points")
}
var alien_color = "yellow"
if (alien_color=='Green'){
    console.log("Player you just earned 5 points")
}else{
    console.log("Player you just earned 10 points")
}
// 27)
if (alien_color=='Green'){
    console.log("Player you just earned 5 points")
}else if(alien_color=='yellow'){
    console.log("Player you just earned 10 points")
}else {
    console.log("Player you just earned 15 points")
}
// 28)
var age = 18
if(age<2){
    console.log("Person Is A Baby.")
}else if(age>=2 && age<4){
    console.log("Person Is A toddler.")
}else if(age>=4 && age<13){
    console.log("Person Is A kid.")
}else if(age>=13 && age<20){
    console.log("Person Is A teenager.")
}else if(age>=20 && age<65){
    console.log("Person Is A Adult.")
}else{
    console.log("Person Is An teenager.")
}
// 29)
var favorite_fruits = ["banana", "apple", "strawberry"];
if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes("apple")) {
    console.log("You really like apples!");
}
if (favorite_fruits.includes("orange")) {
    console.log("You really like oranges!");
}
if (favorite_fruits.includes("strawberry")) {
    console.log("You really like strawberries!");
}
if (favorite_fruits.includes("kiwi")) {
    console.log("You really like kiwis!");
}
// 30)
var usernames = ['admin', 'Eric', 'Alice', 'John', 'Sarah'];
for (var username of usernames) {
    if (username === 'admin') {
        console.log(`Hello ${username}, would you like to see a status report?`);
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
// 31)
var usernames = ['admin', 'Eric', 'Alice', 'John', 'Sarah'];
if (usernames.length === 0) {
    console.log("We need to find some users!");
} else {
    for (var username of usernames) {
        if (username === 'admin') {
            console.log(`Hello ${username}, would you like to see a status report?`);
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}
// Remove all usernames from the array
var usernames:string[] = [];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
// 32)
var current_users: string[] = ['admin', 'Eric', 'Alice', 'John', 'Sarah'];
var new_users: string[] = ['John', 'Mary', 'David', 'sarah', 'Linda'];
for (var new_username of new_users) {
    var lowerCaseNewUsername = new_username.toLowerCase();
    if (current_users.includes(lowerCaseNewUsername)) {
        console.log(`Sorry, the username "${new_username}" is already taken. Please choose a different one.`);
    } else {
        console.log(`Congratulations! The username "${new_username}" is available.`);
        current_users.push(lowerCaseNewUsername); // Add the new username to current_users
    }
}
// 33)
var numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var number of numbers) {
    let ordinal = "";
    if (number === 1) {
        ordinal = "st";
    } else if (number === 2) {
        ordinal = "nd";
    } else if (number === 3) {
        ordinal = "rd";
    } else {
        ordinal = "th";
    }
    console.log(`${number}${ordinal}`);
}
// 34)
var favorite_pizzas: string[] = ["Pepperoni", "Margherita", "Hawaiian"];
for (var pizza of favorite_pizzas) {
    console.log(`I like ${pizza} pizza.`);
}
console.log("I really love pizza!");
// 35)
var animals_with_common_characteristic: string[] = ["Dog", "Cat", "Rabbit"];
for (var animal of animals_with_common_characteristic) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}
console.log("Any of these animals would make a great pet!");
// 36)
function makeshirt(size: string, message: string): void{
    console.log(`Creating a ${size}-sized shirt with the message: "${message}".`);
}
// Call the function
makeshirt("Large", "200$");
// 37)
function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`Creating a ${size}-sized shirt with the message: "${message}".`);
}
// Create large shirt with default message
make_shirt();
// Create medium shirt with default message
make_shirt("Medium");
// Create small shirt with custom message
make_shirt("Small", "Custom message for a small shirt.");
// 38)
function describe_city(city: string, country: string = "Unknown Country"): void {
    console.log(`${city} is in ${country}.`);
}
describe_city("Karachi", "Pakistan");
describe_city("New York", "USA");
describe_city("Sydney"); // No country specified, defaults to "Unknown Country"
// 39)
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}
var result1 = city_country("Lahore", "Pakistan");
var result2 = city_country("Paris", "France");
var result3 = city_country("Tokyo", "Japan");
console.log(result1);
console.log(result2);
console.log(result3);
// 40)
const make_album = (artist: string, album_title: string, tracks?: number): object => {
    const album = {
        artist: artist,
        title: album_title
    };
    if (tracks !== undefined) {
        album["tracks"] = tracks;
    }
    return album;
};
var album1 = make_album("Artist 1", "Album Title 1");
var album2 = make_album("Artist 2", "Album Title 2", 12);
var album3 = make_album("Artist 3", "Album Title 3", 8);
console.log(album1);
console.log(album2);
console.log(album3);
// 41)
function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}
var magician_names: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
show_magicians(magician_names);
// 42)
class MagicianProgram {
    private magicians: string[];
    constructor(magicians: string[]) {
        this.magicians = magicians;
    }
    showMagicians() {
        console.log("Current list of magicians:");
        for (const magician of this.magicians) {
            console.log(magician);
        }
    }
    makeGreat() {
        for (let i = 0; i < this.magicians.length; i++) {
            this.magicians[i] = "the Great " + this.magicians[i];
        }
    }
}
// Example usage
var initialMagicians = ["Merlin", "Houdini", "Copperfield"];
var magicianProgram = new MagicianProgram(initialMagicians);
console.log("Original list of magicians:");
magicianProgram.showMagicians();
magicianProgram.makeGreat();
console.log("\nList of magicians after adding 'the Great':");
magicianProgram.showMagicians();
// 43)
class MagicianProgram {
    private magicians: string[]
    constructor(magicians: string[]) {
        this.magicians = magicians;
    }
    showMagicians(magiciansList: string[]) {
        console.log("List of magicians:");
        for (const magician of magiciansList) {
            console.log(magician);
        }
    }
    makeGreat(magiciansList: string[]) {
        const greatMagicians: string[] = [];
        for (const magician of magiciansList) {
            greatMagicians.push("the Great " + magician);
        }
        return greatMagicians;
    }
}
// Example usage
// var initialMagicians = ["Merlin", "Houdini", "Copperfield"];
// var magicianProgram = new MagicianProgram(initialMagicians);
// console.log("Original list of magicians:");
// magicianProgram.showMagicians(initialMagicians);
// var greatMagicians = magicianProgram.makeGreat(initialMagicians);
// console.log("\nList of magicians with 'the Great' added:");
// magicianProgram.showMagicians(greatMagicians);
// 44)
function orderSandwich(...items: string[]) {
    if (items.length === 0) {
        console.log("You ordered an empty sandwich. Are you sure about that?");
    } else {
        console.log("You ordered a sandwich with the following items:");
        for (const item of items) {
            console.log("- " + item);
        }
    }
    console.log("\n");
}
// Call the function with different numbers of arguments
orderSandwich("Turkey", "Lettuce", "Tomato", "Mayo");
orderSandwich("Ham", "Swiss Cheese", "Mustard");
orderSandwich("Peanut Butter", "Jelly");
orderSandwich();
// 45)
interface Car {
    manufacturer: string;
    model: string;
    [key: string]: string;
}
function createCar(manufacturer: string, model: string, ...extras: [string, string][]) {
    const car: Car = {
        manufacturer: manufacturer,
        model: model
    };
    for (const extra of extras) {
        const [key, value] = extra;
        car[key] = value;
    }
    return car;
}
const carInfo = createCar("Toyota", "Corolla", ["color", "blue"], ["year", "2022"], ["features", "GPS"]);
console.log(carInfo);