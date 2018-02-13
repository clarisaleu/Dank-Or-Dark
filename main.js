//gets a random number between two bounds
function randomNumberFromRange(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
};


//for dank memes
var dankImage;
function loadImageDank() {
    if(document.getElementById("images") != null) {
    $("#images").empty();
    }
    var memeArray = ["https://www.reddit.com/r/Dank/.json", "https://www.reddit.com/r/dank_gifs/.json",
    "https://www.reddit.com/r/dank_meme/.json", "https://www.reddit.com/r/dankmemes/.json"];
    var randomMemeLink = randomNumberFromRange(0, memeArray.length);
    $.getJSON(memeArray[randomMemeLink], function (data) {
        var randomNumber = randomNumberFromRange(0, data.data.children.length);

        try {
            var imageUrl = data.data.children[randomNumber].data.url;
         }catch(e){
              //alert(e);//throws alert of error
              loadImageDank();
         }
        //alert(imageUrl);
        dankImage = imageUrl;
        if(dankImage.includes("jpg") || dankImage.includes("jpeg") || dankImage.includes("png") || dankImage.includes("gif")) {
        IsValidImageUrl(imageUrl,function(exists) {
            $('<img/>').attr('src', data.data.children[randomNumber].data.url)
                    .width(500)
                    .appendTo('#images');
            if(!exists){
                alert("hello, invalid type!");
            }

        });
        } else {
            loadImageDank();
        }
   });
};


//for dark memes BEWAREEEE
var darkImage;

function loadImageDark(){
    if(document.getElementById("images") != null) {
        $("#images").empty();
    }


    var memeArray = ["https://www.reddit.com/r/CoffeeWithJesus/.json", "https://www.reddit.com/r/dark_humor/.json",
    "https://www.reddit.com/r/Demotivational.json"];

   var randomMemeLink = randomNumberFromRange(0, memeArray.length);
    $.getJSON(memeArray[randomMemeLink], function (data) {
        var randomNumber = randomNumberFromRange(0, data.data.children.length);

        try {
            var imageUrl = data.data.children[randomNumber].data.url;
         }catch(e){
            //alert(e);//throws alert of error
            loadImageDark();
         }

        darkImage = imageUrl;

        if(darkImage.includes("jpg") || darkImage.includes("jpeg") || darkImage.includes("png") || darkImage.includes("gif")) {
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
            loadImageDark();
        }

    });
};

// for wholesome images
var wholesomeImage;

function loadImageWholesome(){
    if(document.getElementById("images") != null) {
        $("#images").empty();
    }


    var memeArray = ["https://www.reddit.com/r/Eyebleach/.json", "https://www.reddit.com/r/ShittyWholesomeMemes/.json",
    "https://www.reddit.com/r/wholesomebestof/.json", "https://www.reddit.com/r/wholesomedogmemes/.json", "https://www.reddit.com/r/wholesomemes/.json"];

   var randomMemeLink = randomNumberFromRange(0, memeArray.length);
    $.getJSON(memeArray[randomMemeLink], function (data) {
        var randomNumber = randomNumberFromRange(0, data.data.children.length);

        try {
            var imageUrl = data.data.children[randomNumber].data.url;
        } catch(e) {
            //alert(e);//throws alert of error
            loadImageWholesome();
        }

        wholesomeImage = imageUrl;

        if(wholesomeImage.includes("jpg") || wholesomeImage.includes("jpeg") || wholesomeImage.includes("png") ||
        wholesomeImage.includes("gif")) {
            IsValidImageUrl(imageUrl,function(exists) {
            while(exists.length == null || !exists) {
               alert("hello, invalid type!");
               loadImageWholesome();
            }
            $('<img/>').attr('src', data.data.children[randomNumber].data.url)
                        .width(500)
                        .appendTo('#images');

            });
        } else {
            loadImageWholesome();
        }

    });
};


//fix later doesnt return anything
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

//Reload
function reloadPG(){
    window.location.reload(true);
}

