const path = require("path")
const htmlRouter = require("express").Router()

// Redirects user to main page.
htmlRouter.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

// Redirects user to notes taking page. 
htmlRouter.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
})

module.exports = htmlRouter