for (let i = 0; i < 100; i++) {
  //console.log(i);

  //For those who are divisible by 5 and not by 7:
  if (i % 5 == 0 && i % 7 != 0) {
    console.log("Power");
  }

  //For those who are divisible by 7 and not by 5:
  if (i % 7 == 0 && i % 5 != 0) {
    console.log("Coders");
  }

  //For those not divisible by 5 or 7:
  if (i % 5 != 0 && i % 7 != 0) {
    console.log(i);
  }

  //For those divisible by both numbers:
  if (i % 5 == 0 && i % 7 == 0) {
    console.log("Powercoders");
  }
}

/* I used a for loop to print the numbers 1 to 100 to the screen. 
Our loop starts from 0 and goes up to 100 by increasing one by one. 
Then I printed "Power" to the console for numbers that are divisible by 5 and not 7, 
and "Coders" for numbers that are divisible by 7 and not divisible by 5. 
I printed the numbers that are not divisible by both numbers as normal. 
And I printed "Powercoders" for those that are divisible by both. */
