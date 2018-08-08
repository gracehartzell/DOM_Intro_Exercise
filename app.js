// THIS WAS MY EXPERIMENTAL, DAY ONE, UNFILTERED CODE. PLEASE VISIT APP-SUCCINCT FOR FULL SOLUTIONS. 
// it's still ugly though...


document.addEventListener("DOMContentLoaded", function() {
    // 1. Change the #greeting from "Hello, There!" to "Hello, World!"
    const greeting = document.getElementById('greeting');
    greeting.textContent = "Hello, World!";

    // 2. Set the background color of each `<li>` to `yellow`
    const drinks = document.getElementsByTagName('li');

    for (const drink of drinks) {
        drink.style.backgroundColor = "yellow";
    }

    // 3. Create an image tag, set its src attribute to link and append to the #greeting div

    const imgGreeting = document.createElement('img');
    imgGreeting.src = "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif";
    greeting.appendChild(imgGreeting);


    // 4. Create and add a ul element to the end of the body with a class of "todo-items"
    const todoList = document.createElement('ul');
    todoList.setAttribute('class','todo-items')
    document.body.appendChild(todoList);

    // 5. Go through array and create li element for each item, e.g. <li>make coffee</li>
    const items = ['make coffee','eat donut','change diapers','drive to work'];
    
    items.forEach(function(element) {
        const li = document.createElement('li');
        todoList.appendChild(li);
        li.innerHTML += element;
      });




      
})
