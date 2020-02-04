/* 1. Write a function that outputs a greeting. It should take an argument “name” and greet the individual.
Call your function using console.log(myFunction(“some name”));*/

let name = "Joseph";
function greeting() {
  return "Hello " + name;
}

console.log(greeting());

/* 2. Write a function that gives the approximate circumference of a circle given the diameter.*/

function circumference(c) {
  return 3.14 * 2 * c;
}

console.log(circumference(5));

/* 3. Write one function that calls another function.
Inside of the first function, insert a console.log(...) statement.
Next, insert the call to the second function.
The second function should have its own console.log(...) statement inside.
Finally, after the call to the second function, insert another console.log(...) statement.*/

const add = (n, m) => {
  return result(n, m);
};

console.log(add(n, m));

const result = (n, m) => {
  return n + m;
};

console.log(add(2, 7));

/* 4. Call your first function in your program and observe the output. What happens in what order and why?*/

/* 5. Write a function that causes the stack to overflow.*/

/*const greeting = () => {
  return hello();
};

const hello = () => {
  return greeting();
};

console.log(hello());*/
