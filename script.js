const form = document.querySelector("form");
const resultDiv = document.querySelector(".result");
const button = document.querySelector("button");
const input = document.querySelector("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getWordsInfo(input.value);
});

const getWordsInfo = async (word) => {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};
