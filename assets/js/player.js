var Player = function(posX, posY, wall_size, game)
{
    this.posX            = posX;
    this.posY            = posY;
    this.wall_size       = wall_size;
    this.avatar          = "assets/img/avatar.svg";
    this.walls_positions = game.walls_positions;
    this.greenlight      = false;
    
    this.test_walls = function()
    {
        
        console.log('position')
        console.log('pos 2 test walls ='+this.walls_positions[2].posX);
        var test_right = this.posX+this.wall_size;
        for(var i = 0 ; i < this.walls_positions.length ; i++)
        {
            console.log(posX);
            if(test_right = this.walls_positions[i].posX)
            {
                console.log('no');
            }
            
        }
        
        console.log('it workswwwwwww');
    }
    
    this.player_moves = function()
    {
        
        var get_player   = document.querySelector(".player");
        //this.test_walls();
        var posX    = this.posX;
        var posY    = this.posY;
        var _this = this;
        

        
        
        document.addEventListener("keydown", function()
        {
            keyValue     = event.keyCode;
            //console.log(keyValue);
            //var _that = this;
            
            // If LEFT key is pressed
            if(keyValue == '37')
            {
                console.log('left');
                 _this.test_walls();
                posX = posX - wall_size;
                
                if(posX >= wall_size)
                {
                    get_player.style.transform = 'translateX('+ posX +'px) translateY('+ posY +'px)';
                    this.posX = posX;
                    console.log('context posX ='+this.posX);
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
                //console.log('up');
                posY = posY - wall_size;
                //console.log('after click posY='+posY);
                
                if(posY >= wall_size)
                {
                    //console.log('up');
                    get_player.style.transform = 'translateX('+ posX +'px) translateY('+ posY +'px)';
                    //console.log('posX='+posX);
                    //console.log('posY='+posY);
                }
                else if(posY < wall_size)
                {
                    posY = wall_size;
                    get_player.style.transform = 'translateX('+ posX +'px) translateY('+ posY +'px)';
                    
                }
                //console.log('posX='+posX);
                //console.log('posY='+posY);
            }
            
            // If RIGHT key is pressed
            else if(keyValue == '39')
            {
                //console.log('right');
                posX = posX + wall_size;
                //console.log('after click posx='+posX);
                
                if(posX <= wall_size * 13)
                {
                    get_player.style.transform = 'translateX('+ posX +'px) translateY('+ posY +'px)';
                }
                else if(posX > wall_size*13)
                {
                    posX = wall_size*13;
                    get_player.style.transform = 'translateX('+ posX +'px) translateY('+ posY +'px)';
                    
                    //console.log('x13='+posX);
                }
                //console.log('posXx='+posX);
                //console.log('posYy='+posY);
            }
            
            // If DOWN key is pressed
            else if(keyValue == '40')
            {
                //console.log('down');
                posY = posY + wall_size;
                //console.log('after click posY='+posY);
                
                if(posY <= wall_size*13)
                {
                    get_player.style.transform = 'translateX('+ posX +'px) translateY('+ posY +'px)';
                }
                else if(posY > wall_size*13)
                {
                    posY = wall_size*13;
                    get_player.style.transform = 'translateX('+ posX +'px) translateY('+ posY +'px)';  
                }
                //console.log('posX='+posX);
                //console.log('posY='+posY);
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
   //this.test_walls();
}