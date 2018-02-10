//Changes
//actual function that loads images onto webpage
function loadImageDank(){
  var memeArray = ["https://www.reddit.com/r/dankmemes/.json", "https://www.reddit.com/r/Memes_Of_The_Dank/.json", "https://www.reddit.com/r/DNM_MEMES/.json"];
  var randomMemeLink = randomNumberFromRange(0, memeArray.length);
  $.getJSON(memeArray[randomMemeLink], function (data) {
  var randomNumber = randomNumberFromRange(0, data.data.children.length);
  $('<img/>').attr('src', data.data.children[randomNumber].data.url)
                    .width(500)
                    .appendTo('#images');
  });
}

//generates random number
function randomNumberFromRange(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

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
}
