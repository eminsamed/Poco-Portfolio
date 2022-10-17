// Javascript program to find GCD (Greatest Common Divisor) of two numbers

// function gcd(a, b) {
//   let result = Math.min(a, b); // Find minimum of a nd b
//   while (result > 0) {
//     if (a % result == 0 && b % result == 0) {
//       break;
//     }
//     result--;
//   }
//   return result;
// }

// let a = 98;
// let b = 56;
// console.log("GCD of ", a, " and ", b, " is ", gcd(a, b));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// The steps:
//Write the divisors of positive integer "a"
//Write the divisors of positive integer "b"
//List the commom divisors of "a" and "b"
//Find the divisor which is the highest of both "a" and "b"

// function gcd(a, b) {
//   if (a == 0) return b;
//   if (b == 0) return a;

//   if (a == b) return a;

//   // a is greater
//   if (a > b) return gcd(a - b, b);
//   return gcd(a, b - a);
// }

// let a = 98;
// let b = 56;
// console.log("GCD of ", a, " and ", b, " is ", gcd(a, b));

/*
Sonuç, çıkarılan herhangi bir sayıya eşit olana kadar sonucu her seferinde ileriye taşıyan tekrar çıkarma işlemidir. 
Cevap 1'den büyükse EBOB vardır (1'in dışında). Cevap 1 ise, ortak bölen yoktur (1'den başka) ve bu nedenle her iki sayı da eş asaldır.
Yukarıdaki yaklaşım için sözde kod:

def gcd(a, b):
 if a == b:
 return a
 if a > b:
 gcd(a – b, b)
 else:
 gcd(a, b – a)

Bir noktada bir sayı diğerinin çarpanı olur, bu yüzden her ikisi de eşit olana kadar art arda çıkarmak yerine, 
diğerinin çarpanı olup olmadığını kontrol ederiz.

Örneğin, a=98 & b=56 a>b'yi varsayalım, bu nedenle a= a-b koyun ve b aynı kalır. Yani a=98-56=42 & b= 56 . b>a olduğundan, b%a==0 olup 
olmadığını kontrol ederiz. cevap hayır olduğu için daha ileri gidiyoruz. Şimdi b>a yani b=b-a ve a aynı kalıyor. 
Yani b= 56-42 = 14 & a= 42 . a>b olduğundan, a%b==0 olup olmadığını kontrol ederiz. Şimdi cevap evet.
Yani a ve b arasında daha küçük yazdırıyoruz H.C.F olarak. yani 42, 14'ün 3 katıdır, yani HCF 14'tür.

aynı şekilde a=36 & b=60 olduğunda, burada b>a yani b = 24 & a= 36 ama a%b!=0. Şimdi a>b yani a= 12 & b= 24 . 
ve b%a==0. a ve b arasında daha küçük olan 12, 36 ve 60'ın HCF'si olur.

yani iki sayinin farkini aliyoruz, kücük olan sayidan bu iki sayinin farkini cikariyoruz, sonuc bize ebob u veriyor. 
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Which number is bigger?
//Declare 2 variables, both numbers
//Compare which number is greater
//Log the output, e.g. "The greater number of 5 and 10 is 10."
//Add an output for the else statement, e.g. "The smaller number of 5 and 10 is 5."

// function compare(num1, num2) {
//   if (num1 > num2) {
//     return num1 + " is bigger";
//   } else {
//     return num2 + " is bigger";
//   }
// }
// let results = compare(5, 10);
// console.log(results);

//---------------------------------------------------------------------------------------------------------------
// The world translator
// Write a function named helloWorld that:
// Takes 1 argument, a language code (e.g. "es", "de", "en")
// Returns "Hello, World" for the given language, for at least 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

// ---------------------------------------------------------------------------------------------------------------
/*

Retirement calculator
Create a program that determines how many years you have left until retirement and the year you can retire. It should prompt for your current age and the age you want to retire and display the output as shown in the example that follows on the next slide.

What to do
List inputs, outputs, processes in a text file.
What are the constraints? Any edge case to consider? Note in your text file.

Write the steps of your algorithm in pseudo-code in a second text file.
Write the program in JavaScript. Find out how to get the current year from your computer.

Push all 3 files (1 js and 2 txt) to your Github account
-----------------------------------------------------------------------------------------------------------
Example:
What is your age? 25
At what age would you like to retire? 65
You have 40 years left until you can retire.
It's 2020, so you can retire in 2060.
 Your computer knows what the current year is. Figure out how to do that in JavaScript
*/

// To calculate age:

// let year_born = prompt("Please enter your date of birth:");

// function getAge(birthYear) {
//   let currentDate = new Date();
//   let currentYear = currentDate.getFullYear();
//   age = currentYear - birthYear;
//   return age;
// }
// calculatedAge = getAge(year_born);
// console.log("You are " + calculatedAge + " years old!");

// var ageSubmit = document.querySelector(".ageSubmit");
// var ageField = document.querySelector(".ageField");
// var response = document.querySelector(".response");

// var d = new Date();
// var t = d.getTime().toString();
// var year = d.getFullYear();
// var remain;
// var retyear;
// ---------------------------------------------------------------------------------------------------------------

// let userAge = prompt("Please enter your age:");

// function checkAge() {
//   if (userAge == 65) {
//     console.log("You can retire this year.");
//   } else if (userAge > 65) {
//     console.log("You could have retired already.");
//   } else if (userAge < 65) {
//     console.log(" You will retire after years.");
//   }
// }
// ---------------------------------------------------------------------------------------------------------------
// let userAge = prompt("Please enter your age:");

// function check() {
//   if (userAge < 18) {
//     console.log("You are not an adult");
//   } else {
//     console.log("You are an adult");
//   }
// }
// ---------------------------------------------------------------------------------------------------------------
