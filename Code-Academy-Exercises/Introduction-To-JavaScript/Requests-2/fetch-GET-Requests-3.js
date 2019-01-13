// Information to reach API
const url = 'https://api.datamuse.com/words';
const queryParams = '?sl=';

// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;

  fetch(endpoint).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message)
  })
}

// Clears previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

submit.addEventListener('click', displaySuggestions);

/*
Create a const called url. Assign url to the following URL as a string:
https://api.datamuse.com/words

Below url, create another const and call it queryParams. Assign it a value of '?sl='
queryParams will be the start of your query string and will narrow your search to words that sounds like your word.

Inside the getSuggestions() function, create a const called wordQuery and assign it inputField.value.
You'll need wordQuery to store the value of what is being typed into the input field.
You will be working inside getSuggestions() for the remainder of this exercise.

Now it’s time to add a query string to the URL with all the necessary parameters.
Create another const called endpoint, assign it value of a string that is url, queryParams, and wordQuery concatenated in that order.

Call the fetch() function and pass in endpoint as an argument.

Chain a .then() method to the fetch() function. Pass it a success arrow callback function as an argument.
The callback function should take response as its single parameter.

Inside the success callback function, create a conditional statement that checks if the ok property of the response object evaluates to a truthy value.
If so, call the function renderJsonResponse() and pass in response as an argument. Then, run your code.
Then type in a word to and click the submit button to view the JSON that came back. The status of the promise return from fetch() will be resolved.
The code for renderJsonResponse() can be viewed at public/helperFunctions.js.

Delete renderJsonResponse(response) and replace it with return response.json().
By returning response.json(), the next function that is .then() chained to it will receive a Promise with JSON data.

Below the condition's code block, add this code to raise an exception if the request failed: throw new Error('Request failed!');

Separate the success callback function and the error callback function with a comma.
The error callback function will also be an arrow function that takes one parameter, networkError.
In the code block of the arrow function, log networkError.message to the console.
*/
