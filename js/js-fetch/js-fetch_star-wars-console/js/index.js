console.clear();

const url = "https://swapi.py4e.com/api/people";

function fetchData(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results[2].eye_color);
    });
  console.log("Fetch test...");
}

fetchData(url);
