// caching important elements
const storyText = document.getElementById("story-text"); // story paragraph
const nextBtn = document.getElementById("next-btn"); // next button
const quizContainer = document.getElementById("quiz-container"); // quiz section
const options = document.querySelectorAll(".option"); // all quiz answer choices

// an array to store different parts of the story
let storyParts = [
    "you wake up in a dark forest, the air thick with silence…",
    "the trees seem to whisper, though there is no wind…",
    "a distant cry echoes in the night, sending chills down your spine…",
    "you take a step forward, but something grabs your ankle…",
    "suddenly, everything goes dark…",
    "quiz time! what was the last thing you saw?", // quiz appears here
    "you hear a whisper behind you... but no one is there.", // story continues after quiz
    "a cold hand touches your shoulder. you turn around slowly...",
    "end of the story... or is it?"
];

let currentPart = 0; // tracking which part of the story we are on
let quizAnswered = false; // flag to track if quiz is done

// event listener for the next button
nextBtn.addEventListener("click", function() {
    if (!quizAnswered) {
        // if we reach the quiz part, hide the next button and show the quiz
        if (currentPart === 5) {
            nextBtn.style.display = "none";
            quizContainer.style.display = "block";
            return; // stop further execution until quiz is answered
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

// looping through all quiz options and adding event listeners
options.forEach(option => {
    option.addEventListener("click", function() {
        if (option.dataset.answer === "right") {
            option.style.backgroundColor = "green"; // turn correct answer green
            storyText.textContent = "you remember… the eyes. they are still watching you."; // update story
            quizContainer.style.display = "none"; // hide quiz
            quizAnswered = true; // flag that quiz is answered
            nextBtn.style.display = "block"; // show next button
            currentPart++; // move to the next story part after quiz
        } else {
            option.style.backgroundColor = "black"; // make wrong answers dark
            window.alert("a ghostly whisper surrounds you..."); // spooky alert
        }
    });
});
