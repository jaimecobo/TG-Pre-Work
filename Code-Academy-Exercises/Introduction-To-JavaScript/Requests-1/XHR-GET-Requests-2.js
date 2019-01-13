const xhr = new XMLHttpRequest ();
const url = 'https://api-to-call.com/endpoint';
xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
	return xhr.response;
}
  xhr.open('GET', url);
  xhr.send();
}

/*
Create the XMLHttpRequest object using the new operator. Save this object in a const called xhr.
Note: While the code will work regardless of how you name your variables, it is a common practice to name this object xhr.

Save the following URL to a const called url. Make sure the URL is wrapped in quotes so that it is a string.
https://api-to-call.com/endpoint

Set the responseType property of the xhr object to equal 'json'.
JSON is JavaScript Object Notation, which is how the response is going to be formatted.

Set the xhr.onreadystatechange event handler equal to an anonymous arrow function. Leave the function empty.

In the code block of the function you created in the previous step, add this conditional statement:
if (xhr.readyState === XMLHttpRequest.DONE) {

}
The purpose of this conditional statement checks to see if the request has finished.

In the code block of the conditional statement, return the response property of xhr.

Below the function you created in the previous two steps, call the .open() method on the xhr object and pass it 'GET' and url as arguments.
.open() creates a new request and the arguments passed in determine the type and URL of the request.

On the following line, call the .send() method on the xhr object. Do not pass it any arguments.
*/
