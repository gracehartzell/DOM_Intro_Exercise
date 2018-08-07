document.addEventListener("DOMContentLoaded", function() {
    //Change the greeting from "Hello, There!" to "Hello, World!"
    console.log("Hello, World!");

    //Set the background color of each `<li>` to `yellow`
    const listColor = document.getElementsByTagName('li');

    for (let i = 0; i < listColor.length; i++) {
        listColor[i].style.backgroundColor = "yellow"
    }

    //Create an image tag, set its src attribute to link and append to the #greeting div

    let imgGreeting = document.createElement('img');imgGreeting.src = "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif";
    let greet = document.getElementById('greeting');
    greet.appendChild(imgGreeting);


    // Create and add a ul element to the end of the body with a class of "todo-items"
    let newList = document.createElement('ul');
    document.body.appendChild(newList);


    // Go through array and create li element for each item, e.g. <li>make coffee</li>
    let array = ['make coffee','eat donut','change diapers','drive to work'];
    
    array.forEach(function(element) {
        let li = document.createElement('li');
        newList.appendChild(li);
        li.innerHTML += element;
      });





})
