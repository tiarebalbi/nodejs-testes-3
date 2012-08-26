// Server.js
//Configurações
var config = require("./config/config.js");

//Carregando o modulo e inicalizando a conexão.
var io = require("socket.io").listen(config.params.port);


io.sockets.on("connection", function (socket) {
	socket.emit("sala1", {msg: "abc"});
	socket.on("sala1", function(data) {console.log(data);});
});