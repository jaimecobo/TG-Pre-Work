// Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jjb=';
const additionalParams = '&topics=';

// Selecting page elements
const inputField = document.querySelector('#input');
const topicField = document.querySelector('#topic');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const topicQuery = topicField.value;
  const endpoint = `${url}${queryParams}${wordQuery}${additionalParams}${topicQuery}`;

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
A query string contains additional information to be sent with a request.
The Datamuse API allows us to retrieve more specific data with query strings attached to the request URL.
Wiki: query string
A query string is separated from the URL using a ? character. After ?,
you can then create a parameter which is a key value pair joined by a =. Examine the example below:
'https://api.datamuse.com/words?key=value'
If you want to add an additional parameter you will have to use the & character to separate your parameters. Like so:
'https://api.datamuse.com/words?key=value&anotherKey=anotherValue'
*/
