(function() {
  document.addEventListener('DOMContentLoaded', function() {
      var stage = document.querySelector('.stage');

      stage.addEventListener('mouseover', function(){
        DOMlog('Mouseul este pe scena')
      });
      stage.addEventListener('mouseout',function () {
        DOMlog('Mouseul nu este pe scena');
      });
    function DOMlog(msg){
      var paragraphElement=document.createElement('p');
      paragraphElement.classList.add('message');
      paragraphElement.innerText= msg;
      document.body.appendChild(paragraphElement);
    }
  });
  })();
