// Initial Test Data

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

// Functions

function createFactsList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `
      <li class="fact">
        <p>
          ${fact.text}
          <a
            class="source"
            href=${fact.source}
            target="_blank"
            >Source</a
          >
        </p>
        <span class="tag ${fact.category}-tag">${fact.category}</span>
        <div class="vote-buttons">
          <button>👍 ${fact.votesInteresting}</button>
          <button>🤯 ${fact.votesMindblowing}</button>
          <button>⛔️ ${fact.votesFalse}</button>
        </div>
      </li>
    `
  );
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

// Selecting DOM Elements

const btn = document.querySelector(".btn-open");
const form = document.querySelector("#fact-form");
const factsList = document.querySelector(".facts-list");

// Create DOM Elements: Render facts in list

factsList.innerHTML = "";
createFactsList(initialFacts);

// Toggle Form Visibility

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.innerHTML = "Close";
  } else {
    form.classList.add("hidden");
    btn.innerHTML = "Share a fact";
  }
});
