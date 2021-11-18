var fondo;
var fondImg
var Baja_California
var Baja_California_Sur
var Campeche
var Chihuahua
var Chiapas
var Coahuila_de_Zaragoza
var Colima
var Durango
var Guanajuato
var Guerrero
var Hidalgo
var Jalisco
var Mexico
var Michoacan_de_Ocampo
var Morelos
var Nayarit
var Nuevo_Leon
var Oaxaca
var Puebla
var Querétaro
var Quintana_Roo
var San_Luis_Potosi
var Sinaloa
var Sonora
var Tabasco
var Tamaulipas
var Tlaxcala
var Veracruz
var Yucatán
var Zacatecas
var Mexico
var aguascalientes
function preload(){
fondImg=loadImage("Imagenes/mapamexico.jpg")

}

function setup() {
  createCanvas(1300,600);
  fondo=createSprite(650,300)
  fondo.addImage(fondImg)
  fondo.scale=0.5

 Baja_California=createSprite(354,122,20,20);
 Baja_California_Sur=createSprite(410,233,20,20);
 Campeche=createSprite(941,432,20,20)
 Chihuahua=createSprite(546,171,20,20)
 Chiapas=createSprite(885,492,20,20)
 Coahuila_de_Zaragoza=createSprite(649,265,20,20)
 Colima=createSprite(605,432,10,10)
 Durango=createSprite(586,300,20,20)
 Guanajuato=createSprite(670,386,20,20)
 Guerrero=createSprite(707,466,20,20)
 Hidalgo=createSprite(722,395,20,20)
 Jalisco=createSprite(607,405,20,20)
 Mexico=createSprite(721,428,10,10)
 Michoacan_de_Ocampo=createSprite(659,425,20,20)
 Morelos=createSprite(721,420,10,10)
 Nayarit=createSprite(580,361,20,20)
 Nuevo_Leon=createSprite(700,271,20,20)
 Oaxaca=createSprite(788,479,20,20)
 Puebla=createSprite(754,436,20,20)
 Querétaro=createSprite(699,388,10,10)
 Quintana_Roo=createSprite(981,406,20,20)
 San_Luis_Potosi=createSprite(680,340,20,20)
 Sinaloa=createSprite(526,285,20,20)
 Sonora=createSprite(463,167,20,20)
 Tabasco=createSprite(878,455,20,20)
 Tamaulipas=createSprite(728,300,20,20)
 Tlaxcala=createSprite(746,422,10,10)
 Veracruz=createSprite(780,427,20,20)
 Yucatán=createSprite(960,369,20,20)
 Zacatecas=createSprite(626,329,20,20)
 Mexico=createSprite(721,428,10,10)
aguascalientes=createSprite(641,362,10,10)
 
}

function draw() {
  background(174,219,132);
  console.log("x: "+ mouseX + "y: "+mouseY);
  if(mousePressedOver(Baja_California)){
    console.log("bajacalifornia")
  }



  drawSprites();
}



