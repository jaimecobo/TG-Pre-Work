// Information to reach API
const apiKey = '<Your API Key>';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten})

	fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'apikey': apiKey
    },
    body: data
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message)
  })
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);

/*
Chain a .then() method to the end of the fetch() function you wrote in the previous exercise.
As its first argument, pass it an arrow function as a callback that takes response as its single parameter.

Inside the block of the function you made in Step 1, use a conditional statement to check the value of the ok property of response.
If it evaluates to a truthy value, call renderJsonResponse() and pass in response.
Run the code.
Now, if you post a URL, you should see the object that was sent back!
renderJsonResponse() is a helper function found in public/helperFunctions.js.

Great, now that you see the raw object, you will need to pass the JSON to the next .then().
Delete renderJsonResponse(response) and replace it with return response.json()

Below the curly braces of the conditional statement, throw a new Error in case response.ok is falsy.
The message the error should raise is ‘Request failed!’.

Outside of the code block from the first callback function you wrote, add another arrow callback function that takes networkError as a single parameter.
console.log() the networkError.message inside of the callback function you just wrote.
By adding this second callback, you’re safeguarding yourself in the rare event that the network returns an error!
*/
