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

// Practicing .map() method
const ages = people.map((person) => {
  return person.age;
});

const newPeople = people.map((item) => {
  return {
    firstName: item.name,
    oldAge: item.age + 20,
  };
});

//Onto the Web Page
const names = people.map((person) => {
  return `<h2>${person.name}</h2>`;
});

const div = document.getElementById("result");
div.innerHTML = names.join("");
