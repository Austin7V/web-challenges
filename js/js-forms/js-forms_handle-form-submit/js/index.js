console.clear();

const form = document.querySelector('[data-js="form"]');

const firstNameInput = form.elements.firstName;
const ageInput = form.elements.age;
const badnessInput = form.elements.badness;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstName = firstNameInput.value;
  const age = ageInput.value;
  const badness = badnessInput.value;

  const data = {
    firstName: firstName,
    age: age,
    badness: badness,
  };

  console.log(data);

  const ageBadnessSum = Number(age) + Number(badness);
  console.log(
    `The age-badness-sum of "${data.firstName}" is "${ageBadnessSum}"`
  );

  form.reset();
  firstNameInput.focus();
});
