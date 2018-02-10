var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/starbucks_1.jpg') {
      myImage.setAttribute ('src','images/starbucks_2.jpg');
    } else {
      myImage.setAttribute ('src','images/starbucks_1.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  if (myName !== null) {
  localStorage.setItem('name', myName);
  myHeading.innerHTML  = 'Starbucks is cool, ' + myName;}
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML  = 'Starbucks is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
