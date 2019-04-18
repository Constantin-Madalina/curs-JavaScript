var paragraphElement= document.createElement('p'),
userAgentString=navigator.userAgent,
message ='Nu stim ce broser folosesti.';
if(userAgentString.indexOf('Chrome') >= 0 ){
  message=' Navighezi folosind Chrome';
}


if(userAgentString.indexOf('Firefox') >= 0 ){
  message=' Navighezi folosind Firefox';
}
if(userAgentString.indexOf('Edge') >= 0 ){
  message=' Navighezi folosind Edge';
}

paragraphElement.innerText=message ;
document.body.appendChild(paragraphElement);
setTimeout(function(){
  paragraphElement.remove();
},5000);
