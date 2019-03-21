var inputRadius = document.getElementById('radius'),
     elementResult = document.getElementById('result')
   form = document.querySelector('form');

   form.addEventListener ('submit', functio(e) {
var radius= inputradius.value || 0,
   
    result=0;

    result= 3.14* radius *radius;
    elementResult.innerText = result;
    e.preventDefault();
   }, false;