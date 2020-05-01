const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

app.get("/notes", function (request, response) {
    response.sendFile(path.join(__dirname, "/public/notes.html"))
})
  
app.get("/", function (request, response) {
    response.sendFile(path.join(__dirname, "/public/index.html"))
})