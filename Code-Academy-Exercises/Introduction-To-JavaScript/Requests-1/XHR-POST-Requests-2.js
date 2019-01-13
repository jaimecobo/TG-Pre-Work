const xhr = new XMLHttpRequest ();
const url = 'https://api-to-call.com/endpoint';
const data = JSON.stringify({id: '200'});
xhr.responseType = 'json';
xhr.onreadystatechange = () =>{
  if(xhr.readyState === XMLHttpRequest.DONE){
	return xhr.response;
}
  xhr.open('POST', url);
  xhr.send(data);
}

/*
Create a new XMLHttpRequest object using the new operator, and save it in a const called xhr.
The XMLHttpRequest object is used in JavaScript to interact with servers.

Next, save the following URL to a const called url. Make sure the URL is wrapped in quotes so that it is a string.
https://api-to-call.com/endpoint
The URL will direct the request to the correct server.

Create a new const called data, and save this line of code to it:
JSON.stringify({id: '200'});
JSON.stringify() will convert a value to a JSON string. By converting the value to a string, we can then send the data to a server.

Set the responseType property of the xhr object to be 'json'.

Set the xhr.onreadystatechange event handler equal to an anonymous arrow function. Leave the function empty until the next step.
.onreadystatechange will contain the event handler that will be called when xhr's state changes.

In the code block of the function you created in the previous step, add a conditional statement that checks to see if the readyState of xhr is equal to XMLHttpRequest.DONE.

In the code block of the conditional statement, return the response property of xhr. The response property will contain the data that we're getting back from the POST request.

Below the function you created in the previous two steps, call the .open() method on the xhr object and pass it 'POST' and url as arguments.
.open() creates a new request and the arguments passed in determine what type of request is being made and where it's being made to.

On the following line, call the .send() method on the xhr object and pass data as an argument.
.send() will send the request to the server.
*/
