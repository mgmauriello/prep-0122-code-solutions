var person = {
  firstName: 'Bilbo ',
  lastName: 'Baggins',
  hobby: 'Hording the One Ring'
};

console.log(person);

person.job = 'author';
person.previousJob = 'adventuring with dwarves and a wizard';

var fullName = person.firstName + person.lastName;
console.log('Their full name is: ' + fullName);

console.log('Their current job is: ' + person.job);
console.log('Their previous job is: ' + person.previousJob);

console.log('The complete person object: ', person);
