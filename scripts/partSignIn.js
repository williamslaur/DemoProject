$(document).ready(function(){

//retrieve data from jsonstore.io saved from main.js

    const user = await fetch('https://www.jsonstore.io/04c5db65a78544c553e1a355b6629239b8e39ec0d943a88cefb9efa8da71f1ae/users/1')
    .then(function(response) {
      return response.json();
    })


})