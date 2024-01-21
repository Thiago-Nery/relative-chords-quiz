import { chords } from "./data.js";

const mainChord = document.getElementById("main-chord");
const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", handleSubmit);
const relativeChord = document.getElementById("relative-chord");
relativeChord.addEventListener("keypress", (event) => {
  if (event.key === "Enter") handleSubmit();
});
const result = document.getElementById("result");
let currentQuizChord;

function getRandomChord() {
  return chords[Math.floor(Math.random() * chords.length)];
}

function getQuizText(randomChord) {
  mainChord.innerText = `Qual é o acorde relativo de ${randomChord.chord} ?`;
}

function getNextQuestion() {
  const randomChord = getRandomChord();
  getQuizText(randomChord);
  currentQuizChord = randomChord;
  relativeChord.value = "";
  result.innerText = "";
}

function handleSubmit() {
  const randomChord = getRandomChord();
  if (mainChord.textContent === "Pressione 'Tentar' para iniciar o quiz") {
    getQuizText(randomChord);
    currentQuizChord = randomChord;
  } else {
    if (
      relativeChord.value.toLowerCase() ===
      currentQuizChord.relative.toLowerCase()
    ) {
      result.innerText = "Correto!";
      setTimeout(getNextQuestion, 1500);
    } else {
      result.innerText = "Errado! Tente Novamente";
    }
  }
}
