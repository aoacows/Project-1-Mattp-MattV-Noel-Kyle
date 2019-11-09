// var effectsOf = ["indica", "sativa", "hybrid"];
// var typeOf = ["happy", "sad", "negative", "positive", "energetic"];
// var queryURL;

var effectsOf = ["indica", "sativa", "hybrid"];
var typeOf = ["happy", "sad", "negative", "positive", "energetic"];

var strainFla = [
  {name:"Earthy",
  image: './images/button_img/earthy.jpg'
}, 
  //{name:"Chemical",
  //image: './images/button_img/marijane_filler.jpg'},
  {name:"Pine",
  image: './images/button_img/pines.png'},
  {name:"Spicy/Herbal",
  image: './images/button_img/spicy.png' },
  {name:"Pungent",
  image: './images/button_img/pungent.jpg'},
  {name:"Pepper",
  image:'./images/button_img/pepper.png'},
  {name:"Flowery",
  image: './images/button_img/flower-clipart-11.jpg'},
  {name:"Citrus",
  image:'./images/button_img/citrus.jpg'}, 
  {name:"Orange",
  image:'./images/button_img/orange.png'}, 
  {name:"Sweet",
  image:'./images/button_img/sweet.png'}, 
  {name:"Skunk",
  image:'./images/button_img/skunk.gif'}, 
  {name:"Grape",
  image:'./images/button_img/grape.png'}, 
  {name:"Minty",
  image: './images/button_img/mint.jpg'},
  {name:"Woody",
  image: './images/button_img/woody.jps'},
  {name:"Cheese",
  image:'./images/button_img/cheese-clipart-transparent-14.png'}, 
  {name:"Diesel",
  image:'./images/button_img/diesel.png'},
  {name:"Tropical",
  image: './images/button_img/tropical.jpg'}, 
  {name:"Grapefruit",
  image:'./images/button_img/grapefruit.png'},
  {name:"Nutty",
  image: './images/button_img/nutty.png'}, 
  {name:"Lemon",
  image: './images/button_img/lemon-clip-art-24.jpg'},
  {name:"Berry",
  image: './images/button_img/strawberry-clipart-transparent-background-25.png'},
  {name:"Blueberry",
  image:'./images/button_img/blueberry.png'},
  {name:"Ammonia",
  image:'./images/button_img/marijane_filler.jpg'},
  {name:"Apple",
  image:'./images/button_img/apple.png'},
  {name:"Rose",
  image:'./images/button_img/roses-clipart-8.jpg'},
  {name:"Butter",
  image:'./images/button_img/butter.gif'}, 
  {name:"Honey",
  image:'./images/button_img/honey.png'},
  {name:"Tea",
  image:'./images/button_img/green-tea-transparent-17.png'},
  {name:"Lime",
  image:'./images/button_img/lime.jpg'},
  {name:"Lavender",
  image:'./images/button_img/lavenders.jpg'},
  {name:"Strawberry",
  image:'./images/button_img/strawberry.jpg'},
  {name:"Mint",
  image:'./images/button_img/mint.jpg'}, 
  {name:"Chestnut",
  image: './images/button_img/chestnut.png'}, 
  {name:"Tree Fruit",
  image: './images/button_img/marijane_filler.jpg'},
  {name:"Pear",
  image: './images/button_img/pear.png'},
  {name:"Apricot",
  image: './images/button_img/marijane_filler.jpg'}, 
  {name:"Peach",
  image: './images/button_img/peach-clip-art-9.png'},
  {name:"Blue Cheese",
  image: './images/button_img/marijane_filler.jpg'},
  {name:"Menthol",
  image: './images/button_img/marijane_filler.jpg'},
  {name:"Coffee",
  image: './images/button_img/coffee.png'},
  {name:"Tar",
  image:'./images/button_img/marijane_filler.jpg'},
  {name:"Mango",
  image: './images/button_img/mango-clipart-8.jpg'}, 
  {name:"Pineapple",
  image:'./images/button_img/pineapple.png'}, 
  {name:"Sage",
  image: './images/button_img/marijane_filler.jpg'}, 
  {name:"Vanilla",
  image: './images/button_img/vanilla.jpg'},
  {name:"Plum",
  image:'./images/button_img/marijane_filler.jpg'},
  {name:"Violet",
  image:'./images/button_img/marijane_filler.jpg'},
  {name:"Tobacco",
  image: './images/button_img/tobacco.jpg'} ];



var queryURL;
// ff03ee4c6aa7134c413df4b85793177086e8b5ab


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


function checkUser() {
  firebase.database().ref().orderByChild("userName").equalTo(userName).on("value", function (snapshot) {

    if (snapshot.exists()) {
      console.log("exists");
      return true;
    } else {
      console.log("doesn't exist");
      return false;

    }

  });
}
// use this to push or add data
// database.ref().push($("#firstName")) 
// console.log($("#firstName"), database)

$("#submit").on("click", function () {
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

  checkUser().then(function (response) {
    if (response === true) {
      console.log("work")
    } else {
      console.log("dontwork")
    }
  })





});





// // Pushing to database
//  database.ref().push({
//     firstName: firstName,
//     lastName: lastName,
//     userName: userName,
//     city: city,
//     state: state,
//     zipCode: zipCode,
//     dateAdded: firebase.database.ServerValue.TIMESTAMP
// });

// });

// 


// database.ref().on("value", function(snapshot){
// var value = snapshot.val()

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

//  console.log(value)
// })
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

  
  $.ajax(strain3).done(function (response) {
    console.log(response);
  });
 // strain2, strain3
//});
function renderButtons() {
    $("#buton-button").empty();
    for (i = 0; i < strainFla.length; i++){
        var newButton = $("<button>");
        var newButtonImg = $("<img>");
        newButton.addClass("strainFla col-5 btn btn-toggle");
        newButton.attr("data-name", strainFla[i].name);
        newButtonImg.attr("src",strainFla[i].image);
        newButtonImg.attr("id","button-img")
        newButton.append(newButtonImg);
        $("#buton-button").append(newButton);
        console.log(strainFla[i]);
    }
}   
renderButtons();


// $.ajax(settings).done(function (response) {
//   console.log(response);


//  });

// });
// function renderButtons() {
//     $("#buton-button").empty();
//     for (i = 0; i < strainFla.length; i++){
//         var newButton = $("<button>");
//         newButton.addClass("strainFlaBtn col-5 btn btn-secondary");
//         newButton.attr("data-name", strainFla[i]);
//         newButton.html(strainFla[i]);
//         $("#buton-button").append(newButton);
//         console.log(strainFla[i]);
//     }
// }   
// renderButtons();



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