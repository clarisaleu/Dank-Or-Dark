var dankBtn = document.querySelector("#dank");
    
var darkBtn = document.querySelector("#dark");

  var memeArray = ["https://www.reddit.com/r/dankmemes/.json", "https://www.reddit.com/r/Memes_Of_The_Dank/.json", "https://www.reddit.com/r/DNM_MEMES/.json"];
 var memeArray = ["https://www.reddit.com/r/Dark_memes/.json", "https://www.reddit.com/r/OffensiveMemes/.json", "https://www.reddit.com/r/ImGoingToHellForThis/.json"];
dankBtn.addEventListener("click",function loadImageDank()

    var randomMemeLink = randomNumberFromRange(0, memeArray.length);
$.getJSON(memeArray[randomMemeLink], function (data) {
var randomNumber = randomNumberFromRange(0, data.data.children.length);
$('<img/>').attr('src', data.data.children[randomNumber].data.url)
                    .width(500)
                    .appendTo('#images'); 
                        {
};

    
darkBtn.addEventListener("click",function loadImageDark()

var randomMemeLink = randomNumberFromRange(0, memeArray.length);
$.getJSON(memeArray[randomMemeLink], function (data) {
var randomNumber = randomNumberFromRange(0, data.data.children.length);
$('<img/>').attr('src', data.data.children[randomNumber].data.url)
                    .width(500)
                    .appendTo('#images');
                        {
};
// //Changes
// function loadImageDank(){
// var memeArray = ["https://www.reddit.com/r/dankmemes/.json", "https://www.reddit.com/r/Memes_Of_The_Dank/.json", "https://www.reddit.com/r/DNM_MEMES/.json"];
// var randomMemeLink = randomNumberFromRange(0, memeArray.length);
// $.getJSON(memeArray[randomMemeLink], function (data) {
// var randomNumber = randomNumberFromRange(0, data.data.children.length);
// $('<img/>').attr('src', data.data.children[randomNumber].data.url)
//                     .width(500)
//                     .appendTo('#images');
// });
// };


// function loadImageDark(){
// var memeArray = ["https://www.reddit.com/r/Dark_memes/.json", "https://www.reddit.com/r/OffensiveMemes/.json", "https://www.reddit.com/r/ImGoingToHellForThis/.json
// "];
// var randomMemeLink = randomNumberFromRange(0, memeArray.length);
// $.getJSON(memeArray[randomMemeLink], function (data) {
// var randomNumber = randomNumberFromRange(0, data.data.children.length);
// $('<img/>').attr('src', data.data.children[randomNumber].data.url)
//                     .width(500)
//                     .appendTo('#images');
// });
// };




function randomNumberFromRange(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
};


//Check Validity of URL
function IsValidImageUrl(url, callback) {
    var img = new Image();
    img.onerror = function () {
        callback(url, false);
    };
    img.onload = function () {
        callback(url, true);
    };
    img.src = url;
};
