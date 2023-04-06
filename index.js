//Q1

const express = require("express");
const app = express();


const multer = require("multer");
const upload = multer();


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.static("public"));
app.use(express.static("css"));


//Q2 country list
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
}


//  article list for Q3
const articles = [
  { id: 1, title: "First article", content: "Hello World!" },
  {
    id: 2,
    title: "Lorem ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit mauris ac porttitor accumsan. Nunc vitae pulvinar odio, auctor interdum dolor. Aenean sodales dui quis metus iaculis, hendrerit vulputate lorem vestibulum."
  },
  {
    id: 3,
    title: "Lorem ipsum in French",
    content:
      "J'en dis autant de ceux qui, par mollesse d'esprit, c'est-à-dire par la crainte de la peine et de la douleur, manquent aux devoirs de la vie. Et il est très facile de rendre raison de ce que j'avance."
  }
];

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});

app.get("/form", (request, response) => {
  response.sendFile(`${__dirname}/views/ex1.html`);
});

app.post("/form", upload.array(), (request, response) => {
  const userName = request.body.name;
  const userEmail = request.body.email;
  response.send(`${userName}, thank you for your order. We will keep you posted on delivery status at ${userEmail}.`);
});


const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

app.get("/api/countries", (request, response) => {
  response.sendFile(`${__dirname}/views/ex2.html`);
});


app.post("/api/countries", jsonParser, (request, response) => {
  const countries = myData.countries.length;
  const name = myData.name;
  response.send(`Your name is ${name} and you visited ${countries} countries. Keep traveling!`);
});




// Q3

app.get("/formSolution", (request, response) => {
  response.sendFile(`${__dirname}/views/ex3.html`);
});

app.post("/formSolution", upload.array(), (request, response) => {
  const title = request.body.title;
  response.send(`New article added successfully with title "${title}" and ID ...`);
});
