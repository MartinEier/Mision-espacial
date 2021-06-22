class Scene10 extends Phaser.Scene {
    constructor() {
      super("ganarr");
    }
  
    preload ()
    {
      this.load.image('logooo', 'assets/logooo.png');   
    }
    
    create() {
      this.add.image(700, 300, 'logooo');
      this.add.text(450, 350, 'Tienes 45 segundo para conseguir la gasolina', { fontFamily: 'Arial black', fontSize: 20, color: '#FF0000' })
      this.add.text(410, 300, 'Haz pasado el primer nivel, se te atorgo una vida más', { fontFamily: 'Arial black', fontSize: 20, color: '#FF0000' })
      var restartButton = this.add.text(680, 400, 'Siguiente nivel', { fontFamily: 'Arial black', fontSize: 20, color: '#FF0000' })
      .setInteractive()
      .on('pointerdown', () => this.seguir() );
    }
  
    seguir() {
      this.scene.start('juego');
    }
  
    
  }