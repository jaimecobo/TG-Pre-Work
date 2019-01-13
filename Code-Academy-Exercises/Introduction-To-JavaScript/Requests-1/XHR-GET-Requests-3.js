// Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_rhy=';

// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;

  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse(xhr.response);
    }
  }

  xhr.open('GET', endpoint);
  xhr.send();
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);

/*
At the top of main.js, create a const named url and save to it the following URL (as a string):
https://api.datamuse.com/words?
You'll be using this URL to direct your request.

Underneath const url, create another const named queryParams and assign it to 'rel_rhy='
'rel_rhy=' is the start of a parameter for the query string. This parameter will narrow your search to words that rhyme.

In the function getSuggestions(), create a const named wordQuery and assign it to be inputField.value.
inputField.value grabs what is in the inputField and assigns it to the variable wordQuery.
You'll be working in getSuggestions() for the rest of the exercise.

Now create another const named endpoint, and assign equal to a string that concatenates url, queryParams, and wordQuery.
endpoint will store the value of the entire URL and query string.

You can now start on the XMLHttpRequest object. Declare a const named xhr and use the new operator to create the XMLHttpRequest object.

Set the responseType of xhr to 'json'.
When data is sent back, it will be in JSON format.

Assign an anonymous arrow function to the onreadystatechange event handler of xhr.

Include the following code inside the code block of the anonymous arrow function you just created:
if (xhr.readyState === XMLHttpRequest.DONE) {
  renderRawResponse(xhr.response)
}
The renderRawResponse() helper function can be viewed at public/helperFunctions.js.

Below the anonymous arrow function you just created (but still inside of getSuggestions()), call the .open() method on the XHR object and pass it 'GET' and endpoint as respective arguments. This method call will create a new request using the two arguments: 'GET' sets the method and url sets the destination.
Underneath .open(), call the .send() method on xhr and pass it no arguments. The .send() method will send the request to the server.
Then run your code.
Type in a word in the input field and click the submit button. If all went well, the response field in the browser will display the raw response from the API!

Now delete renderRawResponse(xhr.response) and replace it with renderResponse(xhr.response) and run your code.
Then type in a word in the input field and click the submit button.
*/
