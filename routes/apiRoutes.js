const apiRouter = require("express").Router()
const db = require("../db/db.json") //temporary memory 
const fs = require("fs")

// Keeps track of what ID number is not assigned. 
let id = db.length + 1

// Return all saved notes in the db file.
apiRouter.get("/notes", (req, res) => {
    res.json(db)
})

// Save one note to the db file.
apiRouter.post("/notes", (req, res) => {
    // Give the body an ID key.
    req.body.id = id++
    db.push(req.body)
    fs.writeFile("./db/db.json", JSON.stringify(db), (err) => {
        if (err) throw err
        else { res.json(db) }
    })
})

// Delete notes with the corresponding ID.
apiRouter.delete("/notes/:id", (req, res) => {
    let deletedIndex = 0
    let deletedID = 0
    console.log(req.params.id);
    for (let i = 0; i < db.length; i++) {
        if (db[i].id === parseInt(req.params.id)) {
            correctID_startPoint = db[i]
            deletedID = db[i].id
            db.splice(i, 1)
        }
    }
    // When db[i] is deleted, ith + 1  through nth index will have it's id key updated.
    // This solves the issue of it being possible for multiple IDs to be given to different notes. 
    for (let j = deletedIndex; j < db.length; j++) {
        db[j].id = deletedID
        deletedID++
    }
    fs.writeFile("./db/db.json", JSON.stringify(db), (err) => {
        if (err) throw err
        else { res.json(db) }
    })
})

module.exports = apiRouter