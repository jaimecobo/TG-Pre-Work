// Information to reach API
const apiKey = 'f93fc8b125dc4ff19e7a372c3b622b91';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.onreadystatechange = () =>{
    if (xhr.readyState === XMLHttpRequest.DONE) {
  renderResponse(xhr.response);
}
  }
  xhr.open('POST', url);
  xhr.setRequestHeader('Content-type', 'application/json');
	xhr.setRequestHeader('apikey', apiKey);
  xhr.send(data);
}


// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);

/*
Copy your Rebrandly API Key, and assign it to the const apiKey at the top of your code.

Within the code block of shortenUrl(), create a const called urlToShorten, and save inputField.value to it. urlToShorten will now save the value of the input field
Note: for the remainder of this exercise's instructions we will be working inside the code block of shortenUrl()!

Create a const called data, and save the following code to it:
JSON.stringify({destination: urlToShorten});
We're including this information because the API expects to see an object with a key destination that has a value of a URL.

Create a new XMLHttpRequest object using the new operator, and save it to a const called xhr.

Set the responseType property of the xhr object to be 'json'.

Save an empty anonymous arrow function to the onreadystatechange event handler of the xhr object. This function will not take in any parameters.
Inside the anonymous function's code block, include the following code inside of its code block:
if (xhr.readyState === XMLHttpRequest.DONE) {
  renderRawResponse(xhr.response);
}
The renderRawResponse function can be viewed at public/helperFunctions.js.

Below the anonymous function you just created, call the .open() method on xhr, and pass it 'POST' and url as respective arguments.

To access the Rebrandly API, we need a header with two key-value pairs. In the header, you must include values for 'Content-type' and an 'apikey'.
To set the header, we have to include the following code below our .open() method.
xhr.setRequestHeader('Content-type', 'application/json');
xhr.setRequestHeader('apikey', apiKey);

On xhr, call the .send() method, and pass it data as an argument.

Enter this URL into the input field, and click the shorten button in the web page.
https://medium.com/@codecademy/breaking-the-coding-language-barrier-bf24652c3c60
Notice the object that came back!
Now replace renderRawResponse(xhr.response) with renderResponse(xhr.response). Run the code.
Paste the URL again and click "Shorten".
*/
