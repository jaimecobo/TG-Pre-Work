// Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jja=';

// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
// Code goes here
const getSuggestions = async () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;
  try {
    const response = await fetch(endpoint);
    if(response.ok){
      const jsonResponse = await response.json();
      renderResponse(jsonResponse);
    }
  } catch (error) {
    console.log(error);
  }
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
Under the comment "AJAX function", create a new arrow function called getSuggestions() using the async keyword.
You'll be coding inside the arrow function of const getSuggestions for the remainder of this exercise.

Inside the code block of the async arrow function, create a const variable named wordQuery and assign it inputField.value.

Create another const called endpoint, assign it value of a string that is url, queryParams, and wordQuery concatenated in that order.

Add a try statement with an empty code block. Outside the code block for try, add a catch(error) statement with a code block that logs error to the console.

Inside the try code block, using const, create a variable named response and assign it to await the result of calling fetch() with an argument of endpoint.

Below the variable response from the previous step, create a conditional statement that the checks if the ok property of the response evaluates to a truthy value.
Inside the code block of the conditional statement, await response.json() and save it to a variable called jsonResponse using the const keyword.

Call the function renderRawResponse() and pass in jsonResponse. Then, run the code.
In the response field, type in a word and click the submit button on the web page.
You should now see an array of objects that contain nouns that describe the word you typed in!
You can view the purpose of the renderRawResponse helper function at public/helperFunctions.js.

Now that you can see the body of response, you should clean it up to display on the webpage.
Delete renderRawResponse(jsonResponse) and replace it with renderResponse(jsonResponse). Run the code. Then type in another word and click the submit button.
Great, now you have an organized list of words and you finished your GET request!
You can view the purpose of renderResponse function at public/helperFunctions.js.
*/
