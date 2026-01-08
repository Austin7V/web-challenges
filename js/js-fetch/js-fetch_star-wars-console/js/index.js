console.clear();

const url = "https://swapi.py4e.com/api/people";

/* function fetchData(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results[2].eye_color);
    });
  console.log("Fetch test...");
}

fetchData(url); */

async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  /* console.log(data.results[2].eye_color); */
  const character = data.results[2];
  console.log("name:", character.name, "eye_color:", character.eye_color);
  /*   console.log("Fetch test..."); */
}

fetchData(url);
