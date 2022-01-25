// console.log('connected');rgb	(0, 128, 0) 
const colorful = () => {
  para.style.color = "rgb(50, 18, 140)";
  para.style.fontSize = "50px";
};

const para = document.querySelector("p");
para.addEventListener("click", colorful);
const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

// Regular
console.log(dogs);
//Table
console.table(dogs);
// Interpolated
console.log("And I am IronMan %s", "🤵");
// Styled
console.log(
  "%c Styling the text ",
  "font-size:50px; background:black; color:white"
);
// warning!
console.warn("warning");
// Error :|
console.error("error");
// Info
console.info("This is info.");
// Testing
console.assert(1 == 2, "Assertion!");
// clearing
// console.clear()
// Viewing DOM Elements
console.log(para);
console.dir(para);
// Grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.groupEnd(`${dog.name}`);
});
// counting
console.count('abd');
console.count('xyz');
console.count('xyz');
console.count('xyz');
console.count('abd');
console.count('abd');
console.count('xyz');
console.count('abd');
console.count('xyz');
console.count('abd');
console.count('abd');
console.count('xyz');
console.count('abd');
console.count('xyz');
console.count('abd');
console.count('xyz');
console.count('xyz');
console.count('abd');
// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });

console.table(dogs);
