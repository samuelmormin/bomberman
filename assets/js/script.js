// Recuperate the elements to handle the menu
var menu_container      = document.querySelector(".menu-container");
var menu                = menu_container.querySelector(".menu");
var menu_ul             = menu.querySelector(".menu-list");
var menu_button         = document.querySelector(".menu-hamburger");

// Variable to get the state of menu (displayed or not)
var menu_display_state  = false;

// Callback to listen to menu events
menu_button.addEventListener("click", function(e)
{
    // Remove menu from the screen;
    if(menu_display_state) 
    {
        menu_container.classList.remove('visible');
        menu_container.classList.add('hidden');
        
        // Set the getting out transitions
        menu_ul.style.transition        = 'transform 0.6s ease-out';
        menu.style.transition           = 'all 0.6s ease-out 0.4s';
        menu.style.opacity              = '0';
        menu_container.style.transition = 'all 0.6s ease-out 0.4s';
        menu_container.style.opacity    = '0';        
        
        // Set the position of menu put it out of screen
        menu.style.transform            = 'translateX(0)';
        //menu_ul.style.transform         = 'translateY(100%)';

        menu_display_state              = false;
    }
    // Display the menu on the screen
    else
    {
        menu_container.classList.remove('hidden');
        menu_container.classList.add('visible');
        
        // Set the display transitions
        menu_container.style.transition = 'all 0.6s ease-in';
        menu_container.style.opacity    = '1';        
        menu.style.transition           = 'all 0.6s ease-in 0.1s';  
        menu.style.opacity              = '1';
        menu_ul.style.transition        = 'transform 0.6s ease-in 0.6s';
        
        // Set the position of menu put it on the screen
        menu.style.transform            = 'translateX(-700px)';
        //menu_ul.style.transform         = 'translateY(0%)';

        menu_display_state              = true;
    }
});