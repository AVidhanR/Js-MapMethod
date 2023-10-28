const people = [
  {
    name: "Vidhan",
    age: 20,
    position: "Flutter Developer",
  },
  {
    name: "Anna",
    age: 25,
    position: "designer",
  },
  {
    name: "Sakura",
    age: 24,
    position: "data engineer",
  },
  {
    name: "Williams",
    age: 26,
    position: "Android Developer",
  },
];

// Practicing .map() method to extract ages from the 'people' array
const ages = people.map((person) => {
  return person.age;
});

// Practicing .map() method to create a new array with modified properties
const newPeople = people.map((item) => {
  return {
    firstName: item.name,
    oldAge: item.age + 20,
  };
});

// Onto the Web Page


// Using .map() to create an array of HTML strings with names
const names = people.map((person) => {
  return `<h2>${person.name}</h2>`;
});

const div = document.getElementById("result");
div.innerHTML = names.join(""); // Display the names as HTML content in the 'result' div
