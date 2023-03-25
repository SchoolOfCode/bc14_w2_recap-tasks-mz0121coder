/* For this task, you'll be using the Cat API to get image URLs. */

/* Using fetch, get a random cat image URL using the API URL: https://api.thecatapi.com/v1/images/search */

async function getImage() {
	const response = await fetch(`https://api.thecatapi.com/v1/images/search`);
	const data = await response.json();

	/* Once you have retrieved your image URL, display the image on the page using the img element provided (with id of cat-here). A different picture should be displayed every time you reload the page. */

	/* find url of random image */
	console.log(data[0].url);
	/* set url as src of img element */
	const catImage = document.querySelector('#cat-here');
	catImage.src = data[0].url;
}

/* Using JavaScript, create a button element and add it to the page. Add an event listener to the button so that, when you click the button, a new image is displayed. */
const imageBtn = document.querySelector('#image-btn');
imageBtn.addEventListener('click', getImage);
