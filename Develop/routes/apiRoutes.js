const path = require("path")
const apiRouter = require("express").Router()
const db = require("../db/db.json") //temporary memory 
const fs = require("fs")

let id = db.length+1

// Return all saved notes in the db file.
apiRouter.get("/notes", (req, res) => {
    res.json(db)
})

// Save one note to the db file.
apiRouter.post("/notes", (req, res) => {
    req.body.id = id++
    db.push(req.body)
    fs.writeFile("./db/db.json", JSON.stringify(db), (err) => {
        if (err) throw err
        else {res.json(db)}
    })
})

//
apiRouter.delete("/notes/:id", (req, res) => {
    console.log(req.params.id);
    for (let i = 0; i < db.length; i++) {
         if (db[i].id === parseInt(req.params.id)) {
             db.splice(i, 1)
         }
     }
     fs.writeFile("./db/db.json", JSON.stringify(db), (err) => {
        if (err) throw err
        else {res.json(db)}
    })
})



module.exports = apiRouter
