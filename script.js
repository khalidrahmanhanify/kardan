const subjects = [
  {
    name: "Timetable",
    description: "View Schedule",
    link: "schedule.html",
  },
  {
    name: "Belief System of Islam",
    description: "View All Materials",
    link: "https://mega.nz/folder/rS42SCaa#uW4pak83jPJbdV7i16eCyA",
  },
  {
    name: "Programming Language Concepts",
    description: "View All Materials",
    link: "https://mega.nz/folder/jKwlhaSL#Tw7yEClo0wWwgp_kx9zj5g",
  },
  {
    name: "Web Fundamentals",
    description: "View All Materials",
    link: "https://mega.nz/folder/ae4WyLwC#gP9VaP0yAc9xO4XrURsa-Q",
  },
  {
    name: "Introduction to IT",
    description: "View All Materials",
    link: "https://mega.nz/folder/bKQkgbDT#e9arn9KffYxqiD5JiJ81fA",
  },
  {
    name: "Database System Concepts",
    description: "View All Materials",
    link: "https://mega.nz/folder/DaxwHQBD#RioPDqSMaZOlqIshAnTwMQ",
  },
];

const container = document.querySelector("main ul");
container.innerHTML = "";
subjects.forEach((subject) => {
  const html = `
    <li>
        <a href="${subject.link}">
            <h2>${subject.name}</h2>
            <p class="details">${subject.description}</p>
        </a>
    </li>
    `;
  container.insertAdjacentHTML("beforeend", html);
});
const labelYear = document.querySelector(".year");
const date = new Date();
const curYear = date.getFullYear();
labelYear.textContent = curYear;

// Lazy Loading images
const blurDiv = document.querySelectorAll(".blur-div");
blurDiv.forEach((div) => {
  const img = div.querySelector("img");
  function loaded() {
    div.classList.add("loaded");
  }
  if (img.complete) {
    loaded();
  } else {
    img.addEventListener("load", loaded);
  }
});
