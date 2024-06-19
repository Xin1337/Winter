function startQuestions() {
  document.getElementById("questions").style.display = "block";
}

var yesMessages = [
  "I believe in love at first sight too! How about we go on a date and see if it's true?",
  "That's amazing! Can we spend some time together and see if our chemistry is real?",
  "Awesome! Want to hang out and see if we can make something beautiful together?",
];

var noMessages = [
  "No worries, love takes time. But can we spend some time together and see if something beautiful blossoms?",
  "Well, love is a journey. How about we go on an adventure together and see where it takes us?",
  "That's okay! Can we spend some time together and see if we can make something beautiful together?",
];

function answerYes() {
  document.getElementById("questions").style.display = "none";
  document.getElementById("que").style.display = "none";
  document.getElementById("init").innerText = "⋆꙳❅*❆";
  document.getElementById("message").style.display = "block";
  var randomYesMessage =
    yesMessages[Math.floor(Math.random() * yesMessages.length)];
  document.getElementById("messageText").innerText = randomYesMessage;
}

function answerNo() {
  document.getElementById("questions").style.display = "none";
  document.getElementById("que").style.display = "none";
  document.getElementById("init").innerText = "⋆꙳❅*❆";
  document.getElementById("message").style.display = "block";
  var randomNoMessage =
    noMessages[Math.floor(Math.random() * noMessages.length)];
  document.getElementById("messageText").innerText = randomNoMessage;
}

function showSnowEffect() {
  tsParticles.load("tsparticles", {
    particles: {
      color: { value: "#fff" },
      move: {
        direction: "bottom",
        enable: true,
        outModes: "out",
        speed: 2,
      },
      number: {
        density: {
          enable: true,
          area: 1501,
        },
        value: 400,
      },
      opacity: {
        value: 0.7,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: 4.9,
      },
      wobble: {
        enable: true,
        distance: 10,
        speed: 10,
      },
      zIndex: {
        value: { min: 0, max: 100 },
      },
    },
  });
}

// Call the showSnowEffect function when the window loads
window.onload = showSnowEffect;
