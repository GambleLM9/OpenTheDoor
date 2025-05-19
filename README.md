# Open The Door
## Introduction
This is the README file for Gamble's web project "Open The Door". This document will detail the different features of the website, as well as a step-by-step walkthrough for anyone requiring help with the puzzle.

Languages used:
- HTML5
- CSS3
- JavaScript

## Table of Contents
1. [HTML](#html)
2. [HTML Code Examples](#html-code-examples)
3. [CSS](#css)
4. [CSS Code Examples](#css-code-examples)
5. [JavaScript](#javascript)
6. [JavaScript Code Examples](#javascript-code-examples)
    - [puzzle.js](#puzzlejs)
    - [quiz.js](#quizjs)
## HTML
This project is comprised of multiple .html files in order to contain the various aspects of the website. Each file is comprised of HTML code to provide a basic structure to each page. 

Some examples and elements of this website include:
- `input` elements to record the user's input and process it accordingly
- `div` elements to contain the bulk of the website's features in blocks
- `h$` elements to signify important messages to the user
- Multiple semantic tags during articles to provide a more user accessible experience, such as `header`, `article`, and `alt` tags
- `select` and `option` tags to record user choices during the quiz, and `p` elements to display dynamic responses to their input.

## HTML Code Examples
Below are three examples to demonstrate the HTML code of this website:

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Door is Closed</title>
    <link rel="stylesheet" href="style.css">
    <script src="index.js" defer></script>
    <script src="puzzle.js" defer></script>
</head>
<body>
    <header>
        <h2>Open The Door</h2>
    </header>
    <div class="menuBox">
        <div class="door">
            <img src="thedoor.png" alt="the door." id="theDoor">
        </div>
    </div>
    <div class="arrowBox">
        <div class="arrowdiv arrow1">
            <img src="arrow1.png" alt="arrow to the box of keys" class="arrow" id="arrow1">
        </div>
        <div class="arrowdiv arrow2">
            <img src="arrow2.png" alt="arrow to the articles" class="arrow" id="arrow2">
        </div>
        <div class="arrowdiv arrow3">
            <img src="arrow3.png" alt="arrow to the questionnare" class="arrow" id="arrow3">
        </div>
    </div>
</body>
</html>
```

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Door is closed.</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="quiz.css">
    <script src="quiz.js" defer></script>
    <script src="puzzle.js"></script>
</head>
<body>
    <div class="container">
        <div class="quizholder">
            <h2>Daily Excitement Quiz</h2>
            <div class="question q1">
                <h3>Question #1: How tired are you right now?</h3>
                <select id="question1">
                    <option value="placeholder">Select Below</option>
                    <option value="veryTired">Very Tired💤</option>
                    <option value="sleepy">Sleepy🥱</option>
                    <option value="awake">Awake🙂</option>
                    <option value="energetic">Energetic⚡</option>
                </select>
                <p id="response1"></p>
            </div>
            <div class="question q2">
                <h3>Question #2: What did you do today?</h3>
                <select id="question2">
                    <option value="placeholder">Select Below</option>
                    <option value="hiking">Went hiking🗻</option>
                    <option value="surfing">Went Surfing🏄‍♀️</option>
                    <option value="sport">Played a sport🏈</option>
                    <option value="games">Played video games🎮</option>
                    <option value="other">Other🤔</option>
                    <option value="none">Nothing😶</option>
                </select>
                <p id="response2"></p>
            </div>
            <div class="question q3">
                <h3>Question #3: How do you feel right now?</h3>
                <select id="question3">
                    <option value="placeholder">Select Below</option>
                    <option value="happy">Happy!😀</option>
                    <option value="normal">Normal.😐</option>
                    <option value="sad">Sad..🙁</option>
                    <option value="angry">Angry!!!😡</option>
                    <option value="other">Other🤔</option>
                </select>
                <p id="response3"></p>
            </div>
            <div class="question q4">
                <h3>Question #4: What time do you plan on falling asleep?</h3>
                <select id="question4">
                    <option value="placeholder">Select Below</option>
                    <option value="superlate">Super Late 🕛 (12:00am+)</option>
                    <option value="late">Late 🕙 (10:00pm - 12:00am)</option>
                    <option value="normal">Normal 🕗 (8:00pm - 10:00pm)</option>
                    <option value="early">Early 🕕 (6:00pm - 8:00pm)</option>
                </select>
                <p id="response4"></p>
            </div>
            <div class="question q5">
                <h3>Question #5: Are you satisfied with today?</h3>
                <select id="question5">
                    <option value="placeholder">Select Below</option>
                    <option value="yes">Yes! ✅</option>
                    <option value="no">No.. ❌</option>
                </select>
                <p id="response5"></p>
            </div>
            <div class="question q6">
                <h3>How do you feel about gambling?</h3>
                <select id="question6">
                    <option value="placeholder">Select Below</option>
                    <option value="addicted">It's super fun!🎰</option>
                    <option value="normal">It's okay time to time.💳</option>
                    <option value="uneasy">I'm a bit unsure..😓</option>
                    <option value="dislike">I hate it!🚫</option>
                </select>
                <p id="response6"></p>
            </div>
            <div class="question q7">
                <h3>Question #7: What do you estimate your average heart rate today to be?</h3>
                <select id="question7">
                    <option value="placeholder">Select Below</option>
                    <option value="40">40📝</option>
                    <option value="60">60📝</option>
                    <option value="80">80📝</option>
                    <option value="100">100📝</option>
                    <option value="120">120📝</option>
                    <option value="what">What???</option>
                </select>
                <p id="response7"></p>
            </div>
            <div class="question q8">
                <h3>Question #8: What did you have for dessert?</h3>
                <select id="question8">
                    <option value="placeholder">Select Below</option>
                    <option value="cake">Cake🍰</option>
                    <option value="pie">Pie🥧</option>
                    <option value="brownies">Brownies🍫</option>
                    <option value="icecream">Ice Cream🍨</option>
                    <option value="other">Other💭</option>
                    <option value="none">Nothing🍽</option>
                </select>
                <p id="response8"></p>
            </div>
            <div class="question q9">
                <h3>Question #9: What's your favorite color? Pick below:</h3>
                <input type="color" id="question9">
                <p id="response9"></p>
            </div>
            <div class="question q10">
                <h3>Question #10: Do you think today has been exciting?</h3>
                <select id="question10">
                    <option value="placeholder">Select Below</option>
                    <option value="yes">Yes! ✅</option>
                    <option value="no">No.. ❌</option>
                </select>
                <p id="response10"></p>
            </div>
            <button class="nextbutton" onclick="nextPage()">Next➡</button>
        </div>
    </div>
</body>
</html>
```

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Door is closed.</title>
    <link rel="stylesheet" href="style.css">
    <script src="puzzle.js" defer></script>
</head>
<body>
    <div class="container">
        <div class="newsarticle">
            <header class="header">
                <h1>CipherCentral News</h1>
                <div>
                    <p>"We always check at least twice."</p>
                    <p>- Our founder, [REDACTED]</p>
                </div>
                <nav>
                    <a href="error1.html">Home</a>
                    <a href="archives.html">Archives</a>
                    <a href="error2.html">Find Us</a>
                    <a href="error3.html">Subscription</a>
                    <a href="home.html">the door</a>
                </nav>
            </header>
            <main class="newscontainer">
                <article>
                    <h2>Today's Headlines:</h2>
                    <div class="article1" id="article1">
                        <h3 id="article1Heading"></h3>
                        <section class="article1Section1" id="article1Section1"></section>
                        <section class="article1Section2" id="article1Section2"></section>
                    </div>
                    <div class="article2" id="article2">
                        <h3 id="article2Heading"></h3>
                        <section class="article2Section1" id="article2Section1"></section>
                        <section class="article2Section2" id="article2Section2"></section>
                    </div>
                </article>
            </main>
        </div>
    </div>
```
## CSS
This website uses Cascading Style Sheets to decorate and customize the html elements of the website, making them look appealing and unique. 

Some examples of the CSS techniques used include:

- `display: flex` to allow the elements to flow seamlessly with eachother in a contained space, also allowing them to be centered vertically on a page
- `position: absolute` to allow the targeted element to maintain an absolute positon on the webpage irrelevant of other elements, used for the arrows and door on the home page
- Classes and IDs to target a group of elements or a single element respectively, such as the `.arrow` and `.question` classes, and the `#arrow1` and `#q2` IDs
- An External CSS stylesheet, used to quickly link to all webpages and apply a universal style, such as `margin: 0` and `padding: 0` to remove the default spacing between elements
- Special `.hide` and `.dimhide` classes, in order to hide and reveal certain elements in the webpage during designated times
## CSS Code Examples
These are three examples of the CSS styling code used in the webpages:
``` css
        body{
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }   
        .header{
            position: fixed;
            width: 100%;
            background-color: rgb(0, 174, 0);
            padding: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .header h1{
            font-size: 2.5em;
        }
        nav a{
            text-decoration: none;
            color: black;
            padding: 10px;
            margin-right: 5px;
            background-color: rgb(0, 234, 0);
            border: 2px solid green;
            border-radius: 25px;
        }
        .newsarticle{
            display: flex;
            flex-direction: column;
        }
        .newscontainer{
            height: 100%;
            padding-top: 10%;
            font-size: 1.5em;
        }
        .newscontainer article{
            width: 70%;
            margin: 0 auto;
        }
        article h2{
            background-color: rgb(228, 228, 228);
            padding: 20px;
            border-radius: 25px;
        }
        h3{
            border-bottom: solid 2px rgb(228, 228, 228);
            padding: 20px;
            margin-bottom: 10px;
        }
        .article1{
            display: flex;
            flex-direction: column;
        }
        .article1Section2{
            margin-top: 20px;
            display: flex;
            flex-direction: row;
        }
        .article2{
            margin-top: 20px;
            display: flex;
            flex-direction: column;
        }
        .article2Section2{
            margin-top: 20px;
            display: flex;
            flex-direction: row;
            margin-bottom: 20px;
        }
```

``` css
        .quizholder{
            height: fit-content;
        }
        h2{
            margin: 20px;
            border-bottom: 4px solid rgb(247, 197, 124);
            padding: 20px;
        }
        .question{
            padding: 20px;
            margin: 0 auto;
            background-color: rgb(255, 218, 162);
            width: 70%;
            margin-bottom: 30px;
            border-radius: 20px;
            border: 3px solid rgb(247, 197, 124);
        }
        select{
            margin: 10px;
            padding: 10px;
            background-color: blanchedalmond;
            border: 2px solid rgb(247, 197, 124);
            border-radius: 20px;
            cursor: pointer;
        }
        input{
            background-color: blanchedalmond;
            border: 2px solid rgb(247, 197, 124);
            margin: 10px;
            cursor: pointer;
        }
        .q10{
            margin-bottom: 100px;
        }
        button{
            width: fit-content;
            padding: 10px 20px;
            margin: 0 auto;
            margin-bottom: 100px;
            background-color: rgb(255, 218, 162);
            border: 2px solid rgb(247, 197, 124);
            font-size: 1.25em;
            border-radius: 25px;
            cursor: pointer;
        }
```

``` css
        body{
            font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
        }
        .container{
            height: 100vh;
            width: 100%;
            background-color: white;
            color: black;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        }
        h1{
            text-align: center;
        }
        a{
            margin: 0 auto;
            padding: 10px;
            border-radius: 25px;
            color: black;
            text-decoration: none;
            background-color: rgb(197, 197, 197);
            width: fit-content;
        }
        .keybox{
            width: 70%;
            margin: 0 auto;
            background-color: rgb(165, 89, 42);
            padding: 20px;
        }
        .search{
            text-align: center;
            width: 65%;
            margin: 0 auto;
            background-color: rgb(197, 197, 197);
            border-radius: 25px;
            width: auto;
            padding: 10px;
        }
        .search input{
            padding: 5px;
        }
        .keycontainer{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            flex-wrap: wrap;
            overflow-y: scroll;
            max-height: 500px;
        }
        .key{
            margin: 10px;
            background-color: rgb(124, 68, 33);
            width: 220px;
            height: 220px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .hide{
            display: none;
        }
        .imgkey{
            width: 180px;
            height: 180px;
            cursor: pointer;
        }
        .dimcontainer{
            background-color: rgba(0, 0, 0, 0.407);
            position: fixed;
            top: 0%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            height: 100vh;
            width: 100%;
        }
        .dimhide{
            background-color: rgba(0, 0, 0, 0.407);
            display: none;
        }
        .keydisplay{
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: grey;
            padding: 20px;
        }
        .keydisplay p{
            margin: 5px;
            margin-top: 10px;
        }
        .closeBtn{
            background-color: rgb(162, 162, 162);
            font-size: 1.05em;
            padding: 10px 30px;
            border-radius: 10px;
            border: none;
            cursor: pointer;
        }
```
## JavaScript
This website uses heavy javascript for multiple elements to make the game function correctly, including but not limited to:
- A system to track the puzzle step the user is currently on, using LocalStorage
- A hint system utilizing aftermentioned system to provide accurate hints to the user, using the DOM to assign an event to the * key on the user's keyboard
- A DOM system that dynamically updates the webpage in response to user input and actions
- Multiple functions that execute calculations and operations to validate user's input and match it with the intended solution
- Arrays built using query selectors to create entire rows of an item in order to work with them in JavaScript
- LocalStorage to check data on the user's activity, and update parts of the website based on what they have done and witnessed
- Use of the window alert system to simulate dialogue between a fictional character 'Karl', who provides hints if the player requires them
- Math.random() to generate random values in order to add an element of randomness to a part of the webpage.

These will be further elaborated in the JavaScript Code Examples section.

## JavaScript Code Examples
### puzzle.js
``` javascript
document.addEventListener('keyup', (event)=>{
    if(event.key == "*"){
        console.log('Hint activated')
        const whatHint = localStorage.getItem('hintCount')
        if(whatHint == "Step1"){
            alert("Have a look around! Those arrows will take you to different places. Maybe you'll encounter something odd!")
        }
        if(whatHint == "Step2"){
            alert("Huh, guess the quiz was more broken than it appeared. Is there anywhere you can put that error code to get help?")
        }
        if(whatHint == "Step3"){
            alert("Who puts a security code for a help section? Guess you'll have to look elsewhere for a 7-digit number.")
            alert("Yknow, that newspaper website looked cool!")
        }
        if(whatHint == "Step4"){
            alert("FUSH method? I've never heard of that in my life. Maybe it's an acronym for something? Take a look around the place, and see if there's anything that fits that!")
            alert("Maybe it'll get you some kind of code? If it does, make sure to type it on your keyboard once you get to that question?")
            alert("Also, does the title for the tabs ever change? It's always something about the door being locked!")
        }
        if(whatHint == "Step5"){
            alert("What kinda wack-o quiz was that? Don't take anything from it too seriously. You're so close. Don't turn back now!")
            alert("Some of that info in the results screen looked a little odd, though. Maybe there's something hidden there?")
            alert("Or it'll be in your face. One of the two.")
        }
        if(whatHint == "Step6"){
            alert("There it is! Use that code to find the key in that keybox!")
            alert("Cmon! Hurry!")
        }
        if(whatHint == "Step7"){
            alert('Cmon!!! Type the keycode on your keyboard!!!')
        }
        if(whatHint == "Step8"){
            alert("Put the codes together and type it! The AN/913 code! Put it together with the other one!!!")
        }
    }
})
```

The above code:
- Uses `.addEventListener()` function to add a listener for an event, specifically the `keyup` event, targeted to the `document` object to execute the code when a key on the keyboard is released
- catches the `event` parameter when the code is executed, which, when combined with the `.key` specifier, will record the key pressed on the keyboard.
- checks if the key pressed is equal to the "*" value, which corresponds to the * key on the keyboard
- will get the item from the `localStorage` called the `hintCount` using the `getItem()` method, and store it in the `whatHint` variable, logging the activation to the console using `console.log()` for debugging purposes
- runs the value of the `whatHint` variable through a series of `if` statements, which each check to see if the variable matches various values such as `Step1`, `Step3`, and `Step5`
- will put an alert to the window using the `alert()` method that corresponds to the matched value, and said alert contains a hint designed to correlate to the puzzle step the user would be on based on the value inside of `whatHint`.

### quiz.js
``` javascript
const question1 = document.getElementById('question1')
const question2 = document.getElementById('question2')
const question3 = document.getElementById('question3')
const question4 = document.getElementById('question4')
const question5 = document.getElementById('question5')
const question6 = document.getElementById('question6')
const question7 = document.getElementById('question7')
const question8 = document.getElementById('question8')
const question9 = document.getElementById('question9')
const question10 = document.getElementById('question10')
let response1 = document.getElementById('response1')
let response2 = document.getElementById('response2')
let response3 = document.getElementById('response3')
let response4 = document.getElementById('response4')
let response5 = document.getElementById('response5')
let response6 = document.getElementById('response6')
let response7 = document.getElementById('response7')
let response8 = document.getElementById('response8')
let response9 = document.getElementById('response9')
let response10 = document.getElementById('response10')
question1.addEventListener('change',()=>{
    if(question1.value === 'placeholder'){
        response1.innerHTML = ''
    }
    if(question1.value === "veryTired"){
        response1.innerHTML = "Maybe you should put the screen away and go to bed? Friendly advice."
    }
    if(question1.value === "sleepy"){
        response1.innerHTML = "After a long day, anyone would be tired. Or, if you never get enough sleep, that's every day for you!"
    }
    if(question1.value === 'awake'){
        response1.innerHTML = "Make the most of your day! However much is left, anyway."
    }
    if(question1.value === 'energetic'){
        response1.innerHTML = 'Oh, I have a feeling I know the results of this quiz already.'
    }
})
question2.addEventListener('change',()=>{
    if(question2.value === 'placeholder'){
        response2.innerHTML = ''
    }
    if(question2.value === 'hiking'){
        response2.innerHTML = 'I used to see a lot of mountains everywhere, and I always wanted to hike them! Too bad I never had the guts...'
    }
    if(question2.value === 'surfing'){
        response2.innerHTML = "That's a nice activity! I always preferred watching the ocean myself, but I respect those with the craft."
    }
    if(question2.value === 'sport'){
        response2.innerHTML = "What sport do you play? Oh, I'm only allowed to ask the one question...sorry!"
    }
    if(question2.value === 'games'){
        response2.innerHTML = "Your gaming career better not consist of mobile games only, or I'm gonna shout at the top of my lungs."
    }
    if(question2.value === 'other'){
        response2.innerHTML = "I'm sure it was exciting either way!"
    }
    if(question2.value === "none"){
        response2.innerHTML = "You should live a little, yknow?"
    }
    if(question2.value === "none" && question1.value === 'veryTired'){
        response2.innerHTML = "Wait, you wore yourself out by doing...nothing? I'm not sure whether to be amazed, or concerned..."
    }
    if(question2.value === "none" && question1.value === 'energetic'){
        response2.innerHTML = "I'm sure you have a lot of energy to burn!"
    }
})
question3.addEventListener('change',()=>{
    if(question3.value === "placeholder"){
        response3.innerHTML = ""
    }
    if(question3.value === "happy"){
        response3.innerHTML = "Wow! That's great! I'm so happy, for your happiness!"
    }
    if(question3.value === "normal"){
        response3.innerHTML = "Feeling normal is pretty normal. It's kinda like it's in the name, or something!"
    }
    if(question3.value === "sad"){
        response3.innerHTML = "Hey, we all have our off days. It'll get better! Life is contractually obligated to!"
    }
    if(question3.value === "angry"){
        response3.innerHTML = "I'd tell you to chill, but I don't want to end up like those unfortunate pieces of technology that somehow find themselves near monkeys."
    }
    if(question3.value === "other"){
        response3.innerHTML = "Well, I suppose you could be disgusted, but why? I'm not gross, am I? Am I."
    }
})
question4.addEventListener('change',()=>{
    if(question4.value === "placeholder"){
        response4.innerHTML = ""
    }
    if(question4.value === "superlate"){
        response4.innerHTML = "Do you have plans with friends? Or nothing better to do with your night? Like, yknow, sleeping?"
    }
    if(question4.value === "late"){
        response4.innerHTML = "Make sure you at least give yourself some wiggle room by waking up late. If you can't, I'm sorry."
    }
    if(question4.value === "normal"){
        response4.innerHTML = "Congrats on having a reasonable sleep schedule! You'd be surprised at how many people can't do that."
    }
    if(question4.value === "early"){
        response4.innerHTML = "Feeling tired? Good on you for calling it early!"
    }
    if(question4.value === "early" && question1.value === 'energetic'){
        response4.innerHTML = "You're...excited to go to sleep? Never mind, I do NOT know the results of this quiz..."
    }
    if(question4.value === "superlate" && question1.value === 'veryTired'){
        response4.innerHTML = "Why? What do you gain from this??"
    }
})
question5.addEventListener('change',()=>{
    if(question5.value === "placeholder"){
        response5.innerHTML = ""
    }
    if(question5.value === "yes"){
        response5.innerHTML = "Good for you!"
    }
    if(question5.value === "no"){
        response5.innerHTML = "Well, there's always tomorrow!"
    }
})
question6.addEventListener('change', ()=>{
    if(question6.value === "placeholder"){
        response6.innerHTML = ""
    }
    if(question6.value === "addicted"){
        response6.innerHTML = "You..are careful, right? Please make sure to be careful. For your own sake."
    }
    if(question6.value === "normal"){
        response6.innerHTML = "Well, you seem reasonable, so I won't say anything."
    }
    if(question6.value === "uneasy"){
        response6.innerHTML = "If you want my advice, stay away."
    }
    if(question6.value === "dislike"){
        response6.innerHTML = "Same here. It's one of the worst things ever. I hate it, hate hate hate it."
    }
    if(question6.value === "dislike" && (question3.value === "sad" || question3.value === "angry") && question5.value === "no"){
        response6.innerHTML = "Hey uh...don't tell the boss I put this in here. But, you remind me a lot of myself. Have you heard of the Gonzales V Jade Dragon Casino case? Well, Samuel Gonzalez is my dad. See, the news says he won the case and that the Casino paid out to him, but...the News doesn't get everything right. My dad got the money, and then gambled it all away at another casino. Now we're right back where we started, and we have no way of getting it back. So..please be careful, alright? I know you're trying to open this door but is it really wort [ERROR: The rest of this sentence has been redacted by an administrator.]"
    }
}) 
question7.addEventListener('change',()=>{
    if(question7.value === "placeholder"){
        response7.innerHTML = ""
    }
    else if(question7.value === "what"){
        response7.innerHTML = "That's what I'm saying! I don't get paid enough to know what all this is..."
    }
    else{
        response7.innerHTML = "Gonna be real with you, I have no idea what to put here. They told me to put in a heart rate section and I looked at them funny."
    }
})
question8.addEventListener('change',()=>{
    if(question8.value === "placeholder"){
        response8.innerHTML = ""
    }
    if(question8.value === "cake"){
        response8.innerHTML = "I've never been a fan of cake, but it does look appetizing!"
    }
    if(question8.value === "pie"){
        response8.innerHTML = "Pie's good for lots of things. Eating, decorating, throwing at people, the whole 9 yards! (8.2269 meters)"
    }
    if(question8.value === "brownies"){
        response8.innerHTML = "That's my favorite! I don't have it too often, though. Takes a long tume to bake, and home brownies ALWAYS trump store-bought ones."
    }
    if(question8.value === "icecream"){
        response8.innerHTML = "They say we all scream for ice cream, and that includes me. Because I hate ice cream."
    }
    if(question8.value === "other"){
        response8.innerHTML = "It better not be grass. You know people actually eat that? It's a delicacy in some places. They take grass, slap it on a plate and call it something fancy, but it really is just grass if you ask me."
    }
    if(question8.value === "none"){
        response8.innerHTML = "Sounds like you could go for a knuckle sandwich. Was that too mean? I don't have to fill out more paperwork, right?"
    }
})
question9.addEventListener('change',()=>{
    if(question9.value === "#000000"){
        response9.innerHTML = "Black's a nice color. Don't overdo it, though, because then it can go from looking nice to just plain sad. Or scary."
    }
    else if(question9.value === "#ffffff"){
        response9.innerHTML = "White's a nice color. It's every color, if you think about it! Maybe."
    }
    else{
        response9.innerHTML = "I'd give a sort of comment here, but I actually like every color if you can believe it! Though if I had to pick one, I'd say pink!"
    }
})
question10.addEventListener('change',()=>{
    if(question10.value === "placeholder"){
        response10.innerHTML = ""
    }
    if(question10.value === "yes"){
        response10.innerHTML = "Glad to know what you think! Let's see what the quiz says..."
    }
    if(question10.value === "no"){
        response10.innerHTML = "Glad to know what you think. Let's see what the quiz says!"
    }
})
```

The above code:
- creates a series of variables such as `question1`, `question4`, `response2`, and `response6`, all containing values retrieved by the `.getElementByID()` method used on the `document` object, done in order to retrieve the elements from the DOM to update them and target them to record their values
- adds event listeners to the questions by using the `addEventListener()` method on the variables containing the DOM for the html question elements, set to listen for the `change` event, which will activate if the value for the element is changed
- records the value of the targeted question with the `.value` specifier
- checks the element's value against a series of `if` statements, and records which value the question matches with
- updates the `.innerHTML` of the variables linked to the p elements in the html in order to give a dynamic response to the user's answer to the question, offering unique responses if certain combinations of answers are selected, made possible using the `||` logical operator