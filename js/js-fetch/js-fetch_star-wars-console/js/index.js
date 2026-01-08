console.clear();

const url = "https://swapi.py4e.com/api/people";

function fetchData(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
  console.log("Fetch request sent...");
}

fetchData(url);
