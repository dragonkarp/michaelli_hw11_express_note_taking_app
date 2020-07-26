# Homework 11 Note Taker app. 

# Student
Michael Li

# Description of assignment 
The front end HTML, JS, and CSS are all given. Nothing needs to be modified. We were required to add backend files that routed to the given HTML pages, and responded to API calls. 

All three API routes are called from the /notes page. The API calls include a POST request to add a note to the database, a GET request to be returned an existing note, and a DELETE request to delete and existing note.

The POST request is called when the user clicks the save button. The GET request is called when the user clicks an existing note's title on the left side of the page. The DELETE request is called when the user click the trashcan button next to an existing note. 

# Development process
The given files were not structured properly. I had to rearrange them. I created the server.js, apiRoutes.js, and htmlRoutes.js. The purpose was to keep code more organized and modular for future development. No other files were changed. 

IDs for each note are unique and is how a note is located by iteration for deletion. This made a global var and in the apiRoutes.js file and given to the note object (in the POST request) as it is in temporary memory before being written into the db.json file.  