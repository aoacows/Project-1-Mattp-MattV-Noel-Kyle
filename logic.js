// var effectsOf = ["indica", "sativa", "hybrid"];
// var typeOf = ["happy", "sad", "negative", "positive", "energetic"];
// var queryURL;

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

var database = firebase.database();
var firstName;
var lastName;
var userName;
var city;
var state;
var zipCode;
// use this to push or add data
// database.ref().push($("#firstName")) 
// console.log($("#firstName"), database)

$("#submit").on("click", function() {
  event.preventDefault();
  // Storing and retreiving new train data
  firstName = $("#firstName").val().trim();
  console.log(firstName)
  lastName = $("#lastName").val().trim();
  console.log(lastName)
  userName = $("#userName").val().trim();
  console.log(userName)
  city = $("#city").val().trim();
  console.log(city)
  state = $("#state").val().trim();
  console.log(state)
  zipCode = $("#zipCode").val().trim();
  console.log(zipCode)

  // Pushing to database
  database.ref().push({
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      city: city,
      state: state,
      zipCode: zipCode,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
  });
  $('form')[0].reset();
});
 // 


database.ref().on("value", function(snapshot){
  var value = snapshot.val()
  
  // for(var key in value){
  //   var username = value[key].username
  //   //  console.log(key)
  //   // console.log(value[key])
  //   console.log(username)
  //   if (username === "buckbuckfire"){
  //     console.log("valid customer")
  //     // console.log(value[key])
  //   }
  // }

   console.log(value)
})
//api call for effects

//api call for Type
var strain2 = {
  "async": true,
  "crossDomain": true,
  "url": "https://strainapi.evanbusse.com/EHmvq2o/strains/search/race/RACE",
  "method": "GET",
  "headers": {
    "User-Agent": "PostmanRuntime/7.19.0",
    "Accept": "*/*",
    "Cache-Control": "no-cache",
    "Postman-Token": "8fd856fa-d4d6-4e04-85cb-16c70525ef5c,2735b45a-ef60-4dfb-8c5d-547456a6c392",
    "Host": "strainapi.evanbusse.com",
    "Accept-Encoding": "gzip, deflate",
    "Connection": "keep-alive",
    "cache-control": "no-cache"
  }
}

var strain3 = {
  "async": true,
  "crossDomain": true,
  "url": "https://strainapi.evanbusse.com/EHmvq2o/searchdata/effects",
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

// $.ajax(settings).done(function (response) {
//   console.log(response);


// });




// function giffer(queryURL) {
//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     }).then(function (response) {
//       console.log(response.data)
//       for (i = 0; i < response.data.length; i++) {
//         //console.log(response.data[i].images.fixed_width_small.url)
//         //console.log(response.data[0].images.fixed_width_small.url)
//         var gifUrl = response.data[i].images.fixed_width_small_still.url;

//        // [""0""].images.fixed_width_small_still
//         //console.log(gifUrl)
//         var gifImage = $("<img>");
//         gifImage.attr("src", gifUrl);
//         gifImage.attr("alt", "team");
//         $("#team-view").prepend(gifImage);
//       }
//     });