    
    var listOfButtons = document.getElementsByTagName('button');        
    var classesOfButtons = listOfButtons.classList;

    window.onload = function() {
        toggleGameWrapper();
    }

    function deleteButtons() {        
        // Checking if there are buttons to delete
        if (listOfButtons.length !== 0) {
            // Looping over all the buttons in the array.
            for (var i = listOfButtons.length; i > 0; i--) {
                if (listOfButtons[i])
                    // Removing the buttons from the html document. 
                    listOfButtons[i].remove();
            }
            // Somehow it always leaves one button in the array so we make sure to delete it here.
            if (listOfButtons[0])
                listOfButtons[0].remove();
        }
    }

    function createButtons(level) {
        deleteButtons();

        var buttons = db[level].buttons;
        var container = document.getElementById('container');

        // Looping over the button array
        for (var j = 0; j < buttons.length; j++) {
            // Creating a new button each time the loop repeats.
            var button = document.createElement('button');

            var classes = buttons[j].classes;
            // Looping over the classes array
            for (var i = 0; i < classes.length; i++)
                // Adding the classes to the button. 
                button.classList.add(classes[i]);

            // Adding some content to the button itself.
            button.appendChild(document.createTextNode(buttons[j].content));
            // Adding an onclick attribute to the button so I can manage that with js
            button.setAttribute('onclick', 'setScene(event)');
            // Placing this button in it's parent element.
            container.appendChild(button);
        }
    }

    function createScene(index) {
        document.getElementById('game_wrapper').style.backgroundImage = "url(" + db[index].background + ")";        
        document.getElementById('description').innerHTML = db[index].description;
        document.getElementById('question').innerHTML = db[index].question;
        createButtons(index);
    }

    function getClickedButton(target, param1, param2) {
        if (target.classList[0] === (param1) && target.classList[1] === (param2))
            return true;
        return false;
    }

    function setScene(event) {     
        var target = event.target;
        if (getClickedButton(target, 'start_game', null)) {
            toggleWelcomeWrapper();
            toggleGameWrapper();
            createScene(0);
        }
    }

    function toggleWelcomeWrapper() { 
        var wrapper = document.getElementById('welcome_wrapper');
        if (wrapper.style.display === 'none')
            wrapper.style.display = 'block'; 
        else 
            document.getElementById('welcome_wrapper').style.display = 'none';
    }

    function toggleGameWrapper() {
        var wrapper = document.getElementById('game_wrapper'); 
        if (wrapper.style.display === 'none')
            wrapper.style.display = 'block';
        else
            wrapper.style.display = 'none';
    }