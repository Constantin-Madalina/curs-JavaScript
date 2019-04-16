var person = {
  firstName: 'Dragos',
  lastName: 'Iordache',
  birthYear: 1987, 
  pets: [{
    name: 'Twix',
    species: 'papagal',
    age: 4
  }, {
    name: 'Mars',
    species: 'caine',
    age: 2, 
  }, {
    name: 'Bounty',
    species: 'hamster',
    age: 4
  }, {
    name: 'Lion',
    species: 'pisica',
    age: 10
  }]
};
console.log('----------Ex01----------------');

person.pets.forEach(element => {
  console.log(element.name);
});

console.log('----------Ex02----------------');

var s=0;
for(i=0;i<person.pets.length;i++){
  s+=person.pets[i].age;
}
console.log('Suma anilor este '+ s);

console.log('----------Ex03----------------');
person.pets.forEach(element => {
  console.log(element.name+' este '+ element.species+ ' si are '+element.age+' ani');
  
});
console.log('----------Ex04----------------');
var dif=0;


for(i=0;i<person.pets.length;i++){
  dif=(2019-person.birthYear)-person.pets[i].age;
 console.log('Intre Dragos si '+ person.pets[i].name +' este o diferenta de '+ dif+' ani.');
   
}