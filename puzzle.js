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