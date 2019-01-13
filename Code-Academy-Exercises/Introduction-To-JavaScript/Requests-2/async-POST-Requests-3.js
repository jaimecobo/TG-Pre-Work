// information to reach API
const apiKey = '<Your API Key>';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
// Code goes here
const shortenUrl = async () => {
	const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  try {
    const response = await fetch(url, {
			method: 'POST',
      body: data,
      headers: {
        'Content-type': 'application/json',
				'apikey': apiKey
      }
    });
		if(response.ok){
      const jsonResponse = await response.json();
      renderResponse(jsonResponse);
    }
  } catch (error) {
    console.log(error);
  }
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);.

/*
Assign apiKey to your Rebrandly API key.

Under the comment "AJAX functions", create a new arrow function and assign it to a const shortenUrl() using the async keyword.

Inside the code block of the arrow function of shortenUrl create two consts:
One named urlToShorten and assign it inputField.value.
The other named data and assign it the value of calling JSON.stringify() and passing in {destination: urlToShorten}.
Please note, we will be working inside shortenUrl() for the remainder of the exercise.

Add a try statement and leave the code block empty for now. After the try code block, create a catch statement and pass in error.
In the code block of catch(error), log error to the console.

Inside the try code block, using const, create a variable named response and assign it to await the value of calling calling fetch().

In the fetch() call, pass in url as the first argument and an empty object as the second argument.
In that empty object you just created. It will have the following three properties:
method with a value of 'POST'
body with a value of data
headers with a value of the object below:
{
'Content-type': 'application/json',
'apikey': apiKey
}

Below the variable response from the previous step, create a conditional statement
that the checks if the ok property of response evaluates to a truthy value.

Inside the code block of the conditional statement, await response.json() and save it
to a variable called jsonResponse using the const keyword.

Call the function renderRawResponse() and pass in jsonResponse. Then, run the code.
In the response field, you can paste in a URL and click the shorten button.
You should now see an object containing all the information the Rebrandly API sent back!
You can view the purpose of the renderRawResponse() helper function at public/helperFunctions.js.

Now it’s time to clean up the response sent back.
Delete renderRawResponse(jsonResponse) and replace it with renderResponse(jsonResponse).
Run the code. Then paste in the URL again and click the shorten button.
Notice the formatted response.
Great job using Rebrandly to shorten your URL!
You can view the purpose of the renderRawResponse() helper function at public/helperFunctions.js.
*/
