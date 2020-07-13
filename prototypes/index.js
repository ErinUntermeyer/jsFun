/* eslint-disable */

const { kitties } = require('./datasets/kitties');
const { clubs } = require('./datasets/clubs');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { nationalParks } = require('./datasets/nationalParks');
const { books } = require('./datasets/books');
const { weather } = require('./datasets/weather');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');






// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangeKittyNames() {

    // Return an array of just the names of kitties who are orange e.g.
		// ['Tiger', 'Snickers']
		const result = kitties.filter(kitty => kitty.color === 'orange').reduce((orangeKitties, kitty) => orangeKitties.concat(kitty.name), [])
		return result;

    // Annotation:
		// I need to iterate over the kitties array of kitty objects. I can use filter to return an array of just kitty objects that have orange kitties in them. I then need to create a new array that I can push in just the kitty names and return those.
		// I ended up using the reduce method with orangeKitties as my accumulator, kitty as my currentValue and an empty array as my second parameter. Through each iteration, I used the concat method to make a single array of just kitty names and returned that.
  },

  sortByAge() {
    // Sort the kitties by their age

    const result = kitties.sort(function(a, b) {
			return b.age - a.age
		})
    return result;

    // Annotation:
		// I need to return an array of the same length. I need it sorted by the key age from oldest to youngest. I know that there is a method called sort that I will need to research to complete this. After researching sort, the method is called on an array and takes in one parameter, the compare function. The compare function takes in two parameters that are being compared, a & b.//If a is less than b, it returns -1 and thus sorts to an index lower than b
		//If a is greater than b, it returns 1, and thus sorts to an index higher than b
		//The syntax is array.sort(function(a,b) => a - b)
  },

  growUp() {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]

    const result = kitties.sort(function(a, b) {
			return b.age - a.age}).map(kitty => {
			kitty.age = kitty.age + 2
			return kitty;
		})
		return result;
		
		// Annotation:
		// I need to edit each element in the kitties array to add 2 years to the age property. To return an array of the same length after modifying it can be done using the map method. If I iterate over kitties using map, I can then reassign kitty.age to kitty.age + 2 and return the new array
		// After getting the results returned with the age increased by two, I realized the test also wants this list sorted from oldest to youngest so I added the sort method to sort the kitties first before using the map method to increase the age by 2.
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs() {
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g.
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
		// }


		let finalArray = []
		const result = answer = clubs.reduce((clubObjs, obj) => {
			obj.members.forEach(member => {
				if (!finalArray.includes(member)) {
					clubObjs[member] = [obj.club]
					finalArray.push(member)
				} else {
					clubObjs[member].push(obj.club)
				}
				return finalArray
			})
			return clubObjs
		}, {})
    return result;

		// Annotation:
		// Output needs to be an object with keys as members and values as arrays with club names in them. I can turn an array into an object using the reduce method.
		// Each element in clubs array I need to:
		// iterate over the members array
		// each element in members array I need to turn into a key and assign it to an array with the club in it.
		// next element in clubs array I need to check if the name in the members array has a key. if so, push the club into that array. if not, create a new key and assign it to an array with the club in it.
		// rinse and repeat
		// return the object
	
	}
}






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

		const result = mods.map(mod => {
			mod.studentsPerInstructor = mod.students / mod.instructors
			delete mod.students
			delete mod.instructors
			return mod
		})
    return result;

    // Annotation:
		// I need to return an array of the same length where each element is being modified, which can be done using map.
		// As I iterate over each element, I will need to do these things:
		// figure out students per instructor which will be done by dividing the number of students by the number of instructors
		// assign that new value to a key of studentsPerInstructor
		// delete the keys students and instructors
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

		const result = cakes.map(cake => {
			delete cake.filling
			delete cake.frosting
			delete cake.toppings
			cake.flavor = cake.cakeFlavor
			delete cake.cakeFlavor
			return cake
		});
    return result;

    // Annotation:
		// I need to return a modified array of the same length, which can be done using map.
		// In each iteration I need to:
		// delete the filling, frosting and toppings properties
		// modify the name cakeFlavor to just flavor
		// return the cake
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    const result = cakes.filter(cake => cake.inStock > 0);
    return result;

    // Annotation:
		// I need to iterate over the cakes array and return a modified array, which can be done using filter.
		// During each iteration I need to:
		// Determine is inStock is greater than 0. If so, filter it out.
		// Return the filtered array
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    const result = cakes.reduce((totalCakes, cake) => {
			return totalCakes + cake.inStock
		}, 0);
    return result;

    // Annotation:
		// I need to iterate over the cakes array and return a number, which can be done using the reduce method.
		// During each iteration, I need to then add the number of cakes to the accumulator value. After all iterations, return the accumulator to get total amount of cakes in stock.
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    const result = cakes.reduce((toppings, cake) => {
			cake.toppings.forEach(topping => {
				if (!toppings.includes(topping)) {
					toppings.push(topping)
				}
			})
			return toppings;
		}, []);
    return result;

    // Annotation:
		// I need to iterate over the cakes array of cake objects and return a single array of just toppings, which can be done using the reduce method.
		// The accumulator will be toppings and the current value will be cake (the first cake object in the cakes array) and the initial value will be an empty array.
		// During each iteration, I need to iterate over the toppings array, which can be done with forEach. I will set up a conditional to check if the toppings array does not have the topping in there (using includes), if so, push it into the toppings array.
		// Return toppings.
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }

    const result = cakes.reduce((toppings, cake) => {
			cake.toppings.forEach(topping => {
				if (!Object.keys(toppings).includes(topping)) {
					toppings[topping] =+ 1
				} else {
					toppings[topping]++
				}
			})
			return toppings;
		}, {})
    return result;

    // Annotation:
		// I need to return an object from an array, which can be done using the reduce method. The accumulator will be toppings, the currentValue will be cake and the initial value will be an empty object.
		// During each cake iteration I will need to iterate over the toppings array.
		// As I iterate over the toppings array, since I will need to convert each element into a key and assign a number to it, I can use forEach. I will need to set up a conditional to check if the key already exists, instead of making a new one, increment the number by 1.
		// Return toppings 
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

		const result = classrooms.filter(classObj => classObj.program === 'FE');
		return result;

    // Annotation:
		/*
		Start with an array of objects
		Output needs to be an array of objects filtered with only FE programs
		Can be done using filter
		For each iteration of class, locate program === 'FE' and return that object.

		*/
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    const result = classrooms.reduce((programCapacity, classObj) => {
			if (classObj.program === 'FE') {
				programCapacity.feCapacity += classObj.capacity;
			} else {
				programCapacity.beCapacity += classObj.capacity;
			}
			return programCapacity;
		}, {feCapacity: 0, beCapacity: 0});
    return result;

    // Annotation:
		/*
		Input is an array of objects
		Output needs to be an object:
			keys of feCapacity, beCapacity
			values the total capacity for each program
		This can be done using reduce
			accumulator is an programCapacity
			currentValue is classObj
			initial value is {feCapacity: 0, beCapacity: 0}
		For each iteration, if program is 'FE', add capacity to feCap
		If not, add capacity to beCap
		return programCapacity
		*/
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    const result = classrooms.sort((a, b) => {
			return a.capacity - b.capacity;
		});
    return result;

    // Annotation:
		/*
		Input is an array of objects
		Output is an array of objects of the same length sorted
		Can be done using sort
		For each iteration, the compare function will need to return a.capacity - b.capacity
		*/
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence() {
    // return an array of all book titles that are not horror or true crime. Eg:

    //  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
    //   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
    //   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
    //   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
    //   'Catch-22', 'Treasure Island']


    const result = books.reduce((filteredBooks, book) => {
			if (book.genre !== 'Horror' && book.genre !== 'True Crime') {
				filteredBooks.push(book.title);
			};
			return filteredBooks;
		}, []);
    return result;

    // Annotation:
		/*
		Input is an array of book objects
		Output needs to be a single array of only book titles that are not horror or true crime
		Can be done using reduce
		accumulator is filteredBooks
		currentValue is book
		initial value is []
		For each iteration if genre !== Horror or True Crime push the title of that book into filteredBooks
		return filteredBooks
		*/

  },
  getNewBooks() {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Inlucde the title and the year Eg:

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    const result = books.reduce((newBooks, book) => {
			if (book.published > 1989 && book.published < 2010) {
				newBooks.push({title: book.title, year: book.published})
			}
			return newBooks;
		}, []);
    return result;

    // Annotation:
		/*
		Input is an array of book objects
		Output needs to be array of book objects published between 1990-2009 with title and year published as key value pairs
		Can be done using reduce
		accumulator is newBooks
		currentValue is book
		initial value is []
		for each iteration, if book.published > 1989 && < 2010
		push in new object to the newBooks array
		return newBooks
		*/

  }

};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps() {
    // return an array of all the average temperatures. Eg:
    // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  findSunnySpots() {
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestHumidity() {
    // Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment

  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList() {
    /// Return an object containing the names of which parks I need to visit
    // and the ones I have already visited eg:
    // {
    //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
    //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    //}

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  getParkInEachState() {
    // Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]


    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  getParkActivities() {
    // Return an array of all the activities I can do
    // in a National Park. Make sure to exclude duplicates. eg:
    // [ 'hiking',
    //   'shoeshoing',
    //   'camping',
    //   'fishing',
    //   'boating',
    //   'watching wildlife',
    //   'cross-country skiing',
    //   'swimming',
    //   'bird watching',
    //   'canyoneering',
    //   'backpacking',
    //   'rock climbing' ]

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the stars that appear in any of the constellations
    // listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' }
    // ]

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.

    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]


    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts
};
