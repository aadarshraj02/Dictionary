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
  resultDiv.innerHTML = `
  <h2><strong>WORD: </strong>${data[0].word}</h2>
  <p>${data[0].meanings[0].partOfSpeech}</p>
  <strong>Meaning: </strong> <p>${
    data[0].meanings[0].definitions[0].definition === undefined
      ? "Not Found"
      : data[0].meanings[0].definitions[0].definition
  }</p>
  <strong>Example: </strong> <p>${
    data[0].meanings[0].definitions[0].example === undefined
      ? "Not Found"
      : data[0].meanings[0].definitions[0].example
  }</p>
  <p><strong>Antonyms: </strong></p>
  `;
  if (data[0].meanings[0].definitions[0].antonyms.length === 0) {
    resultDiv.innerHTML += `<span>Not Found</span>`;
  } else {
    for (
      let i = 0;
      i < data[0].meanings[0].definitions[0].antonyms.length;
      i++
    ) {
      resultDiv.innerHTML += `<li>${data[0].meanings[0].definitions[0].antonyms[i]}</li>`;
    }
  }
  resultDiv.innerHTML += `<a href = ${data[0].sourceUrls} target = "_blank">Read More</a>`
};
