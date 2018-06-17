// Conceptual Questions

// 1. We assign a value to a variable by using const or let
// 2. We change the value of a variable by using the assignment operator '='. Variable values can only be changed if they variable was defined using let. Const is a constant variable and cannot be changed.
// 3. We can assign an existing vairable to a new variable by first delcaring the new variable using const or let, and then using the the assignment operator '='.





// Strings

// let firstVariable = "Hello World";
// firstVariable = 5;
// let secondVariable = firstVariable;
// secondVariable = "string";

// The value of first variable is 5 and is datatype of number.

// const yourName = "Amanda";

// console.log("Hello, my name is " + yourName);





// Booleans

  // const a = 4;
  // const b = 53;
  // const c = 57;
  // const d = 16;
  // const e = 'Kevin';

  // console.log(a < b);
  // console.log(c > d);
  // console.log('Name' === 'Name');
  // console.log(a < b < c);
  // console.log(a * a === d);
  // console.log(e === 'Kevin');
  // console.log(48 == '48');





  // The Farm

// const isCow = (animal) => {
// 	if (animal == 'cow') {
// 		console.log("mooooo");
// 	} else {
// 		console.log("Hey! You're not a cow.")
// 	}
// }

// isCow('cow');
// isCow('dog');





// Driver's Ed

// const age = null;

// const canDrive = (age) => {
// 	if (age > 15) {
// 		console.log("Here are the keys");
// 	} else {
// 		console.log("Sorry, you're too young.")
// 	}
// }

// canDrive(16);
// canDrive(15);





// Just Loop It

// 1. Write code that will print out all the numbers in the range 0 - 10.

// for (let i = 0; i < 11; i++) {
// 	console.log(i);
// }

// 2. Write code that will print out all the numbers in the range 10 - 4000.

// for (let i = 10; i < 4001; i++) {
// 	console.log(i);
// }

// Write code that will print out every other number in the range 10 - 4000.

// for (let i = 10; i < 4001; i +=2) {
//   console.log(i);
// }





// Let's get even

// Print out the even numbers that are within the range of 1 - 100.

// for (let i = 1; i < 101; i++) {
//   if (i % 2 === 0) {
//     console.log(i)
//   }
// }

// Adjust your code to add a message next to the even number that says: "is an even number".

// for (let i = 1; i < 101; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} is an even number`);
//   }
// }





// Give me Five

// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five.

// for (let i = 0; i < 101; i++) {
//   if (i % 5 === 0 && i > 0) {
//     console.log(`I found a ${i}. High five!`);
//   }
// }

// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three.

// for (let i = 0; i < 101; i++) {
//   if (i % 5 === 0 && i > 0) {
//     console.log(`I found a ${i}. High five!`);
//   } else if (i % 3 ===0 && i > 0) {
//     console.log(`I found a ${i}. Three is a crowd`);
//   }
// }





  // Savings account

  // 1. Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.

// let bank_account = 0;
// for (let i = 1; i < 11; i++) {
//   bank_account += i;
// }

// console.log(bank_account);

// 2. You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2. 

// let bank_account = 0;

// for (let i = 0; i < 101; i++) {
//   bank_account += i * 2;
// }

// console.log(bank_account);





// Multiples of 3 and 5

// let sumOfMultiples = 0;

// for (let i = 1; i < 1000; i++) {
//   if (i % 3 === 0 || i % 5 === 0) {
//     sumOfMultiples += i;
//   }
// }

// console.log(sumOfMultiples);





// Easy Does It

// const quotes = ['Change the world by being yourself', 'Every moment is a fresh beginning', 'Never regret anything that made you smile'];

// console.log(quotes);





// Random

// const randomThings = [1, 10, "Hello", true]

// 1. how do you access the 1st element in the array?

// randomThings[0];

// 2.Change the value of "Hello" to "World".

// randomThings[2] = "World";

// 3. Check the value of the array to make sure it updated the array.

// console.log(randomThings);





// We've Got Class

// const ourClass = ["Gizmo", "Zoom", "Github", "Slack"]

// 1. What would you write to access the 3rd element of the array?

// ourClass[2];

// 2. Change the value of "Github" to "Octocat"

// ourClass[2] = "Octocat";

// 3. Add a new element, "Cloud City" to the array.

// ourClass.push("Cloud City");

// console.log(ourClass);





// Mix It Up

// const myArray = [5 ,10 ,500, 20]

// myArray.push("Egon");

// console.log(myArray);

// myArray.pop();

// console.log(myArray);

// myArray.unshift("Bob Marley");

// console.log(myArray);

// myArray.shift();

// console.log(myArray);

// myArray.reverse();

// console.log(myArray);





// Biggie Smalls

// let num = 100;

// if (num < 99) {
//   console.log("little number");
// } else {
//   alert("big number");
// }





// Monkey in the Middle

// let num = 2;

// if (num < 5) {
//   console.log("little number");
// } else if (num > 10) {
//   console.log("big number");
// } else {
//   console.log("monkey");
// }





// // What's in Your Closet?

// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "GA hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];

// // Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],[
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs"
//   ],[
//     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];

// // What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.

// console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

// // 2. Kristyn can't find her left shoe. Remove this item from her closet and save it to a variable named kristynShoe.

// let kristynShoe = kristynsCloset[0];

// console.log(kristynShoe);

// kristynsCloset.shift();

// console.log(kristynsCloset);

// // 3. Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".

// kristynsCloset.splice(5, 0, "raybans");

// console.log(kristynsCloset);

// // 4. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.

// kristynsCloset[kristynsCloset.indexOf("yellow knit hat")] = "stained knit hat";

// console.log(kristynsCloset);

// // 5. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.

// thomsCloset[0][0];

// console.log(thomsCloset[0][0]);

// // 6. In the same way, access one item from Thom's pants array.

// thomsCloset[1][1];

// console.log(thomsCloset[1][1]);

// // 7. Access one item from Thom's accessories array.

// thomsCloset[2][2];

// console.log(thomsCloset[2][2]);

// // 8. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"

// console.log(`Thom is looking fierce in a ${thomsCloset[0][2]}, ${thomsCloset[1][2]}, and ${thomsCloset[2][0]}`);

// // 9. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.

// thomsCloset[1][2] = "Footie Pajamas";

// console.log(thomsCloset);





// printGreeting

// const printGreeting = (name) => {
//   console.log(`Hello there, ${name}!`);
// }

// printGreeting("Slimer");





// reverseWordOrder

// const reverseWordOrder = (string) => {
//   return string.split(' ').reverse().join(' ');
// }

// console.log(reverseWordOrder("Ishmael me Call"));

// console.log(reverseWordOrder("I use Lâncome on my comb"));





// calculate

// const calculate = (num1, num2, operation) => {
//   if (operation === 'add') {
//     return num1 + num2
//   } else if (operation === 'sub') {
//     return num1 - num2
//   } else if (operation === 'mult') {
//     return num1 * num2
//   } else if (operation === 'div') {
//     return num1 / num2
//   } else if (operation === 'exp') {
//     return num1 ** num2
//   } else {
//     return "Not a known operation"
//   }
// }

// console.log(calculate(4, 3, "sub"));

// console.log(calculate(4, 3, "exp"));

// console.log(calculate(2, 2, "blah"));





// 1. Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.

// const printCool = (name) => {
//   return `${name} is cool`
// }

// console.log(printCool("Captain Reynolds"));



// 2. Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.

// const calculateCube = (num) => {
//   return num ** 3
// }

// console.log(calculateCube(5));



// 3. Write a function isAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.

// const isAVowel = (char) => {
//   let charLowerCase = char.toLowerCase();
//   if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//     return true
//   } return false
// }

// console.log(isAVowel("a"));
// console.log(isAVowel("e"));
// console.log(isAVowel("i"));
// console.log(isAVowel("o"));
// console.log(isAVowel("u"));
// console.log(isAVowel("b"));



// 4. Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

// const getTwoLengths = (string1, string2) => {
//   let string1Length = string1.length;
//   let string2Length = string2.length;
//   let arr = [];
//   arr.push(string1Length);
//   arr.push(string2Length);
//   return arr
// }

// console.log(getTwoLengths("Hank", "Hippopopalous"));
// => [4, 13]


// 5. Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

// const getMultipleLengths = (stringArr) => {
//   let stringLength;
//   let lengthOfStringsArr = [];
//     for (let i = 0; i < stringArr.length; i++) {
//       stringLength = stringArr[i].length;
//       lengthOfStringsArr[i] = stringLength;
//     }
//     return lengthOfStringsArr
//   }


// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
// => [5, 4, 2, 2, 4]


// 6. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned.

// const maxOfThree = (num1, num2, num3) => {
//   return Math.max(num1, num2, num3);
// }

// OR

// const maxOfThree = (num1, num2, num3) => {
//   let arr = [];
//   let max = 0;
//   arr.push(num1, num2, num3);
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   } return max
// }

// console.log(maxOfThree(6, 9, 1));
// => 9



// 7. Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

// const printLongestWord = (stringArray) => {

// // Step 1. Initiate a variable that will hold the length of the longest word AND a variable that will hold the string of the longest word
// let longestWordLength = 0;
// let longestWord;

// // Step 2. Create a FOR loop that will compare the length of each word in the array to the variable longestWordLength

// for (let i = 0; i < stringArray.length; i++) {
//   if (stringArray[i].length > longestWordLength) {
//     longestWordLength = stringArray[i].length;
//     longestWord = stringArray[i]
//   }
// }

// // Step 3. Return the longest word
// return longestWord

// }

// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// => "Peanutbutter"



// 8. Write a Javascript function called transmogrify. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.

// The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.

// For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.

// const transmogrify = (num1, num2, num3) => {
//   return (num1 * num2) ** num3
// }

// console.log(transmogrify(5, 3, 2));
// => 225





// Objects
// List and describe each individual piece of syntax that we use to construct an object. Don't leave anything out! The list is finite.
// {} curly braces define the object
// Inside of the curly braces, properties and their values are specified as a list of key/value paris
// Keys can be strings or identifiers
// Values can be any valid expression
// Each key and value is seperated by a colon :
// Commas (,) are used to seperate each key/value pair





// Me

// const me = {
//   name: 'Amanda',
//   age: 30,
//   email: 'amanda.molde@gmail.com',
// }

// console.log(me);

// console.log(me.name);

// me.age = 1000;

// console.log(me.age);

// me['place of residence'] = 'Longmont';

// console.log(me['place of residence']);





// Slimer

// const  monster  = {
//    name: "Slimer",
//    color: "greenish",
//    type: "plasm or ghost or something"
// }

// console.log(monster.name);

// monster.type = "creature";

// console.log(monster.type);

// monster.age = 6;

// console.log(monster);





// Ogres

// const adventurer = {
//   name: 'Link',
//   hitpoints: 100,
//   adventurerAttacks () {
//     ogre.hitpoints -= 10;
//   }
// }

// const ogre = {
//   hitpoints: 200,
//   ogreAttacks () {
//     adventurer.hitpoints -= 5;
//   }
// }

// while (adventurer.hitpoints > 0 && ogre.hitpoints > 0) {
//   let attack = Math.random();
//   if (attack < 0.5) {
//     console.log('The Ogre attacked you!');
//     ogre.ogreAttacks();
//     if (adventurer.hitpoints > 0) {
//       console.log(`You have ${adventurer.hitpoints} hitpoints left`);
//     } else {
//       console.log('GAME OVER');
//     }
//   } else {
//     console.log('You attacked the ogre!');
//     adventurer.adventurerAttacks();
//     if (ogre.hitpoints > 0) {
//       console.log(`Great job! The ogre only has ${ogre.hitpoints} hitpoints left!`);
//     } else {
//         console.log('Congratulations, you defeated the Ogre!');
//     }
//   }
// }





// EXTRA STUFF

// 1. Mama cat

// const cat1 = {
//   name: 'Mittens',
//   breed: 'calico',
//   age: 2,
// }

// console.log(cat1.age);

// console.log(cat1.breed);


// // 2. Papa cat

// const cat2 = {
//   name: 'Shadow',
//   breed: 'Bombay',
//   age: 4,
// }

// console.log(cat2);


// // 3. Combine cats!

// const combineCats = (mama, papa) => ({
//   name: mama.name + papa.name,
//   age: 1,
//   breed: mama.breed + "-" + papa.breed,
// })

// console.log(combineCats(cat1, cat2));


// // 4. Cat brain bender

// console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));

// let x  = combineCats(cat1, cat2)

// // Two Levels Deep

// console.log(combineCats(x,x));

// // Three Levels Deep

// console.log(combineCats(combineCats(x, x), combineCats(x, x)));
