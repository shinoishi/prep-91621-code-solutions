function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

var addTwoNumbersResult = addTwoNumbers(2, 2);
console.log('addTwoNumbers Exercise:', addTwoNumbersResult);

function convertHoursToMinutes(x) {
  return x * 60;
}

var convertHoursToMinutesResult = convertHoursToMinutes(2);
console.log('convertHoursToMinutes Exercise:', convertHoursToMinutesResult);

function getGreeting(x) {
  return '"Hello' + ' ' + x + '!"';
}

var getGreetingResult = getGreeting('World');
console.log('getGreeting Exercise:', getGreetingResult);

function addAndMultiplyBy5(x, y) {
  return (x + y) * 5;
}

var addAndMultiplyBy5Result = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyBy5 Exercise:', addAndMultiplyBy5Result);

function getCircleCircumference(x) {
  return x * 2 * Math.PI;
}

var getCircleCircumferenceResult = getCircleCircumference(5);
console.log('getCircleCircumference Exercise:', getCircleCircumferenceResult);

function getFullName(x, y) {
  return x + ' ' + y;
}

var getFullNameResult = getFullName('"Juan', 'Ramirez"');
console.log('getFullName Exercise:', getFullNameResult);

function cube(x) {
  return Math.pow(x, 3);
}

var cubeResult = cube(5);
console.log('cube Exercise:', cubeResult);
