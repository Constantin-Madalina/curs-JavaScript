var car= {
  make:'Audi',
  color:'black',
  wheels: 4,
  speed: 50,
  topSpeed:160,
  topReverseSpeed:-50,
  isTrunkOpen:false,
  areLightsOn: false,
  accelerate: function () {
    this.speed++;
  },
  decelerate: function () {
    this.speed--;
  },
  stop: function(){
    this.speed=0;
  },


  setSpeed:function(Speed){
 if (Speed>=this.topSpeed) {
   this.speed= this.topSpeed;
 } else
 if(Speed<=this.topReverseSpeed) {
    this.speed= this.topReverseSpeed;
 } else {
   this.speed= speed;
 }
},
turnONLights: function(){
  this.areLightsOn=true;
},
turnOffLights: function(){
  this.areLightsOn=false;
},
flashLights: function(){
  var self=this;
  self.turnOnLights();
  // se poate accesa si fara window
  window.setTimeout(function(){
    self.turnOffLights();
  },3000);
},
toggleLights: function(){
  this.areLightsOn= !this.areLightsOn;
}
};
console.log('---------------Ex01------------------');
console.log('Masina era marca '+car.make+' si se deplaseaza cu '+car.speed+ ' km/h.');

console.log('---------------Ex02------------------');
var i=0;
 for ( i = 0; i <5; i++) {
   car.decelerate();

    }

console.log('Viteza noua este '+car.speed+' km/h');

console.log('---------------Ex03------------------');
car.stop();
console.log('Viteza noua este '+car.speed+' km/h');


console.log('---------------Ex06------------------');
