const port = 3000;
const db = require("./db.js");

app.use(express.static("public"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

// Obtener todos los usuarios
app.get("/", (req, res) => {
	sql = "select * from usuarios";
	db.query(sql, (error, results) => {
		if (error) throw error;
		res.render("index", { usuarios: results });
	});
});

// Eliminar usuario de la base de datos
app.get("/eliminar/:id", (req, res) => {
	const id = req.params.id;
	db.query("DELETE FROM usuarios WHERE id = ?", id, (error, result) => {
		if (error) throw error;
		res.redirect("/");
	});
});
