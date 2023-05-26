var numOfButton=document.querySelectorAll(".btn").length;

for(var i=0;i<numOfButton;i++){

    document.querySelectorAll(".btn")[i].addEventListener("click",function(){
var buttonInnerHTML=this.innerHTML;
makeSound(buttonInnerHTML);
    });
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
});
function makeSound(key){
    switch (key) {
        case ("T"):
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "R":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "A":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "N":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "S":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "I":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "S":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        
    
        default:console.log(buttonInnerHTML)
            break;
    }
}
