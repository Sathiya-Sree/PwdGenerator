const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
inputEl = document.getElementById("input-el")
pwd1El = document.getElementById("pwd1-el")
pwd2El = document.getElementById("pwd2-el")
function randomPwd(){
        let randomChr = Math.floor(Math.random()*characters.length)
        return characters[randomChr]
}
function copyPwd1(){
    inputEl.textContent = pwd1El.textContent
}
function copyPwd2(){
    inputEl.textContent = pwd2El.textContent
}
function generatePwd(){
    pwd1El.textContent = ''
    pwd2El.textContent = ''
    for(let i=0; i<15; i++){
        pwd1El.textContent += randomPwd()
        pwd2El.textContent += randomPwd()
    }  
    
}


