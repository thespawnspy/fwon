document.getElementById("predictionForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const data = {};

  formData.forEach((value, key) => {
    data[key] = value;
  });

  fetch("https://script.google.com/macros/s/AKfycbzxkr5Aoc2P8_5AxzSnLvbrwU-yCPXB0kyQTzvZX7nK4Eq485BIMgoUmAKgGlHe2QjW/exec", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(() => {
    alert("Prediction submitted successfully!");
    form.reset();
  }).catch(() => {
    alert("Something went wrong. Please try again.");
  });
});
