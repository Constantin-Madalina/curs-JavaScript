var person = {
    firstName: 'Constantin',
    lastName: 'Madalina',
    birthYear: 1992,
    zipCode: 001540,
    pets: [
        {
            name:'Pet 1',
            age: 2
        },
        {
            name:'Pet 2',
            age: 10
        },
        {
            name:'Pet 3',
            age: 8
        },
    ]
};
var result= person.firstName+' , '+ person.pets[0].name+' , '+ person.pets[1].name +' , '+person.pets[2].name + ' locuiesc in aceeasi casa.';
document.getElementById("prop01").innerText = result;
console.log(person.firstName+' , '+ person.pets[0].name+' , '+ person.pets[1].name +' , '+person.pets[2].name + ' locuiesc in aceeasi casa.');
var difference = person.pets[2].age-person.pets[0].age;
document.getElementById("prop02").innerText= difference;
document.getElementById("prop03").innerText= 'Ma numesc '+ person.firstName +' ,m-am nascut in '+ person.birthYear + ' si codul meu postal este: '+person.zipCode;