var submit = document.getElementsByTagName("input")[0]
var index = null
submit.onclick = function(){
const chosen = document.getElementsByClassName("moves").moves.value
if(chosen === 'rock'){
  document.getElementsByClassName("player")[0].src = "images/rock1.png"
  document.getElementById('ppara').textContent = 'You chose Rock'
  index = 0
}else if(chosen === 'paper'){
  document.getElementsByClassName("player")[0].src = "images/paper.png"
  document.getElementById('ppara').textContent = 'You chose Paper'
  index = 1
}else{
  document.getElementsByClassName("player")[0].src = "images/scissors.png"
  document.getElementById('ppara').textContent = 'You chose Scissors'
  index = 2
}
const moves = ["images/rock1.png","images/paper.png","images/scissors.png"]
let comMove = Math.floor(Math.random()*moves.length)
document.getElementsByClassName("com")[0].src = moves[comMove]
if(comMove === 0){
document.getElementById("ComP").textContent = "Com chose Rock!"
if(index === 1){
  document.getElementsByTagName("h1")[0].textContent = "You Win!"
}else if(index === 2){
  document.getElementsByTagName("h1")[0].textContent = "Com Wins!"
}else{
    document.getElementsByTagName("h1")[0].textContent = "Its a draw!"
}
}else if(comMove === 1){
  document.getElementById("ComP").textContent = "Com chose Paper!"
  if(index === 2){
    document.getElementsByTagName("h1")[0].textContent = "You Win!"
  }else if(index === 0){
    document.getElementsByTagName("h1")[0].textContent = "Com Wins!"
  }else{
      document.getElementsByTagName("h1")[0].textContent = "Its a draw!"
  }
}else{
  document.getElementById("ComP").textContent = "Com chose Scissors!"
  if(index === 0){
    document.getElementsByTagName("h1")[0].textContent = "You Win!"
  }else if(index === 1){
    document.getElementsByTagName("h1")[0].textContent = "Com Wins!"
  }else{
      document.getElementsByTagName("h1")[0].textContent = "Its a draw!"
  }
}
}
