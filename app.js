var cors = require('cors')
const express = require('express');
const webpush = require('web-push');
const fs = require('fs');
const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

const bodyParser = require('body-parser')

app.use(bodyParser.json()) // for parsing application/json

const server = require('http').createServer(app);

const subDatabse = [];

const apiKeys = { 
    pubKey: "BJ6kaUF6KBhRSnxHej9fEwuAFtpwLMYxdUYidRb4-VCthYwVqoCD72NrDYrDkKi8RGUKyPTr48rKw2nUEQcSZaY", 
    privKey: "b5DyReyV8IBxQZkfwxQjsQ5NIu4EMOqpzYn9ilIXOSY" 
}

webpush.setVapidDetails('mailto:joder@gmail.com', apiKeys.pubKey, apiKeys.privKey)

app.get("/", (req, res) => {
    res.send("Hello world2");
})

app.post("/save-subscription", (req, res) => {
    subDatabse.push(req.body);
    // console.log(req.body);
    res.json({ status: "Success", message: "Subscription saved!" })
    // res.send("voy a llorar aunque no lo creo  ... en produccion voy a llorar :( ");
})

app.get("/send-notification", (req, res) => {

  // endP.forEach((punto)=>{
  //     // console.log(punto.id);
  //     const sub = {
  //         endpoint: punto.endpoint,
  //         expirationTime: null,
  //         keys: {
  //           p256dh: punto.p256dh,
  //           auth: punto.auth
  //         }
  //       };
  //       webpush.sendNotification(sub, "Hello world");
         
  // })
  // res.json({ "statue": "Success", "message": "Message sent to push service" }); 
  webpush.sendNotification(subDatabse[0], "Hello world");
  res.json({ "statue": "Success", "message": "Message sent to push service" });
});

// app.post("/prueba-fuego", (req, res)=>{
//   res.json({ status: "Success", message: "Subscription saved!" })
// });

// app.post("/prueba-fuego2", (req, res)=>{
//   res.json({ status: "other", message: "Subscription savediii!" })
// });

app.post("/send-kitchen", (req, res)=>{
  const { title, message } = req.body;
  // console.log(message);

  const payload = JSON.stringify({
      title : title,
      body : message
  });

  // endP.forEach((punto)=>{
  //     // console.log(punto.id);
  //     const sub = {
  //         endpoint: punto.endpoint,
  //         expirationTime: null,
  //         keys: {
  //           p256dh: punto.p256dh,
  //           auth: punto.auth
  //         }
  //       };
  //       webpush.sendNotification(sub, payload);
         
  // })
  webpush.sendNotification(subDatabse[0], payload);
  res.json({'joder' :'joder'})
  // res.json({id: id, message: message})
})

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('chat', (data)=>{
    io.emit('chat', data)
    console.log(data);
  });

});

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

