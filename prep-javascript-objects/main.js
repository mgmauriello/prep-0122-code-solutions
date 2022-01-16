var person = {
  firstName: 'Bilbo ',
  lastName: 'Baggins',
  hobby: 'Hording the One Ring',
  job: 'author',
  previousJob: 'adventuring with dwarves and a wizard'
};

console.log(person);

var fullName = person.firstName + person.lastName;
console.log('Their full name is: ' + fullName);

console.log('Their current job is: ' + person.job);
console.log('Their previous job is: ' + person.previousJob);

console.log('The complete person object: ', person);
