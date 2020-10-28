/// <reference path="typings/phaser.d.ts" />

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
    default: 'arcade',
    arcade: {
    gravity: { y: 300 },
    debug: false
    }
    },
    scene: {
    preload: preload,
    create: create,
    update: update,
    }
    };
    

    var scoreText;
    var player;
    var platforms;
    var cursors;
    var game = new Phaser.Game(config);
    
    function preload() {
    this.load.image('background',"assets/1.jpg");
    this.load.spritesheet('dude',"assets/dude.png" ,{ frameWidth: 32, frameHeight: 45 });
    }
    function create() 
    {
        this.map = this.add.tileSprite(0,0,800,450,"background");
        //this.add.image(400, 300, 'background');
        platforms = this.physics.add.staticGroup();
        player = this.physics.add.sprite(20, 600, 'dude');
        this.map.displayHeight = this.sys.game.config.height;
        this.map.scaleX = this.map.scaleY;

        this.map.y = game.config.height/2;
        this.map.x = game.config.width/2;
        this.map.x = this.map.displayWidth*.5;

         // The player and its settings
    //  Player physics properties. Give the little guy a slight bounce.
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    //  Our player animations, turning, walking left and walking righ

    //  Input Events
    cursors = this.input.keyboard.createCursorKeys();

        scoreText = this.add.text(16,16, 'score: 0', {fontSize: '32px', fill: '#FF0000'});
    }
    function update () {
    this.map.tilePositionX +=  5;
    }