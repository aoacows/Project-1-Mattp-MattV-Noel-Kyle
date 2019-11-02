//$(document).ready(function(){
var firebaseConfig = {
    apiKey: "AIzaSyBg2MC6PXSZPhoIa02CtyufqR_cj4usSK4",
    authDomain: "mattsandkyle.firebaseapp.com",
    databaseURL: "https://mattsandkyle.firebaseio.com",
    projectId: "mattsandkyle",
    storageBucket: "mattsandkyle.appspot.com",
    messagingSenderId: "775261745446",
    appId: "1:775261745446:web:84b5c47f8524712a8811e7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  //api call for effects
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://strainapi.evanbusse.com/l8b30NU/searchdata/effects",
    "method": "GET",
    "headers": {
      "User-Agent": "PostmanRuntime/7.19.0",
      "Accept": "*/*",
      "Cache-Control": "no-cache",
      "Postman-Token": "90823252-3c31-4dbb-8efc-666c71de0a39,3381737b-4250-4573-82ec-f900f6b432de",
      "Host": "strainapi.evanbusse.com",
      "Accept-Encoding": "gzip, deflate",
      "Connection": "keep-alive",
      "cache-control": "no-cache"
    }
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });

//});

var database = firebase.database();


var item;

$("#searchButton").on("click", function() {
    event.preventDefault();
    // Storing and retreiving
    item = $("#searchInput").val().trim();
   
    // Pushing to database
    database.ref().push({
        item: item,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
    $("#searchInput").reset();

});

database.ref().on("child_added", function() {

});