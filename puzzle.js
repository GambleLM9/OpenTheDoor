document.addEventListener('keyup', (event)=>{
    if(event.key = "*"){
        console.log('Hint activated')
        const whatHint = localStorage.getItem('hintCount')
        console.log(whatHint)
        if(whatHint == "Step1"){
            alert("Have a look around! Those arrows will take you to different places. Maybe you'll encounter something odd!")
        }
    }
})