
function polyFunction(L, l, h){
  switch (arguments.length) {
    case 1:
      return L*l;
      break;
      case 2:
      return L*l;
      break;
      case 3:
      return 2*(L*l)+2*(l*h)+2*(l*l);
      break;
      default:
      console.warning('Nu avem parametrii corecti');
      break;
  }
}

// var hero={
//   moveRight: function(steps){
//    if (steps>1) {
//      console.log('Ma misc cu '+steps+' pasi la dreapta');
//    } else {
//      console.log('Ma misc cu 1 pas la dreapta');
//    }
//
//   }
// }


var hero={
  move: function(steps, direction){

   if (!steps || isNaN(steps)) {
     steps=1;
  }
     console.log('Ma misc cu '+steps+ 'spre'+direction+' la dreapta');
   },
   moveRight: function(steps){
     this.move(steps,'dreapta');
   },
   moveLeft: function(steps){
     this.move(steps,'Stanga');
   },
   moveUp: function(steps){
     this.move(steps,'sus');
   },
   moveDown: function(steps){
     this.move(steps,'jos');
   }
};
