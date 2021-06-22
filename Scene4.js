class Scene4 extends Phaser.Scene {
    constructor() {
      super("integrantes");
    }
  
    preload ()
    {
      this.load.image('creditos', 'assets/creditos.png');   
    }
    
    create() {
      this.add.image(700, 300, 'creditos');
  
      var restartButton = this.add.text(680, 400, 'Atras', { fontFamily: 'Arial black', fontSize: 20, color: '#FF0000' })
      .setInteractive()
      .on('pointerdown', () => this.reiniciar() );
    }
  
    reiniciar() {
      this.scene.start('inicio');
    }
  
    
  }