/* On your HTML page, you will see an input field and an 'Add To List' button. Declare a new variable, importantThings, as an empty array. Using JavaScript, configure the website so that when you write something in the input field and click the Add To List button, a new item is added to the importantThings array. */

/* As well as adding the item to the in-memory array, now display each added item in an li element within the ordered list. */

/* Add a new label and input field element to your index.html file. This input field represents the priority value of your important thing, and should take in a number. Refactor your code so that, when you click your Add To List button, you add an object to your array, rather than a string value. For example: let importantThings = [{text: 'telephone mother', priority: 1}]. */

/* Add a new button to your site called Order List. When the button is clicked, reorder your list by priority. */

// tasks array
const importantThings = [];
// new task input
const newTask = document.querySelector('#important-thing');
// priority of task, highest to lowest
const priority = document.querySelector('#priority');
// add to list button
const addToList = document.querySelector('#add-to-list');
// list of tasks
const toDoList = document.querySelector('#to-do-list');

// add a new object to tasks array with its text and priority as properties
addToList.addEventListener('click', () => {
	importantThings.push({
		text: `${newTask.value}`,
		priority: `${priority.value}`,
	});

	// display tasks text and priority as a list item
	toDoList.insertAdjacentHTML(
		'beforeend',
		`<li>Task: ${newTask.value} <br> Priority: ${priority.value}</li>`
	);
});

// order list button
const orderList = document.querySelector('#order-list');

// add event listener to sort items
orderList.addEventListener('click', () => {
	// empty to-do list
	toDoList.innerHTML = '';
	// sort tasks array from highest to lowest priority
	const sortedList = [...importantThings].sort(
		(a, b) => b.priority - a.priority
	);
	console.log({ sortedList });
	// loop through sorted list and display tasks in order
	for (let i = 0; i < sortedList.length; i++) {
		toDoList.insertAdjacentHTML(
			'beforeend',
			`<li>Task: ${sortedList[i].text} <br> Priority: ${sortedList[i].priority}</li>`
		);
	}
});

// add button to clear list
const clearList = document.querySelector('#clear-list');
clearList.addEventListener('click', () => {
	toDoList.innerHTML = '';
	importantThings.length = 0;
});
