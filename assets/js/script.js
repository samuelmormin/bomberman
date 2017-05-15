// Unicode values of keyboard keys : 
// Left     = 37
// Up       = 38
// Right    = 39
// Down     = 40
// B        = 

var perso   = document.querySelector(".perso");
var posX    = 0;
var posY    = 0;

console.log(perso);
var keyValue = '0';
console.log(keyValue);

document.addEventListener("keydown", myFunction);

    
function myFunction()
{
    if(posX <= 500 && posX >=0)
    {
        keyValue     = event.keyCode;
        if(keyValue == '37')
        {
            console.log('kkk');
            posX = posX - 100;
            perso.style.transform = 'translateX('+ posX +'px) translateY('+ posY +'px)';
            console.log(posX);
        }
        else if(keyValue == '38')
        {
            console.log('JJJ');
            posY = posY - 100;
            perso.style.transform = 'translateX('+ posX +'px) translateY('+ posY +'px)';
        }
        else if(keyValue == '39')
        {
            console.log('ppp');
            posX = posX + 100;
            perso.style.transform = 'translateX('+ posX +'px) translateY('+ posY +'px)';
            console.log(posX);
        }   
        else if(keyValue == '40')
        {
            posY = posY + 100;
            perso.style.transform = 'translateX('+ posX +'px) translateY('+ posY +'px)';
        }  
    }
//        if(keyValue = '37')
//        {
//            perso.style.transform = 'translateX(-100px)';
//            console.log(keyValue);
//        }
//        else if(keyValue = '38')
//        {
//            perso.style.transform = 'translateY(-100px)';
//            console.log('this 38');
//        }
//        else if(keyValue = '39')
//        {
//            perso.style.transform = 'translateX(100px)';
//            console.log('this 39');
//        }
//        else if(keyValue = '40')
//        {
//            console.log('this 40');
//            perso.style.transform = 'translateY(100px)';
//        }
}
    
//var menu                = menu_container.querySelector(".menu");
//var menu_ul             = menu.querySelector(".menu-list");
//var menu_button         = document.querySelector(".menu-hamburger");
//
//// Variable to get the state of menu (displayed or not)
// var menu_display_state  = false;







// Callback to listen to menu events
//menu_button.addEventListener("click", function(e)
//{
//    // Remove menu from the screen;
//    if(menu_display_state) 
//    {
//        menu_container.classList.remove('visible');
//        menu_container.classList.add('hidden');
//        
//        // Set the getting out transitions
//        menu_ul.style.transition        = 'transform 0.6s ease-out';
//        menu.style.transition           = 'all 0.6s ease-out 0.4s';
//        menu.style.opacity              = '0';
//        menu_container.style.transition = 'all 0.6s ease-out 0.4s';
//        menu_container.style.opacity    = '0';        
//        
//        // Set the position of menu put it out of screen
//        menu.style.transform            = 'translateX(0)';
//        //menu_ul.style.transform         = 'translateY(100%)';
//
//        menu_display_state              = false;
//    }
//    // Display the menu on the screen
//    else
//    {
//        menu_container.classList.remove('hidden');
//        menu_container.classList.add('visible');
//        
//        // Set the display transitions
//        menu_container.style.transition = 'all 0.6s ease-in';
//        menu_container.style.opacity    = '1';        
//        menu.style.transition           = 'all 0.6s ease-in 0.1s';  
//        menu.style.opacity              = '1';
//        menu_ul.style.transition        = 'transform 0.6s ease-in 0.6s';
//        
//        // Set the position of menu put it on the screen
//        menu.style.transform            = 'translateX(-700px)';
//        //menu_ul.style.transform         = 'translateY(0%)';
//
//        menu_display_state              = true;
//    }
//});