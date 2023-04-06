document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  fetch("/articles", {
    method: "POST",
    body: formData
  })
    .then(response => response.text())
    .then(result => {
      document.getElementById("output").textContent = result;
      document.getElementById("title").value = "";
      document.getElementById("content").value = "";
    })
    .catch(err => {
      console.error(err.message);
    });
});