# Open the Door
Open The Door is my capstone project, and it is a giant puzzle game where you have to navigate different webpages in order to find a key to open the door.

### A Game?
Yes, by definition, this website is a game. However, it is a game that will still utilize all the skills that we have learned over the year while managing to maintain it's own unique identity.

### What is it? How does it work?
The user will begin by loading into the home page, where all they can see is a single picture of a door, and three arrows, pointing left, right, and downwards. Upon loading in, the browser will send an `alert()` to the user. However, this alert is not a warning of something being wrong with the code, but instead a message from a fictional character designed for this game named Karl. Throughout this game, I will use the `alert()` function to simulate a conversation between the user and Karl. To explain what I mean, I will show the planned opening dialogue that will be communicated by the `alert()` system below:

    Hello? Is someone there?

    Oh! I can see you!

    Hi! My name is Karl. 

    I've been locked inside this room for a long time.

    I want to get out, but the door is locked, and I can't get it open.

    I can still look outside, though!

    Do you think you can help me?

If the user selects `OK`, then the dialogue will continue as follows. If they don't, the tab will automatically close itself.

    Oh, that's great!

    I think there's a key that opens this door. I don't know where it is, though.

    I can help you look, though! If you need help, just press * to call me, and I'll speak my mind!

    Anyway, can you look around for the key? Maybe those red arrows can take you somewhere?

The purpose of the existence of Karl is to add a layer of interactivity between the user and the game, using JavaScript and it's functions to display dialogue to the user and react appropriately to their inputs. This also functions as a help system, allowing for Karl to provide hints for the puzzles to the user if they press the * key.

The aftermentioned red arrows will take the user to other pages when they are clicked. The left arrow takes them to a box full of keys, the right arrow takes them to a questionnare, and the bottom arrow takes them to a news article. 

### What is the news article?
The news article is a fake article created by me, and stylized with HTML and CSS. It contains two sections: however, the content of these sections is random every time the user enters the webpage. For example, one story talks about the verdict of a fake court case called "Gonzalez V. Jade Dragon Casino", and the second would discuss a fake UFO sighting in Nevada. But if the user leave the page and then re-enters, it could now be talking about a fake earthquake in Arizona, and then the fake closure of a salt factory. This is accomplished by first using the `Math.random()` function in JavaScript in order to generate a pair of random numbers that will determine the two articles that will appear. Then, the DOM will be manipulated in order to update the webpage to change the displayed articles.

### What is the questionnare?
The questionnare is a quiz created by me, titled the "Daily Excitement Quiz". It will prompt the user to press a start button to begin the quiz, where it will then ask the user various questions in order to gauge the excitement of their day. This is accomplished by using `<input>` elements to capture the user's responses and interpret it, then weigh it against a scoring system of 1-5 in order to gauge how exciting their day is. However, there may come a point where an error will occur if the user is presented with a question they cannot answer, in which case they must find the error code provided from a `try-catch` statement in order to get help.