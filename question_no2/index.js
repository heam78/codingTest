//npm start해서
//http://localhost:3000/ 이 주소로 들어가 주세요

const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
    if (msg !== "ping") {
      console.log("Received: " + msg);
      console.log("Send: " + msg);
    } else {
      console.log("Received:ping");
      console.log("Send: pong");
    }
  });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
