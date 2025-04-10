document.getElementById("predictionForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const data = {};

  formData.forEach((value, key) => {
    data[key] = value;
  });

  fetch("https://script.google.com/macros/s/AKfycbx4YDBovcPP5rtj4UcdbMQitWAP9lIvaiFSIICT11PoL6hKGoOjYSuIA1IT6MjQ6VHa/exec
    method: "POST",
    mode: "no-cors", // needed to avoid CORS errors
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(() => {
    alert("Prediction submitted!");
    form.reset();
  }).catch((error) => {
    alert("Error submitting prediction. Check console.");
    console.error("Submission error:", error);
  });
});
