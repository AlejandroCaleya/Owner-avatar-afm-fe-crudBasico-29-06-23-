const mysql = require("mysql");
connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "mydb",
});

connection.connect((error) => {
	if (error) {
		console.error("Error connecting. " + error.stack);
	}
	console.log("Connected to the DataBase.");
});

module.exports = connection;
