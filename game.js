var config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    autoResize: true,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: { y: 1000 }
        }
    },
    scene: [ Scene1, Scene2, Scene3, Scene4, Scene5, Scene6, Scene7, Scene8, Scene9, Scene10, ]
};

var game = new Phaser.Game(config);

var jugador;

var arriba,derecha,izquierda;

const velocidad = 350;
const alturaSalto = -530;

var mapa; 
var gasolina;
var gasolinaa;
var logo;
var score;
var gameOver;
var gameeOver;
var player;
var player2;
var stars;
var cohete;
var bombs;
var platforms;
var cursors;
var scoreText;
var contadorama = 0;
var contadornar = 0;
var cameras
var playButton;
var timedEvent;
var initialTime;
var timeText; 
var gasolina;
var level = 0;
var enemigo; 
var enemigoo;
var enemigooo;
var enemigoooo;
var animacion;
var gameOverButton;
var puntajefinal;
var vidaText;
var vida;
var power;
var Sintitulo;
var Sintituloo;
var map;
var tile;
var tilee;
var ganarr;
var ganar;
var porcentajeText;
var coin;
var salto;
var knock;
var go;
var nivelcompleto;
var musica; 
var Dead;
var gameeOver;
var pause;
var stop;
