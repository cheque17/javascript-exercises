# Exercise 08 - Calculator

The goal for this exercise is to create a calculator that does the following:

add, subtract, get the sum, multiply, get the power, and find the factorial

In order to do this please fill out each function with your solution. Make sure to return the value so you can test it in Jest! To see the expected value
take a look at the spec file that houses the Jest test cases.

--------------------------------------
Let's look at the spec file first:
```javascript
const helloWorld = require('./helloWorld');

describe('Hello World', function() {
  test('says "Hello, World!"', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
```
At the very top of the file we use `require()` to import the code from the javascript file (`helloWorld.js`) so that we can test it.

The next block (`describe()`) is the body of the test.  Basically, all it's doing is running your code and testing to see if the output is correct.  The `test()` function describes what should be happening in plain english and then includes the `expect()` function.  For this simple example it should be pretty simple to read.

For now you do not need to worry about how to write tests, but you should try to get comfortable enough with the syntax to figure out what the tests are asking you to do.  Go ahead and run the tests by entering `npm test helloWorld.spec.js` in the terminal and watch it fail.  The output from that command should tell you exactly what went wrong with your code.  In this case, running the `helloWorld()` function should return the phrase 'Hello, World!' but instead it returns an empty string...