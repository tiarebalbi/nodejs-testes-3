// Cliente.js
//Configurações
var config = require("./config/config.js");

var socket = require("socket.io-client");

var conexao = socket.connect("http://localhost:8080");

conexao.on("sala1", function(data) {
	console.log(data);
	setInterval(function() {
		conexao.emit("sala1", {msg: "bcs"});
	}, 300);
});