const myData = {
  name: "Le",
  countries: [
    {
      name: "Singapore",
      year: 2018
    },
    {
      name: "Malaysia",
      year: 2018
    }
  ]
};

const displayResult = () => {

  fetch("/api/countries", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(travelInfo)
  })
    .then(response => response.text())
    .then(result => {
      const divOutput = document.getElementById("output");
      divOutput.textContent = result;
    })
    .catch(err => {
      const divOutput = document.getElementById("output");
      divOutput.textContent = err.message;
    });
};

const btnElement = document.getElementById("callapi");
btnElement.addEventListener("click", displayResult);