const express = require("express");
const path = require("path");
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

let notesArray = [{
    title: "test",
    text: "test"
}]

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

app.get("/notes", function (request, response) {
    response.sendFile(path.join(__dirname, "public/notes.html"))
})

app.get("/api/notes", function (request, response) {
    fs.readFile('db/db.json', (err, data) => {
        if (err) throw err;
        let noteData = JSON.parse(data);
        console.log(noteData);
        return response.json(noteData)
    });
    //fs.readFile("db/db.json", data => { 
        //const contents = JSON.stringify(data);
    //})
        //response.json(result);
        //console.log(contents);
        //return response.json(data);
    //})
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