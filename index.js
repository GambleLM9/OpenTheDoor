let theDoor = document.getElementById("theDoor")
let articleArrow = document.getElementById("arrow2")
let questionArrow = document.getElementById("arrow3")
let boxArrow = document.getElementById("arrow1")
articleArrow.addEventListener('click',()=>{
    window.location.href = '/article.html'
})
questionArrow.addEventListener('click',()=>{
    window.location.href = '/questionnare.html'
})
boxArrow.addEventListener('click',()=>{
    window.location.href = '/keybox.html'
})