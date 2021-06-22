class Scene9 extends Phaser.Scene {
    constructor() {
      super("arafue");
    }
  
    preload ()
    {
      this.load.image('logoo', 'assets/logoo.png');   
    }
    
    create() {
     var logo = this.add.image(700, 300, 'logoo').setScale(1.00)

     this.add.text(650, 300, 'Haz perdido', { fontFamily: 'Arial black', fontSize: 20, color: '#FF0000' })
     this.add.text(700, 700, '', { fontSize: '32px', fill: '#000000' });
      var playButton = this.add.text(600, 450, 'Volver a intentar', { fontFamily: 'Arial black', fontSize: 20, color: '#FF0000' })
     .setInteractive()
     .on('pointerdown', () => this.jugar() );
    }
    jugar() 
    {
     this.scene.start('jueg');
    }
    
  
    
  }