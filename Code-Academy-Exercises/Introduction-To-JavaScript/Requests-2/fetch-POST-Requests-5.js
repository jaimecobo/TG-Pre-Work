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
  }).then(jsonResponse => {
    renderResponse(jsonResponse);
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
Chain a .then() method to the end of the original .then() method.

Pass in an anonymous arrow function as an argument for .then().
This callback function will take jsonResponse as its single parameter.
Inside the callback function, call renderRawResponse() and pass in jsonResponse.
Run the code.
Put in any URL in the text field, and then click the shorten button on the webpage.
Make sure you include the entire link, including 'http://' or 'https://'.
You’ll see the JSON of the response sent back from the API.
The renderRawResponse() helper function can be viewed at public/helperFunctions.js.


Delete renderRawResponse(jsonResponse). In its place, call renderResponse() and passing in jsonResponse.
Run the code.
Put a URL into the text field again and then click the Shorten button on the web page. Notice the difference?
The renderResponse() helper function can be viewed at public/helperFunctions.js.
*/
