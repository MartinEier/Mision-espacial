class Scene1 extends Phaser.Scene {
    constructor() {
      super('inicio');
      
    }

  preload() 
   {
        this.load.image('logo', 'assets/logo.png');
        this.load.spritesheet('personaje1', 'assets/sprites/personaje1.png', { frameWidth: 57, frameHeight: 62 });
        this.load.tilemapTiledJSON('mapa', 'assets/mapa/mapa.json');
        this.load.image('tiles','assets/mapa/tileSets.png');
        this.load.image('gasolina','assets/gasolina.png');
    
        this.load.image('gasolinaa','assets/gasolinaa.png');
    }

   create(){
    
    var logo = this.add.image(700, 300, 'logo').setScale(1.00)
      
    var playButton = this.add.text(670, 400, 'Jugar', { fontFamily: 'Arial black', fontSize: 20, color: '#FF0000' })
   .setInteractive()
   .on('pointerdown', () => this.jugar() );
   var playButton = this.add.text(655, 450, 'Creditos', { fontFamily: 'Arial black', fontSize: 20, color: '#FF0000' })
   .setInteractive()
   .on('pointerdown', () => this.Creditos() );
   }

   jugar() 
   {
    this.scene.start('jugar');
   }
   Creditos() 
   {
    this.scene.start('integrantes');
   }


}