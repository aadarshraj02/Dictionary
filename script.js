const form = document.querySelector("form");
const resultDiv = document.querySelector(".result");
const button = document.querySelector("button");
const input = document.querySelector("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getWordsInfo(input.value);
});

const getWordsInfo = (word) => {
  alert("Word" + word);
};
