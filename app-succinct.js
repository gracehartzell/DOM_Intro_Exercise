document.addEventListener("DOMContentLoaded", function() {
    const greeting = document.getElementById('greeting');
    greeting.textContent = "Hello, World!";

    const drinks = document.getElementsByTagName('li');
        for (const drink of drinks) {
            drink.style.backgroundColor = "yellow";
            drink.addEventListener ('click', (ev) => {
                if (ev.target === drink[0]) {
                    imgGreeting.src = './images/milk.jpeg'
                }
            })
        }

    const imgGreeting = document.createElement('img');
        imgGreeting.src = "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif";
        greeting.appendChild(imgGreeting);
  
        
// FOOD IMAGES, order: milk honey water wine beer
// event delegation: can use ONE event listener for the entire ul
// this: the object that's calling the function
    const unorderedList = document.getElementsByTagName('ul')[0];
    const foodImg = document.getElementsByTagName('img')[1];

    unorderedList.addEventListener('click', (ev) => {
      if (ev.target.tagName === 'LI') {
        const listItems = unorderedList.children;
        for (const item of listItems) {
          item.setAttribute('class', '');
        }
        ev.target.setAttribute('class', 'selected')
        //FOOD IMAGE REPLACE:
        foodImg.setAttribute('src', `./images/${ev.target.textContent}.jpeg`)
      }
    });


    const todoList = document.createElement('ul');
        todoList.setAttribute('class','todo-items')
        document.body.appendChild(todoList);

    
    const items = ['make coffee','eat donut','change diapers','drive to work'];
        items.forEach(function(element) {
            let items = document.createElement('li');
            todoList.appendChild(items);
            items.textContent += element;
        })

    const list = document.getElementsByTagName('li');
        for (const item of list) {
            item.addEventListener('click', (ev) => {
                for (const item of list) {
                    item.removeAttribute('class');
                }
                item.setAttribute('class', 'selected');
            })
        }
    
// GHOSTING
    const ghost = document.getElementById('ghosting');
        ghost.addEventListener('mouseover', (ev) => {
            ev.target.style.visibility = 'hidden'; // keeps the space where the square was instead of moving everything else up
        });

// ORANGE DIV WIDTH DOUBLER
    const orangeResize = document.getElementById('resize');
        orangeResize.addEventListener('mouseover', (ev) => {
            ev.target.style.width = '400px';
        })
        orangeResize.addEventListener('mouseleave', (ev) => {
            ev.target.style.width = '200px';
        })

// RESET BUTTON 
    const resetBtn = document.getElementById('reset');
        resetBtn.addEventListener('click', (ev) => {
            for (const item of list) {
                item.removeAttribute('class');
            }
            foodImg.setAttribute('src', `./images/panic.jpeg`)
        })

// KONAMI CODE BS
        const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a", "b", "a", "Control", "Meta"]; // control, command
        let recordedKeys = [];
        let idx = 0;
    // NUMBER KEYS ALERT
    // number codes are between 48 and 57
    function numberPress (ev) {
        if (ev.keyCode >= 48 && ev.keyCode <= 57) {
          alert("I HATE NUMBERZZZ!");
        }
        // create empty array to record
        //konamiCode so as to not introduce a ton of event listeners (because we definitely didn't already...) 
        // trigger on array up
        if (ev.key === konamiCode[idx]) {
            recordedKeys.push(konamiCode[idx]);
            console.log(recordedKeys);
            idx++;
            if (recordedKeys.join('') === konamiCode.join('') ){
                alert('FINE')
            }
        } else { // if you hit another key while completing the sequence, you lose your place and have to restart
            recordedKeys = [];
            idx = 0;
        }
      }
      document.addEventListener("keydown", numberPress);


      /* Konami (up, up, down, down, left, right, left, right, b, a, b, a, selct, start)
       */

})
