var person = {
  name: 'Dragos',
  age: 32,
  petOwner: false,
  skills: [ 'html','javascript','css'],
friends: [
  {
    name: 'Larry',
    surname:'Larryson',
    age:30},
    {
      name: 'Steven',
      surname:'Stevenson',
      age: 31
    },
    {
      name:'Carol',
      surname:'Carolson',
      age: 29
    }

]
};
console.log(person.friends);
console.log('Ma numesc ' + person.friends[0].name + ' '+person.friends[0].surname +' si stiu '+ person.skills[0]+ ' si '+ person.skills[2]);
console.log('Sunt'+ person.friends[1].name+ ' si acum invat JavaScript.');
console.log('Am '+ person.friends.length +' prieteni: '+ person.friends[0].name+','+ person.friends[1].name+' si '+ person.friends[2].name);
