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
    
    this.init = function()
    {
        this.display_set();
        this.display_walls();
        this.create_player();
    }
    
    
    this.create_player = function()
    {
        var player_1 = new Player(this.wall_size, this.wall_size, this.wall_size, this);
        player_1.generate_player();
        player_1.player_moves();
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
            //console.log('i='+i);
            for(var j=0 ; j < this.columns ; j++)
            {   
                calcX = j * this.wall_size;
                //console.log('j='+j+'translate='+calcX);
                
                // Generates the border of the game set
                if(j === 0 || i === 0 || i === this.columns-1 || j === this.columns-1)
                {
                    var generate_wall = new Wall(calcX, calcY, this.wall_size);
                    this.walls_positions.push(generate_wall);
                    generate_wall.display_wall();
                    //console.log(this.walls_positions);
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

var game_set = new Set(500);
game_set.init();
