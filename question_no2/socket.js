var socketIO = require("socket.io");
module.exports = function (server) {
  var io = socketIO(server, { path: "/socket.io" });
  io.on("connextion", function (socket) {
      
  });
};
