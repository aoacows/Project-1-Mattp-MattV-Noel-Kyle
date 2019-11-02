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