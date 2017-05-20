// This class handles the generation of unbreakable walls
var Wall = function(posX, posY, size)
{
    //The X and Y positions of the wall
    this.posX = posX;
    this.posY = posY;
    
    // Size corresponds to the wall's sides size.
    this.size = size; 
    
    // This method creates and displays the wall element on the game-set
    this.display_wall = function()
    {
        var create_wall = document.createElement("div");
        create_wall.classList.add("wall");
        create_wall.style.width = this.size+"px";
        create_wall.style.height = this.size+"px";
        create_wall.style.transform = 'translateX('+ this.posX +'px) translateY('+ this.posY +'px)';
        document.querySelector(".game-set").appendChild(create_wall);
    }
}


// This class creates and displays the game-set
var Set = function(width)
{
    this.width              = width;
    this.height             = width;
    this.columns            = 15;
    this.wall_size          = width/this.columns;
    this.walls_positions    = [];
    
    // This method will display the game set
    this.display_set = function()
    {
        var set_element = document.createElement("div");
        set_element.classList.add("game-set");
        set_element.style.width = this.width+"px";
        set_element.style.height = this.height+"px";
        document.body.appendChild(set_element);
        wall_sizing = this.wall_size;
    }
    
    // This method will display the walls
    this.display_walls = function()
    {
        // This variables will
        var calcX = 0;
        var calcY = 0;
        
        for(var i = 0; i < this.columns ; i++)
        {
            calcY = i * this.wall_size;
            console.log('i='+i);
            for(var j=0 ; j < this.columns ; j++)
            {   
                calcX = j * this.wall_size;
                console.log('j='+j+'translate='+calcX);
                
                // Generates the border of the game set
                if(j === 0 || i === 0 || i === this.columns-1 || j === this.columns-1)
                {
                    var generate_wall = new Wall(calcX, calcY, this.wall_size);
                    generate_wall.display_wall();
                }
                
                // Generates the walls in the middle of the game set
                else if(i % 2 === 0 && j % 2 === 0)
                {
                    var generate_wall = new Wall(calcX, calcY, this.wall_size);
                    generate_wall.display_wall();
                }
            }
        }
    }
}


var Player = function(posX, posY, wall_size)
{
    this.posX      = posX;
    this.posY      = posY;
    this.wall_size = wall_size;
    this.avatar    = "assets/img/avatar.svg";
    
    this.player_moves = function()
    {
        var get_player   = document.querySelector(".player");
        var posX    = this.posX;
        var posY    = this.posY;
        
        console.log(get_player);
        
        document.addEventListener("keydown", function()
        {
            keyValue     = event.keyCode;
            console.log(keyValue);
            
            // If LEFT key is pressed
            if(keyValue == '37')
            {
                console.log('left');
                posX = posX - wall_size;
                console.log('after click posx='+posX);
                
                if(posX >= wall_size)
                {
                    get_player.style.transform = 'translateX('+ posX +'px) translateY('+ posY +'px)';
                }
                else if(posX < wall_size)
                {
                    posX = wall_size;
                    get_player.style.transform = 'translateX('+ posX +'px) translateY('+ posY +'px)';
                }
                console.log('posX='+posX);
                console.log('posY='+posY);
            }
            
            // If UP key is pressed
            else if(keyValue == '38')
            {
                console.log('up');
                posY = posY - wall_size;
                console.log('after click posY='+posY);
                
                if(posY >= wall_size)
                {
                    console.log('up');
                    get_player.style.transform = 'translateX('+ posX +'px) translateY('+ posY +'px)';
                    console.log('posX='+posX);
                    console.log('posY='+posY);
                }
                else if(posY < wall_size)
                {
                    posY = wall_size;
                    get_player.style.transform = 'translateX('+ posX +'px) translateY('+ posY +'px)';
                    
                }
                console.log('posX='+posX);
                console.log('posY='+posY);
            }
            
            // If RIGHT key is pressed
            else if(keyValue == '39')
            {
                console.log('right');
                posX = posX + wall_size;
                console.log('after click posx='+posX);
                
                if(posX <= wall_size * 13)
                {
                    get_player.style.transform = 'translateX('+ posX +'px) translateY('+ posY +'px)';
                }
                else if(posX > wall_size*13)
                {
                    posX = wall_size*13;
                    get_player.style.transform = 'translateX('+ posX +'px) translateY('+ posY +'px)';
                    
                    console.log('x13='+posX);
                }
                console.log('posXx='+posX);
                console.log('posYy='+posY);
            }
            
            // If DOWN key is pressed
            else if(keyValue == '40')
            {
                console.log('down');
                posY = posY + wall_size;
                console.log('after click posY='+posY);
                
                if(posY <= wall_size*13)
                {
                    get_player.style.transform = 'translateX('+ posX +'px) translateY('+ posY +'px)';
                }
                else if(posY > wall_size*13)
                {
                    posY = wall_size*13;
                    get_player.style.transform = 'translateX('+ posX +'px) translateY('+ posY +'px)';  
                }
                console.log('posX='+posX);
                console.log('posY='+posY);
            }                    
        });  
    }
    
    this.generate_player = function(posX, posY)
    {
        var create_player = document.createElement("div");
        create_player.classList.add("player");
        create_player.style.width = this.posX+"px";
        create_player.style.height = this.posX+"px";
        create_player.style.transform = 'translateX('+ this.posX +'px) translateY('+ this.posY +'px)';
        create_player.innerHTML = '<img class="avatar" src="'+ this.avatar +'" alt="Tupac">';
        document.querySelector(".game-set").appendChild(create_player);
    }
}


var game_set = new Set(500);
var player_1 = new Player(game_set.wall_size, game_set.wall_size, game_set.wall_size);
game_set.display_set();
game_set.display_walls();
player_1.generate_player();
player_1.player_moves();