//Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio,
//and a String representing the rating as its arguments, and sets the respective class properties to these values.
class Movie {
    constructor(title, studio, rating) {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  }
  let myMovie = new Movie("Jailer", "Rajini", "8.5");
  console.log(myMovie.title);
  console.log(myMovie.studio);
  console.log(myMovie.rating);
  
  //The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
  class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  }
  let myMovie = new Movie("Lal Salaam", "Rajini");
  console.log(myMovie.rating);
  //write a method get PG, which takes an array of base type Moviw as it argument, andreturns new array of only those movies in the input
  //array with a rating of "PG".You may assume the input array is full of Movie instances. The returned array need not be full.
  
  //Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”,
  //and the rating “PG­13”
  let myMovie = new Movie("Casino Royale", "Eon Productions", "PG-13");
  console.log(myMovie);
  
  //Write a “person” class to hold all the details.
  class Person {
    constructor(name, age, address, email) {
      this.name = name;
      this.age = age;
      this.address = address;
      this.email = email;
    }
    getDetails() {
      return `Name: ${this.name}, Age: ${this.age}, Address: ${this.address}, Email: ${this.email}`;
    }
  }
  let myPerson = new Person(
    "Jameel",
    31,
    "no-6,Vivekanandar street, dubai main road",
    "jameel.webdev@gmail.com"
  );
  console.log(myPerson.getDetails());
  
  //write a class to calculate the uber price.
  class UberPrice {
    constructor(distance, time) {
      this.distance = distance;
      this.time = time;
    }
    calculatePrice() {
      let baseFare = 2.5;
      let perMileRate = 1.5;
      let perMinuteRate = 0.2;
      let distanceFare = this.distance * perMileRate;
      let timeFare = this.time * perMinuteRate;
      let totalFare = baseFare + distanceFare + timeFare;
      return totalFare.toFixed(2);
    }
  }
  