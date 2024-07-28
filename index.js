const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const path = require("path");
const fs = require('fs');

const app = express();
const server = http.createServer(app);
const io = socketio(server);


const viewsPath = path.join(__dirname, 'views');
app.set('views', viewsPath);

app.set('view engine', 'ejs');
app.set(express.static(path.join(__dirname, "public")));

fs.readdir(viewsPath, (err, files) => {
    if (err) {
        console.error('Error reading views directory:', err);
    } else {
        console.log('Files in views directory:', files);
    }
});



app.get("/",  (req,res) =>{
    res.render('index');
});

server.listen(8000, () => {
    console.log("Server Start")
});