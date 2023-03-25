/* In the task-2 index.html, there is a p tag (with an id of count) that displays a count. Ensure the count displays 0 when the page loads and then, using setInterval, have it increment by 1 every second. */

/* Stop the above interval from incrementing after 12 seconds have passed using the clearInterval function. So 12 should be the last count displayed on the page. */

const count = document.querySelector('#count');
let countDisplay = 0;

function incrementCount() {
	countDisplay++;
	count.textContent = `${countDisplay}`;
}

setInterval(incrementCount, 1000);
