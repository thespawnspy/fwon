document.getElementById("predictionForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const data = {};

  formData.forEach((value, key) => {
    data[key] = value;
  });

  fetch("https://script.google.com/macros/s/AKfycby8Q79HhxXHQ-D0-KAiDGvUdCyYzt6I5QgUFEtq7qTajTD7e_WvUNqblKjUJ4VuHXxU/exec", {
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
