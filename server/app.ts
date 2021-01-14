import * as express from 'express';
import * as http from 'http';
import * as cors from 'cors';
import * as socketIO from 'socket.io';

const app = express();
const server = new http.Server(app);
const io = socketIO(server);
const port = process.env.PORT || 3000;

let corsOptions = {
    origin: "http://localhost:4200",
    credentials: true
}

app.use(cors(corsOptions)); 
app.use(express.json());
app.use(express.urlencoded({extended: true}));

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

    socket.on('message',(msg)=>{
        io.emit('message',msg);
    })

    socket.on("disconnect",()=>{
        console.log("User disconnected!");
    });
});

server.listen(port,()=>{
    console.log(`server listening on port ${port}`);
});


