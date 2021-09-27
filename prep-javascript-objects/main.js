var person = {
  firstName: 'Shin',
  lastName: 'Oishi',
  hobby: 'Training'
};
console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);

person.job = 'Ninja';
console.log("The person's current job is:", person.job);

person.perviousJob = 'Samurai';
console.log("The person's previous job is:", person.perviousJob);

console.log('The complete person object:', person);
