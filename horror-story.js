// caching elements
const storyText = document.getElementById("story-text"); // paragraph for story
const nextBtn = document.getElementById("next-btn"); // button for next
const quizContainer = document.getElementById("quiz-container"); // quiz section
const options = document.querySelectorAll(".option"); // all quiz answers

// adapted story from "Casting the Runes"
let storyParts = [
    "a researcher at the british museum, mr. dunning, found a mysterious letter on his desk…",
    "it was from a man named karswell—a scholar of the occult, known for his dangerous beliefs…",
    "inside the letter was a slip of paper, covered in strange symbols...",
    "at first, dunning thought nothing of it. but then… strange things began to happen.",
    "shadows moved in the corners of his vision. whispers echoed in empty rooms.",
    "quiz time! what happens when someone is given the cursed runes?", // quiz appears here
    "dunning realized the truth—he had only a few days before something would come for him.",
    "the only way to survive was to pass the runes to someone else… or face the unknown.",
    "end of the story... or is it?"
];

let currentPart = 0; // track the part of the story
let quizAnswered = false; // check if the quiz was completed

// event listener for next button
nextBtn.addEventListener("click", function() {
    if (!quizAnswered) {
        if (currentPart === 5) {
            nextBtn.style.display = "none";
            quizContainer.style.display = "block";
            return;
        }
    }

    // move to the next story part
    if (currentPart < storyParts.length - 1) {
        currentPart++;
        storyText.textContent = storyParts[currentPart];
    }

    // hide next button at the last part of the story
    if (currentPart === storyParts.length - 1) {
        nextBtn.style.display = "none";
    }
});

// looping through quiz options
options.forEach(option => {
    option.addEventListener("click", function() {
        if (option.dataset.answer === "right") {
            option.style.backgroundColor = "green"; // correct answer turns green
            storyText.textContent = "dunning realized the truth—he had only a few days before something would come for him."; // continue story
            quizContainer.style.display = "none"; // hide quiz
            quizAnswered = true; // mark quiz as done
            nextBtn.style.display = "block"; // bring back next button
            currentPart++; // move story forward
        } else {
            option.style.backgroundColor = "black"; // wrong answers turn dark
            window.alert("a shadow moves behind you, closer than before..."); // spooky message
        }
    });
});
