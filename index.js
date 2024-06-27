
// Write your code in this file!
const currentUser='Shalyne Chepngeno'

const welcomeMessage = `'Welcome to Flatbook, ' + ${currentUser}!`;
const excitedWelcomeMessage = welcomeMessage.toUpperCase();
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;
const myString = 'template literal';

const myNumber = 10;

const myBoolean = false;

`Saying that interpolation with ${myString}s is better than concatenation ${90 + myNumber}% of the time is simply ${myBoolean}. But it is pretty cool!

Beware that new lines inside of a ${myString} will be preserved as new lines in the resulting ${typeof myString}!`;
//=> "Saying that interpolation with template literals is better than concatenation 100% of the time is simply false. But it is pretty cool!

// Beware that new lines inside of a template literal will be preserved as new lines in the resulting string!"
