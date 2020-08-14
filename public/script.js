// Always include at top of Javascript file
"use strict";
// UPLOAD IMAGE using a post request
// Called by the event listener that is waiting for a file to be chosen
var CurrentColor = "#e6e2cf";
var CurrentFont = "Indie Flower";
let person = { "color": "red", "message": "fdsfdfsf", "font": "Indie Flower", "picture": "/whatever", "randomString": "sfdjskdf"};
let url = "display.html?=";
let r = "fjdsf8";

function LinkOver(Link){
  
  // Adds shareable link
  
  document.getElementById("overlay").style.display = "block";
  document.getElementById("overlay").innerHTML = "https://nice-painted-ghoul.glitch.me/" + Link;
  closething();
}

document.getElementById("overlay").addEventListener("click", ChangeLocation);

function closething(){
  document.getElementById("close").innerHTML = "X";
  document.getElementById("close").style.display = "block";
}

function ChangeLocation(){
  location.href = "https://nice-painted-ghoul.glitch.me/" + url + r;
}

function ReplaceImage(){
  document.getElementById("choose").style.paddingTop = '20px';
  document.getElementById("choose").style.paddingBottom = '20px';
  document.getElementById("choose").style.display = 'block';
}

function codeAddress() {
  
  // Gets postcard from database
  
  let address = window.location.href;
  let addresspart = address.substring(address.length - 6, address.length);
  let sharepart = "/sharePostcard?Id=" + addresspart;

  fetch(sharepart)
  
  .then(function (response) { 
    return response.json(); 
  })

  .then(function (stuff){
    console.log(stuff);
  
  let stuff2 = JSON.stringify(stuff)  
  let part = stuff2.substring(1,stuff2.length - 1);
  let part2 = JSON.parse(part);
    
  document.getElementById("rightwords").innerHTML = part2.listItem;
  document.getElementById("rightwords").style.fontSize = "30px";
  document.getElementById("postcardarea").style.backgroundColor = part2.listAmount;
  document.getElementById("rightwords").style.fontFamily = part2.font;
  
  let newImage = document.getElementById("serverImage");
  newImage.src = part2.picture;
    
  }) 
  
}

function Indie(){
  document.getElementById("rightwords").style.fontFamily = 'Indie Flower';
  CurrentFont = 'Indie Flower';
}
function Dance(){
  document.getElementById("rightwords").style.fontFamily = 'Dancing Script';
  CurrentFont = 'Dancing Script';
}
function Long(){
  document.getElementById("rightwords").style.fontFamily = 'Long Cang';
  CurrentFont = 'Long Cang';
}
function Homemade(){
  document.getElementById("rightwords").style.fontFamily = 'Homemade Apple';
  CurrentFont = 'Homemade Apple';
}

function Color1(){
  document.getElementById("postcardarea").style.backgroundColor = '#e6e2cf';
  document.getElementById("color1").style.border = "thick solid #00000F";
  document.getElementById("color2").style.border = "none";
  document.getElementById("color3").style.border = "none";
  document.getElementById("color4").style.border = "none";
  document.getElementById("color5").style.border = "none";
  document.getElementById("color6").style.border = "none";
  document.getElementById("color7").style.border = "none";
  document.getElementById("color8").style.border = "none";
  document.getElementById("color9").style.border = "none";
  CurrentColor = '#e6e2cf';
}

function mouseOver1(){
  document.getElementById("postcardarea").style.backgroundColor = '#e6e2cf';
}

function Color2(){
  document.getElementById("postcardarea").style.backgroundColor = '#dbcaac';
  document.getElementById("color2").style.border = "thick solid #00000F";
  document.getElementById("color1").style.border = "none";
  document.getElementById("color3").style.border = "none";
  document.getElementById("color4").style.border = "none";
  document.getElementById("color5").style.border = "none";
  document.getElementById("color6").style.border = "none";
  document.getElementById("color7").style.border = "none";
  document.getElementById("color8").style.border = "none";
  document.getElementById("color9").style.border = "none";
  CurrentColor = '#dbcaac';
  
}

function mouseOver2(){
  document.getElementById("postcardarea").style.backgroundColor = '#dbcaac';
}

function Color3(){
  document.getElementById("postcardarea").style.backgroundColor = '#c9cbb3';
  document.getElementById("color3").style.border = "thick solid #00000F";
  document.getElementById("color1").style.border = "none";
  document.getElementById("color2").style.border = "none";
  document.getElementById("color4").style.border = "none";
  document.getElementById("color5").style.border = "none";
  document.getElementById("color6").style.border = "none";
  document.getElementById("color7").style.border = "none";
  document.getElementById("color8").style.border = "none";
  document.getElementById("color9").style.border = "none";
  CurrentColor = '#c9cbb3';
}

function mouseOver3(){
  document.getElementById("postcardarea").style.backgroundColor = '#c9cbb3';
}

function Color4(){
  document.getElementById("postcardarea").style.backgroundColor = '#bbc9ca';
  document.getElementById("color4").style.border = "thick solid #00000F";
  document.getElementById("color1").style.border = "none";
  document.getElementById("color2").style.border = "none";
  document.getElementById("color3").style.border = "none";
  document.getElementById("color5").style.border = "none";
  document.getElementById("color6").style.border = "none";
  document.getElementById("color7").style.border = "none";
  document.getElementById("color8").style.border = "none";
  document.getElementById("color9").style.border = "none";
  CurrentColor = '#bbc9ca';
}

function mouseOver4(){
  document.getElementById("postcardarea").style.backgroundColor = '#bbc9ca';
}

function Color5(){
  document.getElementById("postcardarea").style.backgroundColor = '#a6a5b5';
  document.getElementById("color5").style.border = "thick solid #00000F";
  document.getElementById("color1").style.border = "none";
  document.getElementById("color2").style.border = "none";
  document.getElementById("color4").style.border = "none";
  document.getElementById("color3").style.border = "none";
  document.getElementById("color6").style.border = "none";
  document.getElementById("color7").style.border = "none";
  document.getElementById("color8").style.border = "none";
  document.getElementById("color9").style.border = "none";
  CurrentColor = '#a6a5b5';
}

function mouseOver5(){
  document.getElementById("postcardarea").style.backgroundColor = '#a6a5b5';
}

function Color6(){
  document.getElementById("postcardarea").style.backgroundColor = '#b5a6ab';
  document.getElementById("color6").style.border = "thick solid #00000F";
  document.getElementById("color1").style.border = "none";
  document.getElementById("color2").style.border = "none";
  document.getElementById("color4").style.border = "none";
  document.getElementById("color5").style.border = "none";
  document.getElementById("color3").style.border = "none";
  document.getElementById("color7").style.border = "none";
  document.getElementById("color8").style.border = "none";
  document.getElementById("color9").style.border = "none";
  CurrentColor = '#b5a6ab';
}

function mouseOver6(){
  document.getElementById("postcardarea").style.backgroundColor = '#b5a6ab';
}

function Color7(){
  document.getElementById("postcardarea").style.backgroundColor = '#eccfcf';
  document.getElementById("color7").style.border = "thick solid #00000F";
  document.getElementById("color1").style.border = "none";
  document.getElementById("color2").style.border = "none";
  document.getElementById("color4").style.border = "none";
  document.getElementById("color5").style.border = "none";
  document.getElementById("color6").style.border = "none";
  document.getElementById("color3").style.border = "none";
  document.getElementById("color8").style.border = "none";
  document.getElementById("color9").style.border = "none";
  CurrentColor = '#eccfcf';
}

function mouseOver7(){
  document.getElementById("postcardarea").style.backgroundColor = '#eccfcf';
}

function Color8(){
  document.getElementById("postcardarea").style.backgroundColor = '#eceeeb';
  document.getElementById("color8").style.border = "thick solid #00000F";
  document.getElementById("color1").style.border = "none";
  document.getElementById("color2").style.border = "none";
  document.getElementById("color4").style.border = "none";
  document.getElementById("color5").style.border = "none";
  document.getElementById("color6").style.border = "none";
  document.getElementById("color7").style.border = "none";
  document.getElementById("color3").style.border = "none";
  document.getElementById("color9").style.border = "none";
  CurrentColor = '#eceeeb';
}

function mouseOver8(){
  document.getElementById("postcardarea").style.backgroundColor = '#eceeeb';
}

function Color9(){
  document.getElementById("postcardarea").style.backgroundColor = '#bab9b5';
  document.getElementById("color9").style.border = "thick solid #00000F";
  document.getElementById("color1").style.border = "none";
  document.getElementById("color2").style.border = "none";
  document.getElementById("color4").style.border = "none";
  document.getElementById("color5").style.border = "none";
  document.getElementById("color6").style.border = "none";
  document.getElementById("color7").style.border = "none";
  document.getElementById("color8").style.border = "none";
  document.getElementById("color3").style.border = "none";
  CurrentColor = '#bab9b5';

}

function mouseOver9(){
  document.getElementById("postcardarea").style.backgroundColor = '#bab9b5';
}

function mouseOut(){
  document.getElementById("postcardarea").style.backgroundColor = CurrentColor;
}

function uploadFile() {
  
    // get the file chosen by the file dialog control
    const selectedFile = document.getElementById('fileChooser').files[0];
    // store it in a FormData object
    const formData = new FormData();
    // name of field, the file itself, and its name
    formData.append('newImage',selectedFile, selectedFile.name);

    // build a browser-style HTTP request data structure
    const xhr = new XMLHttpRequest();
    // it will be a POST request, the URL will this page's URL+"/upload" 
    xhr.open("POST", "/upload", true);
  
    // callback function executed when the HTTP response comes back
    xhr.onloadend = function(e) {
        // Get the server's response body
        console.log(xhr.responseText);
        // now that the image is on the server, we can display it!
        let newImage = document.getElementById("serverImage");
        newImage.src = "../images/"+selectedFile.name;
        person.picture = newImage.src;
    }
  
    // actually send the request
    xhr.send(formData);
}

// Add event listener to the file input element
document.getElementById("fileChooser").addEventListener("change", uploadFile);

function uploadPage(){
  
  // Uploads to database when share button is clicked 
  
  person.color = CurrentColor;
  person.font = CurrentFont;
  person.message = document.getElementById("words").innerHTML;
  person.randomString = makeid();
  r = person.randomString;
  let ChangedURL = url + r;
  
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/sharePostcard", true); 
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  
  let Person = JSON.stringify(person);
  xhr.send(Person);
  
  LinkOver(ChangedURL);

}

document.getElementById("share").addEventListener("click", uploadPage);

function makeid() {
   let a = Math.random().toString(36).substring(7);
  
   if (a.length == 8){
     a = a.substring(0, a.length - 2);
   }
   if (a.length == 7){
     a = a.substring(0, a.length - 1);
   }
   if (a.length == 5){
     a = a + 'a';
   }
   if (a.length == 4){
     a = a + 'a' + 'a';
   }
   
   return a;
}



