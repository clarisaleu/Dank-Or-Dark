
function randomNumberFromRange(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
};


//Changes
var dankImage;
function loadImageDank() {
    if(document.getElementById("images") != null) {
    $("#images").empty();
    }
    var memeArray = ["https://www.reddit.com/r/dankmemes/.json", "https://www.reddit.com/r/Memes_Of_The_Dank/.json", "https://www.reddit.com/r/DNM_MEMES/.json"];
    var randomMemeLink = randomNumberFromRange(0, memeArray.length);
    $.getJSON(memeArray[randomMemeLink], function (data) {
        var randomNumber = randomNumberFromRange(0, data.data.children.length);
        var imageUrl = data.data.children[randomNumber].data.url;
        dankImage = imageUrl;
        if(dankImage.includes("jpg") || dankImage.includes("jpeg") || dankImage.includes("png")) {
        IsValidImageUrl(imageUrl,function(exists) {
            $('<img/>').attr('src', data.data.children[randomNumber].data.url)
                    .width(500)
                    .appendTo('#images');
            if(!exists){
                alert("hello, invalid type!");
            }
        });
        } else {
            alert(dankImage);
            alert("this was removed");
        }
   });
};

var darkImage;

function loadImageDark(){
    if(document.getElementById("images") != null) {
        $("#images").empty();
    }


    var memeArray = ["https://www.reddit.com/r/Dark_memes/.json", "https://www.reddit.com/r/OffensiveMemes/.json", "https://www.reddit.com/r/ImGoingToHellForThis/.json"];

    var randomMemeLink = randomNumberFromRange(0, memeArray.length);
    $.getJSON(memeArray[randomMemeLink], function (data) {
        var randomNumber = randomNumberFromRange(0, data.data.children.length);
        var imageUrl = data.data.children[randomNumber].data.url;
        darkImage = imageUrl;

        if(darkImage.includes("jpg") || darkImage.includes("jpeg") || darkImage.includes("png")) {
            IsValidImageUrl(imageUrl,function(exists) {
            while(exists.length == null || !exists) {
               alert("hello, invalid type!");
               loadImageDark();
            }
            $('<img/>').attr('src', data.data.children[randomNumber].data.url)
                        .width(500)
                        .appendTo('#images');

            });
        } else {
            alert(darkImage);
            alert("this was removed");
        }

    });
};


function getURL(){
    return image; 
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
};

