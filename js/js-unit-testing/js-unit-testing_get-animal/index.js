export function getAnimal(race) {
  if (!race) {
    return "I do not like animals at all!";
  }
  if (race === "cats") {
    return `I totally love cats!`;
  }
  if (race === "dogs") {
    return `I like dogs!`;
  }
}
