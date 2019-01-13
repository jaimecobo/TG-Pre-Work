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
Assign apiKey to your Rebrandly API key as a string.
If you do not assign the correct key, you will not see the proper results in the steps afterwards.

Inside the code block of shortenUrl(), create a const named urlToShorten and assign it inputField.value.
urlToShorten will keep the value of what is being typed into the input field.
Please note, you will be working inside shortenUrl() for the remainder of this exercise.

Underneath urlToShorten, create another const named data, and assign it to the result of
calling the method JSON.stringify() with {destination: urlToShorten} as an argument.
The reason for creating data is to prepare the information needed to send in the body.

Below data, call the fetch() function. Pass it url as its first argument and an empty object as its second argument.

Now it’s time to add some properties to the empty object that you just created.
The first one property has a key named method and the value is 'POST'. 

In the same object, create another property. The key for this property is headers and the value will be another object.
Assign headers the value of another object listed below:
{
  'Content-type': 'application/json',
  'apikey': apiKey
}

In that same object that has the properties method and headers, add another property. The key is named body and the value will be data.
Setting up this information now will make chaining .then() in the next exercise much easier!
*/
