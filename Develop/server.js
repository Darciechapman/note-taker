const express = require("express");
const path = require("path");
const fs = require("fs");

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

app.get("/api/notes", function (request, response) {
    fs.readFile(path.json(__dirname, "/db/db.json"), result => { 
        const contents = JSON.parse(result)
        console.log(contents);
        response.json(contents);
    })
})

  
app.get("*", function (request, response) {
    response.sendFile(path.join(__dirname, "/public/index.html"))
})

//function makeTeam() {

//    if (!fs.existsSync(OUTPUT_DIR)) {
//        fs.mkdirSync(OUTPUT_DIR)
//      }
//      fs.writeFileSync(outputPath, render(members), "utf-8");
//}