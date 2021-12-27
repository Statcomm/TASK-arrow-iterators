/*************************************
 * Challenge 1: engineer(array)
 *
 * - Accepts an array
 * - Logs every element of the array with "eng" next to it
 * eg: engineer(["zainab","omar","zahraa"]) => eng.zainab, eng.omar, eng.zahraa
 ************************************/
const engineer = (array) => console.log(array.map(element => "eng."+element));
engineer (["zainab", "hamed"])

/*************************************
 * Challenge 2: toKWD(wallets)
 *
 * - Write a function named toKWD
 * - Accepts an array of wallets
 *   in USD
 * - Returns an array of wallets
 *   in KWD
 *
 * The conversion is:
 *   kwd = usd * 0.30
 ************************************/
const toKWD = (array) => array.map(element => element * 0.30);
console.log(toKWD([10, 20]))
/**************************************
 * Challenge 3: richestWallet(wallets,maxAmount)
 *
 * - Write a function named richestWallet
 * - Accepts an array of wallets
 * - Accepts a max amount
 * - Returns an array of wallets
 *   that exceed the maxAmount
 ***************************************/
const richestWallet = (array, maxAmount) => array.filter(Amount => Amount > maxAmount)

console.log(richestWallet([20, 30, 40, 50], 35))

/******************************************
 * Challenge 4: makeLiteralGrades(grades)
 *
 * - Write a function named makeLiteralGrades
 * - Accepts an array of grades as numbers
 * - Converts evrey grade to its currosponding
 * literal grade in the following scale
 * 90-100 : A
 * 80-90  : B
 * 70-80  : C
 * 60-70  : D
 * < 60   : F
 * Example: makeLiteralGrades([90, 70, 40]) should return ["A", "C", "F"]
 *******************************************/
const makeLiteralGrades = (array) => array.map(Element => 
(Element >= 90) ? "A": 
(Element >=80) ? "B" : 
(Element >=70) ? "C" :
(Element >=60) ? "D" : 
"F")
console.log(makeLiteralGrades([50, 60, 70, 80, 90, 100]))