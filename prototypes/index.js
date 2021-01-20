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
		const result = kitties.reduce((orangeKitties, kitty) => {
			if (kitty.color === 'orange') {
				orangeKitties.push(kitty.name)
			}
			return orangeKitties
		}, [])
		return result;

		// Annotation:
		/*
		Input is an array of objects
		Output needs to be an array of strings
		Need to iterate over the kitties array
		for each kitty, check the color
		If the color is orange, push the name of the kitty into a new array
		return the new array
		*/

  },

  sortByAge() {
    // Sort the kitties by their age

    const result = kitties.sort((a, b) => b.age - a.age)
    return result;

		// Annotation:
		/*
		Input is an array of objects
		Output is an array of object, same length, sorted by age
		Need to use the sort method by age
		*/

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
		const sortedKitties = kitties.sort((a, b) => b.age - a.age)
    const result = sortedKitties.map(kitty => {
			kitty.age = kitty.age + 2
			return kitty
		})
		return result;
		
		// Annotation:
		/*
		Input is an array of objects
		Output is an array of objects, same length, age modified
		Need to iterate over kitties
		For each kitty, add 2 to the year
		return kitties array
		*/

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

		const result = clubs.reduce((clubsByName, club) => {
			club.members.forEach(member => {
				if (!clubsByName[member]) {
					clubsByName[member] = []
				}
				clubsByName[member].push(club.club)
			})
			return clubsByName
		}, {})
    return result;

		// Annotation:
		/*
		input is array of objects
		output is an object with keys of names and values of arrays of strings
		need to iterate over the clubs array
		for each club, iterate over the members array
		if the key of the name doesn't exist, make it, make value an array
		push the club into the the array
		if the key of the name does exist, push the club into the array
		return the object at the end
		*/

	
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
		/*
		input is an array of objects
		output is an array of objects, rearranged
		need to iterate over the mods array
		for each mod, keep the key of mod
		create a key studentsPerInstructor and set the value of students / instructors
		see what that returns

		*/

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

		const result = cakes.reduce((inStockFlavors, cake) => {
			let inStockFlavor = {}
			inStockFlavor.flavor = cake.cakeFlavor
			inStockFlavor.inStock = cake.inStock
			inStockFlavors.push(inStockFlavor)
			return inStockFlavors
		}, [])
    return result;

		// Annotation:
		/*
		input is an array of objects
		output needs to be an array of objects modified
		need to iterate over the cakes array
		can use reduce to create a new array of objects
		for each cake
		make key flavor and assign to cakeFlavor
		make hey inStock and assign to inStock
		return the new array
		*/

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

    const result = cakes.filter(cake => cake.inStock > 0)
    return result;

		// Annotation:
		/*
		input is an array of objects
		output is an array of objects that are in stock
		for each cake, check is inStock is greater than 0
		if so, return that cake

		*/

  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    const result = cakes.reduce((total, cake) => {
			total = total + cake.inStock
			return total
		}, 0)
    return result;

		// Annotation:
		/*
		input is an array of objects
		output is a number
		can use reduce to do this
		initialize a counter
		iterate over cakes
		for each cake, add the inStock number to the counter
		return the counter
		*/

  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    const result = cakes.reduce((allToppings, cake) => {
			cake.toppings.forEach(topping => {
				if (!allToppings.includes(topping)) {
					allToppings.push(topping)
				}
			})
			return allToppings
		}, [])
    return result;

		// Annotation:
		/*
		input is an array of objects
		output is an array of strings
		create an empty array
		need to iterate over the cakes array
		for each cake, iterate over the topping array
		for each topping, if it's not already in the allToppings array, add it
		return allToppings array
		*/

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

    const result = cakes.reduce((toppingCounter, cake) => {
			cake.toppings.forEach(topping => {
				if (!toppingCounter[topping]) {
					toppingCounter[topping] = 0
				}
				toppingCounter[topping]++
			})
			return toppingCounter
		}, {})
    return result;

		// Annotation:
		/*
		input is an array of objects
		output needs to be an object with keys of toppings assigned to the count
		need to create an object
		iterate over cakes array
		for each cake, iterator over toppings array
		if key doesn't exist, make the key
		increase counter by 1
		return object
		*/

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

		const result = classrooms.filter(classroom => classroom.program === 'FE')
		return result;

		// Annotation:
		/*
		Input is an array of objects
		Output is a filtered array of objects
		Need to iterate over array
		for each iteration, if program is FE, return true
		*/

  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    const result = classrooms.reduce((totalCap, classroom) => {
			if (classroom.program === 'FE') {
				totalCap.feCapacity += classroom.capacity
			} else {
				totalCap.beCapacity += classroom.capacity
			}
			return totalCap
		}, {feCapacity: 0, beCapacity: 0})
    return result;

		// Annotation:
		/*
		Input is an array of objects
		Output is an object
		Iterate over classrooms
		for each classroom, if program is FE, add capacity to feCapacity, same for BE.
		return object
		can use reduce
		accumulator is totalCap, curVal is classroom, iniVal is object with keys of feCap and beCap
		*/
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    const result = classrooms.sort((a, b) => a.capacity - b.capacity)
    return result;

    // Annotation:
		/*
		Input is an array of objects
		Output is a sorted array of objects
		use the sort function
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


    const result = books.reduce((notHorrorOrCrime, book) => {
			if (book.genre !== 'Horror' && book.genre !== 'True Crime') {
				notHorrorOrCrime.push(book.title)
			}
			return notHorrorOrCrime
		}, [])
    return result;

    // Annotation:
		/*
		Input is an array of objects
		Output is an array of strings
		For each iteration, if genre is NOT horror or true crime,
		push title into an array
		return the array
		*/


  },
  getNewBooks() {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Include the title and the year Eg:

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    const result = books.reduce((newBooks, book) => {
			let newBook = {}
			if (book.published > 1989 && book.published < 2010) {
				newBook.title = book.title
				newBook.year = book.published
				newBooks.push(newBook)
			}
			return newBooks
		}, [])
    return result;

    // Annotation:
		/*
		Input is an array of objects
		Output is a modified array of objects
		Iterate over books
		for each iteration, if published is greater than 1989 and less than 2010
		create an object with the title and year
		push object into array
		return array 
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

    const result = weather.map(city => {
			let avgTemp = (city.temperature.high + city.temperature.low) / 2
			return avgTemp
		})
    return result;

    // Annotation:
		/*
		Input is an array of objects
		Output is an array of numbers, same length
		Need to iterate over weather array
		Add temp.high & low, divide by 2
		return that number
		*/

  },

  findSunnySpots() {
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]
		const result = []
    weather.forEach(city => {
			if (city.type === 'sunny' || city.type === 'mostly sunny') {
				result.push(`${city.location} is ${city.type}.`)
			}
		})
    return result;

	},
		// Annotation:
		/*
		Input is an array of objects
		Output is an array of strings
		iterate over weather array
		if location is sunny or mostly sunny
		push string into array
		return array
		*/


  findHighestHumidity() {
    // Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }

    const result = weather.sort((a, b) => b.humidity - a.humidity)[0]
    return result;

    // Annotation:
		/*
		Input is an array of objects
		Output is a single object
		Need to sort the objects by humidity and return the first one only
		*/

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

    const result = nationalParks.reduce((parkPlans, park) => {
			park.visited ?
				parkPlans.parksVisited.push(park.name) :
				parkPlans.parksToVisit.push(park.name)
			return parkPlans
		}, {parksToVisit: [], parksVisited: []})
    return result;

    // Annotation:
		/*
		Input is an array of objects
		Output is an object
		iterate over natparks array
		if visited is true, push park name into array for parksVisited, else push park name into array for parksToVisit
		return object
		can be done with reduce
		*/

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

		const result = []
		nationalParks.forEach(park => {
			park.activities.forEach(activity => {
				if (!result.includes(activity)) {
					result.push(activity)
				}
			})
		})
    return result;

    // Annotation:
		/*
		Input is an array of objects
		Output is an array of strings
		need to iterate over natparks
		for each park, need to iterate over activities
		if allActivities array doesnt include activity, push
		return allActivities
		*/

	},
	
	getParkInEachState() {
		// Return an array of objects where the key is the state and the value is its National Park
		// eg: [ { Colorado: 'Rocky Mountain' },
		// { Wyoming: 'Yellowstone' },
		// { Montana: 'Glacier' },
		// { Maine: 'Acadia' },
		// { Utah: 'Zion' },
		// { Florida: 'Everglades' } ]

		let result = nationalParks.map(park => {
			return {[park.location]: park.name}
		})
		return result;

		// Annotation:
		/*
		Input is an array of objects
		Output is an array of modified objects
		iterate over natParks
		for each park, return object with key as park.loc and value as park.name
		*/

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

    const result = breweries.reduce((totalBeers, brewery) => {
			totalBeers += brewery.beers.length
			return totalBeers
		}, 0)
    return result;

    // Annotation:
		/*
		Input is an array of objects
		Output is a single number
		iterate over breweries
		for each brewery, add beers.length to counter
		return counter
		*/

  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    const result = breweries.map(brewery => {
			return {name: brewery.name, beerCount: brewery.beers.length}
		})
    return result;

    // Annotation:
		/*
		Input is an array of objects
		Output is and array of modified objects
		iterate over breweries
		for each brewery, return an object with name as name and beer count as beers.length
		*/

  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

		const allBeers = []
		breweries.forEach(brewery => {
			allBeers.push(...brewery.beers)
		})
		let sortedBeers = allBeers.sort((a, b) => b.abv - a.abv)
		let result = sortedBeers[0]

    return result;

    // Annotation:
		/*
		Input is an array of objects
		Output is a single object, the one with the highest ABV
		iterate over breweries
		for each brewery, push all beers into a single array
		sort that array by ABV
		return the first item in that array
		*/

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

		const result = instructors.map(instructor => {
			return {
				name: instructor.name,
				studentCount: cohorts.find(cohort => cohort.module === instructor.module).studentCount
			}
		})
    return result;

    // Annotation:
		/*
		Input is two arrays of objects
		Output is an array of objects, same length at instructors array
		Need to iterate over instructors
		return an object, first key/value is name
		for second key, need to find the matching module from cohorts and return the student count
		*/

  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    const result = cohorts.reduce((studentsPer, cohort) => {
			let totalTeachers = instructors.filter(instructor => instructor.module === cohort.module).length
			studentsPer[`cohort${cohort.cohort}`] = cohort.studentCount / totalTeachers
			return studentsPer
		}, {})
    return result;

    // Annotation:
		/*
		Input is two arrays of objects
		Output is a single object
		need to know how many teachers per module
		need to know how many students per module
		totalStudents / totalTeachers - studentsPer
		reduce over cohorts 
		filter instructors by module, get length, assign to teachers
		do division
		return object
		*/

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

    const result = instructors.reduce((teacherModules, teacher) => {
			teacherModules[teacher.name] = []
			cohorts.forEach(cohort => {
				cohort.curriculum.forEach(subject => {
					if (teacher.teaches.includes(subject) && !teacherModules[teacher.name].includes(cohort.module)) {
						teacherModules[teacher.name].push(cohort.module)
					}
				})
			})
			return teacherModules
		}, {})
    return result;

    // Annotation:
		/*
		Input is two arrays of objects
		Output is a single object
		iterator over instructors
		for each instructor, iterate over cohorts
		for each cohort, iterate over curriculum
		for each subject, if the array for that teacher does not already include the module and the subject is in their teaches array, push the module number into the teachers array
		return the object
		*/


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

    const result = cohorts.reduce((curriculumTeachers, cohort) => {
			cohort.curriculum.forEach(subject => {
				if (!curriculumTeachers[subject]) {
					curriculumTeachers[subject] = []
				}
				instructors.forEach(instructor => {
					if (instructor.teaches.includes(subject) &&
							!curriculumTeachers[subject].includes(instructor.name)) {
						curriculumTeachers[subject].push(instructor.name)
					}
				})
			})
			return curriculumTeachers
		}, {})
    return result;

    // Annotation:
		/*
		Input is two arrays of objects
		Output is a single object
		reduce
		acc is curriculumTeachers
		curVal is cohort
		iniVal {}

		iterate over cohorts
		for each cohort, iterate over curriculum
		for each subject, if there's not a key, make one, assign to empty array
		iterate over instructors
		for each instructor
		if teaches includes subject, push instructor name into array with matching key
		return object
		*/

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
		let bossKeys = Object.keys(bosses)
		let bossNames = bossKeys.map(boss => bosses[boss].name)
		
		const result = bossNames.map(boss => {
			let totalLoyalty = 0
			sidekicks.forEach(sidekick => {
				if (boss === sidekick.boss) {
					totalLoyalty += sidekick.loyaltyToBoss
				}
			})
			return {bossName: boss, sidekickLoyalty: totalLoyalty}
		})
    return result;

    // Annotation:
		/*
		Input is an object and an array of objects
		Output is an array of objects
		first I need to make the object complete before I push into array

		get the keys of the object for bosses
		use the keys to iterate over and each key.name assign to variable
		now we have bossNames array with each boss

		iterate over bossNames
		for each boss
		return object with bossName: boss

		to get sidekickLoyalty
		iterate over sidekicks
		for each sidekick
		if boss === sidekick.boss
		add loyaltyToBoss fo sidekickLoyalty number

		return that object
		*/

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
		const constellationNames = Object.keys(constellations)
		const result = []
		stars.forEach(star => {
			constellationNames.forEach(name => {
				if (constellations[name].stars.includes(star.name)) {
					result.push(star)
				}
			})
		})
    return result;

    // Annotation:
		/*
		Input is an object and an array of objects
		Output is an array of objects
		get the constellation keys, assign to constellations

		iterate over stars
		for each star iterate over constellationNames
		for each constellation, see if constellation.stars includes star. name
		if so, push into array

		may need to check if star already exists in array
		*/

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

    const result = stars.reduce((starsByColor, star) => {
			if (!starsByColor[star.color]) {
				starsByColor[star.color] = []
			}
			starsByColor[star.color].push(star)
			return starsByColor
		}, {})
    return result;

    // Annotation:
		/*
		Input is array of objects
		Output is a single object
		iterate over stars
		build an object starsByColor
		if starsByColor[star.color] doesn't exist, make it, assign to empty array
		push star into starsByColor[star.color] array
		return starsByColor
		*/

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
		/*
		I don't understand what are the brightest stars?
		*/
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: characters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    const result = characters.reduce((totalDamage, character) => {
			character.weapons.forEach(weapon => {
				totalDamage += weapons[weapon].damage
			})
			return totalDamage
		}, 0)
    return result;

    // Annotation:
		/*
		Input is an array of objects and an object
		Output is a number
		iterate over characters
		for each character, iterate over weapons
		for each weapon, find that in the weapons array
		add the damage to total damage
		return total damage
		*/

  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    const result = characters.map(character => {
			totalDamage = 0
			totalRange = 0
			character.weapons.forEach(weapon => {
				totalDamage += weapons[weapon].damage
				totalRange += weapons[weapon].range
			})
			return {[character.name]: {damage: totalDamage, range: totalRange}}
		})
    return result;

    // Annotation:
		/*
		Input is an array of objects and an object
		Output is an array of objects, same length of characters
		iterate over characters array
		for each character, need to create an object
		key is character name
		value is an object with keys damage and range
		to get damage & range:
		iterate over weapons array
		target weapon in weapons object
		add damage and range to character object
		return new character object
		*/

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

    const result = movies.reduce((awesomeDinos, movie) => {
			let counter = 0
			movie.dinos.forEach(dino => {
				if (dinosaurs[dino].isAwesome) {
					counter = counter + 1
				}
			})
			awesomeDinos[movie.title] = counter
			return awesomeDinos
		}, {})
    return result;

    // Annotation:
		/*
		Input is dino object, humans object, movies array of objects
		Output is a single object
		need movie title
		need number of awesome dinos
		need to build an object
		key is movie title
		value is totalAwesomeDinos
		need to iterate over movies array
		for each movie, iterate over dinos array
		if dino is awesome, increment counter
		assign counter to value of key
		return new object
		*/

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

    const result = movies.reduce((movieDirectors, movie) => {
			if (!movieDirectors[movie.director]) {
				movieDirectors[movie.director] = {}
			}
			let totalAge = 0
			movie.cast.forEach(human => {
				totalAge = totalAge + movie.yearReleased - humans[human].yearBorn
			})
			movieDirectors[movie.director][movie.title] = Math.floor(totalAge / movie.cast.length)
			return movieDirectors
		}, {})
    return result;

    // Annotation:
		/*
		Input is dino object, humans object, movies array of objects
		Output is an object
		build an object with keys of director names
		iterate over movies array
		for each movie, check if exists, if not, make one, assign to object

		now I have a directors object
		need to create keys of the movies that director directed
		iterate over movies array
		find the matching key to director
		make a key of movie title, assign to 0 for now

		to get the average age of the cast for that movie
		iterate over movies
		for each movie, iterate over cast
		for each cast member, use humans object to get yearBorn, subtract from yearReleased, add to total age
		divide total age by case.length
		assign this number to the movie key

		refactor into the first reduce
		*/

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

		const allActors = []
		movies.forEach(movie => {
			movie.cast.forEach(actor => {
				if (!allActors.includes(actor)) {
					allActors.push(actor)
				}
			})
		})
		const uncastActors = Object.keys(humans).filter(actor => !allActors.includes(actor))
		const result = uncastActors.map(uncastActor => {
			return {
				name: uncastActor,
				nationality: humans[uncastActor].nationality,
				imdbStarMeterRating: humans[uncastActor].imdbStarMeterRating
			}
		})
		const sorted = result.sort((a, b) => {
			if (a.nationality < b.nationality) {
				return -1
			}
			if (a.nationality > b.nationality) {
				return 1
			}
		})
    return sorted;

    // Annotation:
		/*
		Input is dino object, humans object, movies array of objects
		Output is an array of objects
		Need to iterate over movies array
		for each movie, iterate over cast array
		if allActors does not yet have that name, push it in
		once allActors has been created, check against humans

		iterate over allActors
		if humans[actor] does not exist, push actors name into uncastActors
		iterate over uncastActors using map to return an object formatted correctly
		sort them by nationality using the sort function
		*/

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

		const allActors = []
		movies.forEach(movie => {
			movie.cast.forEach(actor => {
				if (!allActors.includes(actor)) {
					allActors.push(actor)
				}
			})
		})
    const result = allActors.map(actor => {
			let actorAges = {name: actor, ages: []}
			movies.forEach(movie => {
				if (movie.cast.includes(actor)) {
					let age = movie.yearReleased - humans[actor].yearBorn
					actorAges.ages.push(age)
				}
			})
			return actorAges
		})
    return result;

		// Annotation:
		/*
		Input is dino object, humans object, movies array of objects
		Output is an array of objects

		can use a portion of the function about to make an array of all cast actors
		once we have cast actors, can iterate over that array using a map to return a modified object

		for each actor, iterate over movies
		for each movie, if movie.cast includes actor, get age
		take yearReleased minus yearBorn, push that into ages array

		return object
		*/

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
