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
        return response.json(noteData)
    });
})
  
app.get("*", function (request, response) {
    response.sendFile(path.join(__dirname, "/public/index.html"))
})

app.post("/api/notes", function(request, response) {
    console.log(request)
    //notesArray.push(request.body)
    //response.json(notesArray);
    //console.log(request.body)
        
})

//function makeTeam() {

//    if (!fs.existsSync(OUTPUT_DIR)) {
//        fs.mkdirSync(OUTPUT_DIR)
//      }
//      fs.writeFileSync(outputPath, render(members), "utf-8");
//}