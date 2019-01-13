const getData = async () => {
  try {
    const response = await fetch('https://api-to-call.com/endpoint');
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error('Request failed!');
  } catch (error) {
    console.log(error);
  }
}

/*
Create an arrow function using the async keyword and save it to a const getData.
The async keyword will ensure that the function returns a promise.

In the code block for getData, we should add a try statement with an empty code block.
Below the try statement's code block, add a catch(error) statement.
The code in the try block will send a request and handle the response.
The catch statement will then take care of an error if it is thrown.

Inside the catch code block, log error to the console.
Since this exercise is an example, we’re using console.log() to view the error.
Generally, developers create a more sophisticated way of handling the error, like redirecting their users to another page, but logging is fine for us at the moment.

Now we have to consider what to do inside of the code block of the try statement.
We should start by using the await keyword before calling fetch(). Pass in the following URL, as a string, to the function as its first argument:
https://api-to-call.com/endpoint
We’ll have to save the returned promise in a variable called response using the const keyword.
response will save the the response of endpoint once that information has been sent back.

Under response, create a conditional statement that checks if the ok property of the response object evaluates to a truthy value.

Inside the code block of the conditional statement, await the resolution of calling the .json() method on response.
Save the returned object to a variable called jsonResponse using the keyword const.
Since .json() is an asynchronous method we have to await until the promise status is resolved.
Then we store the value to know what data the JSON holds.

Return jsonResponse directly below the code you wrote in the previous step.
Normally, we'd want to use the information from jsonResponse in a different manner.
In this exercise, we're practicing how to write the boilerplate code.

Below the conditional statement, throw a new Error. The message the error should raise is ‘Request failed!’.
*/
