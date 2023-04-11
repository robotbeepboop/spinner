//process.stdout.write('hello from spinner1.js... \rheyyy\n');
//will do 2 spins
let timeout = 100; //starts at 100ms and goes up by 200ms
let spin = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];

for (let x of spin) {
  setTimeout(() => {
    process.stdout.write(x);
  }, timeout);
  if (timeout === 1700) { //added an if statement to prevent code from running indefinitely
    return;
  }
  timeout += 200;
}
