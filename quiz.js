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
})
question9.addEventListener('change',()=>{
    if(question9.value === "#000000"){
        response9.innerHTML = "Black's a nice color. Don't overdo it, though, because then it can go from looking nice to just plain sad. Or scary."
    }
    else if(question9.value === "#ffffff"){
        response9.innerHTML = "White's a nice color. It's every color, if you think about it! Maybe."
    }
    else if(question9.value === "#fda4fe"){ //change to be accurate
        response9.innerHTML = "I wonder which one of you is here. Only an animal could guess that...hmm, are you mythical? Maybe you're a weasel of some kind. Or a cute little turtle. Unless you don't have an identity crisis...well you're a fierce crocodile! Or a mighty dragon, east or west flavored! Or we could combine two of them, like a bat and a dragon! Bat dragon! Or...I think you're a rat, yknow? Makes sense if you're so small."
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