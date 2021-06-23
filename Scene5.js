class Scene5 extends Phaser.Scene {
    constructor() {
      super("jugar");
    }
  
    preload ()
    {
      this.load.image('logo', 'assets/logo.png');   
    }
    
    create() {
     var logo = this.add.image(700, 300, 'logo').setScale(1.00)
     this.add.text(480, 250, 'Necesitamos salir de la nave con mas oxigeno', { fontFamily: 'Arial black', fontSize: 20, color: '#FF0000' })
     this.add.text(430, 300, 'Tienes 45 segundos para conseguir el tubo de oxigeno', { fontFamily: 'Arial black', fontSize: 20, color: '#FF0000' })
     this.add.text(200, 700, '', { fontSize: '32px', fill: '#000000' });
      var playButton = this.add.text(580, 450, 'toca para comenzar', { fontFamily: 'Arial black', fontSize: 20, color: '#FF0000' })
     .setInteractive()
     .on('pointerdown', () => this.jugar() );
    }
    
      
    
    jugar() 
    {
      
     this.scene.start('jueg');
    }
    
  
   
}