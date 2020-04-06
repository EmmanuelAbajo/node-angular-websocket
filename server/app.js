const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const socketIO = require('socket.io');

const app = express();
const server = http.Server(app);
const io = socketIO(server);
const port = process.env.PORT || 3000;

let corsOptions = {
    origin: "http://localhost:4200",
    credentials: true
}

app.use(cors(corsOptions)); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

io.on("connection",(socket)=>{
    console.log('User connected');
    let timer;

    socket.on('start-timer',(msg)=>{
        timer = setInterval(()=>{
            socket.emit('timer-update','Start timer: Hello world');
        },2000);
        
    });

    socket.on('stop-timer',(msg)=>{
        if (timer) clearInterval(timer);
        socket.emit('timer-update','Stop timer: Bye world');
    });

    socket.on("disconnect",()=>{
        console.log("User disconnected!");
    });
});

server.listen(port,()=>{
    console.log(`server listening on port ${port}`);
});


