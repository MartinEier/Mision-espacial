class Scene8 extends Phaser.Scene {
    constructor() {
      super('jueg');
      
    }
    preload() {
     
        this.load.spritesheet('personaje1', 'assets/sprites/personaje1.png', { frameWidth: 57, frameHeight: 62 });
        this.load.tilemapTiledJSON('mapaa', 'assets/NAVE/map.json');
        this.load.image('tile','assets/NAVE/tile.png');
        this.load.image('tile','assets/NAVE/tilee.png');
        this.load.image('star', 'assets/star.png');
        this.load.image('power', 'assets/power.png');
        this.load.image('enemigo', 'assets/enemigo.png', { frameWidth: 32, frameHeight: 48 }); 
        this.load.image('enemigoo', 'assets/enemigoo.png', { frameWidth: 32, frameHeight: 48 }); 
        this.load.image('enemigoo', 'assets/enemigooo.png', { frameWidth: 32, frameHeight: 48 });
        this.load.image('enemigoo', 'assets/enemigoooo.png', { frameWidth: 32, frameHeight: 48 });
        this.load.audio('coin', 'assets/Sonido/coin.wav');
        this.load.audio('go', 'assets/Sonido/go.wav');
        this.load.audio('golpe', 'assets/Sonido/golpe.mp3');
        this.load.audio('nivelcompleto', 'assets/Sonido/nivelcompleto.wav');
        this.load.audio('salto', 'assets/Sonido/salto.wav');
        this.load.audio('musica','assets/Sonido/musica.mp3');
        this.load.image('Dead', 'assets/sprites/Dead.png');
        this.load.image('enemigo1', 'assets/enemigo1abajo.png', { frameWidth: 32, frameHeight: 48 }); 
        this.load.image('enemigo2', 'assets/enemigo2abajo.png', { frameWidth: 32, frameHeight: 48 }); 
        this.load.image('enemigo3', 'assets/enemigo3abajo.png', { frameWidth: 32, frameHeight: 48 }); 
        this.load.image('enemigo4', 'assets/enemigo4abajo.png', { frameWidth: 32, frameHeight: 48 }); 
        this.load.image('enemigo5', 'assets/enemigo5abajo.png', { frameWidth: 32, frameHeight: 48 }); 
    }
    create() {
        var mapaa;
        var Sintitulo;
        var solidos;
        
        var ganarr;
        var ganar;
        var porcentaje;
        //var golpee;
        //var go;
        //var nivelcompleto;
        //var musica; 
        //var salto;
        var enemigo1;
        var enemigo2;
        var enemigo3;
        var enemigo4;
        var enemigo5;
        
        Dead = this.add.image('Dead');
        coin = this.sound.add('coin');
        knock = this.sound.add('golpe');
        go = this.sound.add('go')
        nivelcompleto = this.sound.add('nivelcompleto')
        salto = this.sound.add('salto')
        musica = this.sound.add('musica')
        musica.play();
        

        mapaa = this.make.tilemap({ key: 'mapaa' });
        var Sintitulo = mapaa.addTilesetImage('tile', 'tiles');
        
        var solidos = mapaa.createDynamicLayer('Solidoss', Sintitulo, 0, 0);
        solidos.setCollisionByProperty({ solido: true });
        
        jugador = this.physics.add.sprite(100,100,'personaje1',0);
        jugador.setSize(30,0);
        
        this.anims.create({
            key: 'caminar',
            frames: this.anims.generateFrameNumbers('personaje1', { start: 1, end: 8 }),
            frameRate: 10
        });
    
        this.cameras.main.setBounds(0, 0, mapaa.widthInPixels, mapaa.heightInPixels);
        this.cameras.main.startFollow(jugador);
    
        arriba = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        izquierda = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        derecha = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        enemigo1 = this.physics.add.sprite(900, 890, 'enemigo1');
        enemigo1.setScale(0.5); 

        enemigo2 = this.physics.add.sprite(1050, 890, 'enemigo2');
        enemigo2.setScale(0.5); 

        enemigo3 = this.physics.add.sprite(1850, 890, 'enemigo3');
        enemigo3.setScale(0.5); 

        enemigo4 = this.physics.add.sprite(2400, 890, 'enemigo4');
        enemigo4.setScale(0.5); 

        enemigo5 = this.physics.add.sprite(3750, 890, 'enemigo5');
        enemigo5.setScale(0.5);

        enemigo = this.physics.add.sprite(1200, 380, 'enemigo');
        enemigo.setBounce(0.2);
        enemigo.setCollideWorldBounds(true);
        enemigo.setScale(0.5); 
        enemigo.setVelocity(Phaser.Math.Between(-200, 500), 20);

        enemigoo = this.physics.add.sprite(700, 380, 'enemigoo');
        enemigoo.setBounce(0.2);
        enemigoo.setCollideWorldBounds(true);
        enemigoo.setScale(0.5); 
        enemigoo.setVelocity(Phaser.Math.Between(-200, 500), 20);

        enemigooo = this.physics.add.sprite(2200, 300, 'enemigoo');
        enemigooo.setBounce(0.2);
        enemigooo.setCollideWorldBounds(false);
        enemigooo.setScale(0.5); 
        enemigooo.setVelocity(Phaser.Math.Between(-200, 500), 20);

        enemigoooo = this.physics.add.sprite(2800, 300, 'enemigoo');
        enemigoooo.setBounce(0.2);
        enemigoooo.setCollideWorldBounds(false);
        enemigoooo.setScale(0.5); 
        enemigoooo.setVelocity(Phaser.Math.Between(-500, 500), 20);

        if (cursors =! undefined){
            cursors = this.input.keyboard.createCursorKeys();
        } 

        power = this.physics.add.group({
            key: 'power',
            repeat: 1,
            setXY: { x: 4750, y: 100,  }
            //(power.setScale(0.5))
        });
        stars = this.physics.add.group({
            key: 'star',
            repeat: 25,
            setXY: { x: 200, y: 200, stepX: 400 }
         });
        stars.children.iterate(function (child) {

        
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
              
        });
        
        
        this.physics.add.collider(jugador, solidos);
        this.physics.add.collider(stars, solidos);
        this.physics.add.collider(power, solidos);
        this.physics.add.collider(enemigo, solidos);
        this.physics.add.collider(enemigoo, solidos);
        this.physics.add.collider(enemigooo, solidos);
        this.physics.add.collider(enemigoooo, solidos);
        this.physics.add.collider(enemigo1, solidos);
        this.physics.add.collider(enemigo2, solidos);
        this.physics.add.collider(enemigo3, solidos);
        this.physics.add.collider(enemigo4, solidos);
        this.physics.add.collider(enemigo5, solidos);

        this.physics.add.overlap(jugador, stars, this.collectStar, null, this);
        this.physics.add.overlap(jugador, power, this.collectpower, null, this);
        this.physics.add.overlap(enemigo, jugador, this.collectenemigoo, null, this);
        this.physics.add.overlap(enemigoo, jugador, this.collectenemigo, null, this);
        this.physics.add.overlap(enemigooo, jugador, this.collectenemigooo, null, this);
        this.physics.add.overlap(enemigoooo, jugador, this.collectenemigoooo, null, this);
        this.physics.add.overlap(enemigo1, jugador, this.collectenemigo1, null, this);
        this.physics.add.overlap(enemigo2, jugador, this.collectenemigo2, null, this);
        this.physics.add.overlap(enemigo3, jugador, this.collectenemigo3, null, this);
        this.physics.add.overlap(enemigo4, jugador, this.collectenemigo4, null, this);
        this.physics.add.overlap(enemigo5, jugador, this.collectenemigo5, null, this);


        score = 0;
        gameeOver = false;
        this.vida = 2;

        initialTime = 45

        timedEvent = this.time.addEvent({ delay: 1000, callback: this.onSecond, callbackScope: this, loop: true });
        timeText = this.add.text(400, 600, '', { fontSize: '32px', fill: '#000000' });
        timeText.scrollFactorX = 0;
        timeText.scrollFactorY = 0;

        scoreText = this.add.text(200, 600, 'Score: 0', { fontSize: '32px', fill: '#000000' });
        scoreText.scrollFactorX = 0;
        scoreText.scrollFactorY = 0;

        
        vidaText = this.add.text(10, 600, 'vida:' + this.vida,  { fontSize: '32px', fill: '#000000' }); 
        vidaText.scrollFactorX = 0; 
        vidaText.scrollFactorY = 0;

        //porcentajeText = this.add.text(170, 600, '%', { fontSize: '32px', fill: '#000000' });
        //porcentajeText.scrollFactorX = 0; 
        //porcentajeText.scrollFactorY = 0;
    }
    update()
    {
        
        jugador.body.setVelocityX(0);
       
        if(izquierda.isDown){
            jugador.body.setVelocityX(-velocidad);
            jugador.flipX = true;
        }
       
        if(derecha.isDown){
            jugador.body.setVelocityX(velocidad);
            jugador.flipX = false;
        }
       
        if(arriba.isDown && jugador.body.onFloor()){
            jugador.body.setVelocityY(alturaSalto);
            salto.play();
        }
       
        if((izquierda.isDown || derecha.isDown) && jugador.body.onFloor()){
            jugador.anims.play('caminar',true);
        }else if(!jugador.body.onFloor()){
            jugador.setFrame(9);
        }else{
            jugador.setFrame(0);
        }
    }

        collectStar (player, star, ) 
        {
            
          star.disableBody(true, true);
          coin.play();
           
          score += 10;   
          
          scoreText.setText('Score:' + score);
           
       
           
              
           
            
               
            //var bomb = bombs.create(x, 16, 'bomb');
            //bomb.setBounce(1);
            //bomb.setCollideWorldBounds(true);
            //bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
            //bomb.allowGravity = false;
            //level += 1
             //initialTime = 30 - level; 
          
           
        } 
        collectenemigo (enemigo, player ) 
        {
          enemigo.disableBody(true, true);
          knock.play();
    
          this.vida = this.vida - 1;
          console.log('vida:' + this.vida)   
          vidaText.setText('vida: ' + this.vida);
          if (this.vida == 0) {
            player.disableBody(true, true);
            this.gameeOver();
            }  
    
        }
        collectenemigoo (enemigoo, player ) 
        {
          enemigoo.disableBody(true, true);
          knock.play();
    
          this.vida = this.vida - 1;
          console.log('vida:' + this.vida)   
          vidaText.setText('vida: ' + this.vida);
          if (this.vida == 0) {
            player.disableBody(true, true);
            
            this.gameeOver();
            
            } 
        }
        collectenemigooo (enemigooo, player ) 
        {
          enemigooo.disableBody(true, true);
          knock.play();
    
          this.vida = this.vida - 1;
          console.log('vida:' + this.vida)   
          vidaText.setText('vida: ' + this.vida);
          if (this.vida == 0) {
            player.disableBody(true, true);
            this.gameeOver();
            } 
        }
        collectenemigoooo (enemigoooo, player ) 
        {
          enemigoooo.disableBody(true, true);
          knock.play();
    
          this.vida = this.vida - 1;
          console.log('vida:' + this.vida)   
          vidaText.setText('vida: ' + this.vida);
          if (this.vida == 0) {
            player.disableBody(true, true);
            this.gameeOver();
            }  
        }

        collectenemigo1(enemigo1, player )
        {
         enemigo1.disableBody(true, true);
         player.disableBody(true, true);
         this.gameeOver();
        }
        collectenemigo2(enemigo2, player )
        {
         enemigo2.disableBody(true, true);
         player.disableBody(true, true);
         this.gameeOver();
        }
        collectenemigo3(enemigo3, player )
        {
         enemigo3.disableBody(true, true);
         player.disableBody(true, true);
         this.gameeOver();
        }
        collectenemigo4(enemigo4, player )
        {
         enemigo4.disableBody(true, true);
         player.disableBody(true, true);
         this.gameeOver();
        }
        collectenemigo4(enemigo4, player )
        {
         enemigo4.disableBody(true, true);
         player.disableBody(true, true);
         this.gameeOver();
        }
        collectenemigo5(enemigo5, player )
        {
         enemigo5.disableBody(true, true);
         player.disableBody(true, true);
         this.gameeOver();
        }
    collectpower (player, power,)
    {
      power.disableBody(true, true);
      this.ganar()

    }
    onSecond() 
   {
      if (! gameOver)
      {       
          initialTime = initialTime - 1; // One second
          timeText.setText('Time: ' + initialTime);
          if (initialTime == 0) {
              timedEvent.paused = true;
              this.gameeOver();
              
            }            
      }

    }
    gameeOver() 
    {
        go.play();
        setTimeout(() => {
        musica.stop();
        this.scene.start('arafue')}, 1000);
    }
    ganar()
    {
      musica.stop();
      this.scene.start('ganarr')
       nivelcompleto.play();
    }
}
