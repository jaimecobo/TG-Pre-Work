fetch('https://api-to-call.com/endpoint', {
  method: 'POST',
  body: JSON.stringify({id: "200"})
}).then(response => {
  if(response.ok){
	  return response.json();
  }
	throw new Error('Request failed!');
}, networkError => {
  console.log(networkError.message);
}).then(jsonResponse => {
  console.log(jsonResponse);
})

/*
Call the fetch() function, pass it the URL below as a string as its first argument, a
nd pass it an empty object ({}) as its second argument.
https://api-to-call.com/endpoint
We’re calling fetch() and providing an endpoint.
In the next step we’ll fill in the empty object with the necessary information.

The settings object you passed to the fetch() function will contain two properties:
method, with a value of 'POST', and body, with a value of JSON.stringify({id: '200'}).
This second argument determines that this request is a POST request and what information will be sent to the API.

Chain a .then() method to the fetch() function and pass it the success callback function as its first parameter.
Pass in response as an argument for the callback function. Leave the code block of the callback function empty for now.
The code inside .then() will execute when the promise returned from fetch() is resolved.

Inside the callback function's code block, check the ok property of the response object inside of a conditional statement.
In the code block of the conditional statement, return response.json().
When returned, this information will be passed on to the next .then() callback function.

Below the curly braces of the conditional statement, create a new error with this code:
throw new Error('Request failed!');
This error will be raised if we get back some status error.

Create the failure callback function. This function takes a single parameter, networkError.
Separate the first callback function from the second with a comma. This function is still inside of the .then() method.
In the code block of the function you just made, log networkError.message to the console.

Chain another .then() method to the end of the first .then() method.
In the new .then() method, create an arrow callback function that takes jsonResponse as its parameter.
Then in the code block return jsonResponse.
The purpose of this step is to view the JSON that was returned from the previous .then().
*/
