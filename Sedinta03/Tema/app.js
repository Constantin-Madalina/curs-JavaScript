var person = {
  firstName:'Constantin',
  lastName:'Madalina',
  email:'madalina.petrescu',
  birthYear: 1992,
  pets:[
    {
      name: 'Ozzy',
      species: 'cat',
      age: 2
    },
    {
      name:'Jerry',
      species:'Mouse',
      age: 70
    },
    {
      name:'Lessy',
      species:'dog',
      age: 10
    },
  ]

};
console.log('Numele meu este '+ person.firstName +' '+ person.lastName+ ' si am '+ person.pets.length +' animale' );
console.log ('Am acelasi email din copilarie: ' + person.email);
console.log('Unul din cele '+person.pets.length+' animale ale mele este '+person.pets[0].species+' si are '+person.pets[0].age+ ' ani' );
console.log( 2019- person.pets[2].age);
var difference = (2019-person.birthYear)-person.pets[0].age;
console.log(difference);
var petName = person.pets[0].name;
console.log('Intre '+person.firstName+' si '+petName+' este o diferenta de '+difference+' ani.');