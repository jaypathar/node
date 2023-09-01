/**
 * Use setTimeout to create a delay and then perform some operation. Use setInterval to perform a repeated
 * operation at a certain interval.
 */

// delayed operation using setTimeout.
console.log("Initializing delayed operation...");

setTimeout(() => {
  console.log("Delayed operation completed.");
}, 2000); // delay of 2000 milliseconds (i.e. 2 seconds).

// repeated operation using setInterval
let counter = 0;
console.log("Initializing repeated operation...");
const intervalId = setInterval(() => {
  counter++;
  console.log(`Repeated operation ${counter}`);
  if (counter === 5) {
    clearInterval(intervalId); // Stop the interval after 5 repetitions
    console.log("Repeated operation stopped.");
  }
}, 1000); // interval of 1000 milliseconds (i.e. 1 second).
