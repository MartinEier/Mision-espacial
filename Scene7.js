class Scene7 extends Phaser.Scene {
    constructor() {
      super("final");
    }
  
    preload ()
    {
      this.load.image('logo', 'assets/logo.png');   
    }
    
    create() {
     var logo = this.add.image(700, 300, 'logo').setScale(1.00)
     this.add.text(550, 350, 'Haz conseguido la gasolina', { fontFamily: 'Arial black', fontSize: 20, color: '#FF0000' })
     this.add.text(560, 400, 'Podemos volver a casa', { fontFamily: 'Arial black', fontSize: 20, color: '#FF0000' })
     this.add.text(200, 700, '', { fontSize: '32px', fill: '#000000' });
      var playButton = this.add.text(670, 450, 'menu', { fontFamily: 'Arial black', fontSize: 20, color: '#FF0000' })
     .setInteractive()
     .on('pointerdown', () => this.jugar() );
     var puntajefinal = this.add.text(600, 300, 'Score: ' + score,  { fontFamily: 'Arial', fontSize: 70, color: '#FFFFFF' });
    
     Phaser.Display.Align.In.Center(puntajefinal, this.add.zone(700, 300, 800, 600));
    }
    jugar() 
    {
     this.scene.start('inicio');
    }
    
  
    
  }