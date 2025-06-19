const allCountries = [
  { name: "France", flag: "https://flagcdn.com/w320/fr.png" },
  { name: "Japan", flag: "https://flagcdn.com/w320/jp.png" },
  { name: "Brazil", flag: "https://flagcdn.com/w320/br.png" },
  { name: "Germany", flag: "https://flagcdn.com/w320/de.png" },
  { name: "India", flag: "https://flagcdn.com/w320/in.png" },
  { name: "Canada", flag: "https://flagcdn.com/w320/ca.png" },
  { name: "Australia", flag: "https://flagcdn.com/w320/au.png" },
  { name: "Italy", flag: "https://flagcdn.com/w320/it.png" },
  { name: "Mexico", flag: "https://flagcdn.com/w320/mx.png" },
  { name: "South Korea", flag: "https://flagcdn.com/w320/kr.png" },
  { name: "Argentina", flag: "https://flagcdn.com/w320/ar.png" },
  { name: "United States", flag: "https://flagcdn.com/w320/us.png" },
  { name: "Russia", flag: "https://flagcdn.com/w320/ru.png" },
  { name: "China", flag: "https://flagcdn.com/w320/cn.png" },
  { name: "United Kingdom", flag: "https://flagcdn.com/w320/gb.png" },
  { name: "Spain", flag: "https://flagcdn.com/w320/es.png" },
  { name: "Portugal", flag: "https://flagcdn.com/w320/pt.png" },
  { name: "Sweden", flag: "https://flagcdn.com/w320/se.png" },
  { name: "Norway", flag: "https://flagcdn.com/w320/no.png" },
  { name: "Netherlands", flag: "https://flagcdn.com/w320/nl.png" },
  { name: "Greece", flag: "https://flagcdn.com/w320/gr.png" },
  { name: "Turkey", flag: "https://flagcdn.com/w320/tr.png" },
  { name: "Egypt", flag: "https://flagcdn.com/w320/eg.png" },
  { name: "South Africa", flag: "https://flagcdn.com/w320/za.png" },
  { name: "Indonesia", flag: "https://flagcdn.com/w320/id.png" },
  { name: "Thailand", flag: "https://flagcdn.com/w320/th.png" },
];

let country = document.getElementById("country");
let imageButtons = document.querySelectorAll(".image");
let scoreBox = document.getElementById("score");
let result = document.getElementById("result");

let score = 0;
let correctAnswer = null;

function startGame() {
  // Choose a random country as the correct answer
  correctAnswer = allCountries[Math.floor(Math.random() * allCountries.length)];

  // Display the question
  country.innerText = `Which is the flag of ${correctAnswer.name}?`;

  // Pick 2 other random countries
  let options = [correctAnswer];
  while (options.length < 3) {
    let random = allCountries[Math.floor(Math.random() * allCountries.length)];
    if (!options.includes(random)) {
      options.push(random);
    }
  }

  // Shuffle options so correct one is in random position
  options.sort(() => Math.random() - 0.5);

  // Display flags and set click events
  imageButtons.forEach((btn, i) => {
    btn.innerHTML = `<img src="${options[i].flag}" alt="Flag" width="240px" class="countryImage">`;
    btn.disabled = false;
    btn.onclick = function () {
      if (options[i].name === correctAnswer.name) {
        result.innerText = "✅ Correct!";
        result.style.color = "green";
        score++;
      } else {
        result.innerText = `❌ Wrong! Correct: ${correctAnswer.name}`;
        result.style.color = "red";
      }

      scoreBox.innerText = `Score: ${score}`;
      imageButtons.forEach(button => button.disabled = true);

      setTimeout(startGame, 1000);
    };
  });

  result.innerText = "";
}
startGame();
