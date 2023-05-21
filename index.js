var numberofDrumButtons=document.querySelectorAll(".drum").length;
for (var i=0; i<numberofDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
       var buttonInnerHtml=this.innerHTML;
       makeSound(buttonInnerHtml)
       buttonAnimation(buttonInnerHtml) 
      
    });

}
document.addEventListener("keydown",function(event){
    makeSound(event.key)
    buttonAnimation(event.key) 
})



function makeSound(key){
    switch (key) {
        case "w":
            var crash=new Audio("sounds/crash.mp3")
            crash.play();
            break;

        case "a":
            var kick_bass=new Audio("sounds/kick-bass.mp3")
            kick_bass.play();
            break;
        case "s":
            var snare=new Audio("sounds/snare.mp3")
            snare.play();
            break;    
        case "d":
            var tm1=new Audio("sounds/tom-1.mp3")
            tm1.play();
            break;
        case "j":
            var tm2=new Audio("sounds/tom-2.mp3")
            tm2.play();
            break;        
        case "k":
            var tm3=new Audio("sounds/tom-3.mp3")
            tm3.play();
            break;    
        case "l":
            var tm4=new Audio("sounds/tom-4.mp3")
            tm4.play();
            break;    
    default:
    break;
    }

}
function buttonAnimation(currentkey){
    var activebutton=document.querySelector("."+currentkey)
    activebutton.classList.add("pressed");
    setTimeout(function(){
        activebutton.classList.remove("pressed");
        
    },1000)


}