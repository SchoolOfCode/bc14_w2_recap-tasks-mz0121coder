const celebs = [
	'David Beckham',
	'Cher',
	'Madonna',
	'Tom Petty',
	'Cristiano Ronaldo',
	'Whoopi Goldberg',
	'Samuel L Jackson',
	'Angelina Jolie',
	'Richard Osman',
	'Emma Thompson',
];

/* Write a function called makeLegend, which takes in a name (string) as its only argument. The function should return a new string which includes the name plus the words ' is now a legend.'.

For example, if the function was called with the name 'Chris', it should return the string 'Chris is now a legend.'. */

function makeLegend(name) {
	if (typeof name === 'string') {
		return `${name} is now a legend`;
	} else {
		return `A legend requires a string`;
	}
}

/* Using the makeLegend function, the celebs array and a for loop, create a new array which includes ' is now a legend.' for each celebrity. Save this new array to the variable legendaryCelebs. */

/* For example, if the celebs array was ["Chris", "Liz", "Alice"] to begin with, then legendaryCelebs would contain ["Chris is now a legend.", "Liz is now a legend.", "Alice is now a legend."] */

const legendaryCelebs = [];
for (let i = 0; i < celebs.length; i++) {
	legendaryCelebs.push(makeLegend(celebs[i]));
}

/* Use another for loop to produce a new array of all of the celebrity names which start with a vowel, and store that new array in a new variable called vowelCelebs. */

/* For example, if the celebs array was ["Chris", "Liz", "Alice"] to begin with, then vowelCelebs should contain ["Alice"] (as Alice is the only name that begins with a vowel). */

const vowelCelebs = [];
for (let i = 0; i < celebs.length; i++) {
	if (celebs[i][0].match(/[aeiou]/i)) {
		vowelCelebs.push(celebs[i]);
	}
}
