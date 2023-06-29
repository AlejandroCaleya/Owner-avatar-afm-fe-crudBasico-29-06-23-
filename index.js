const port = 3000;
const db = require("./db.js");

app.use(express.static("public"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

// Obtener todos los usuarios
app.get("/", (req, res) => {
	sql = "SELECT * FROM usuarios";
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

//Agregar un usuario a la base d edatos
app.post("/agregar", (req, res) => {
	const { nombre, email } = req.body;
	sql = "INSERT INTO usuarios SET ?";
	db.query(sql, { nombre, email }, (error, result) => {
		if (error) throw error;
		res.redirect("/");
	});
});

//Mostrar formulario para editar un usuario
app.get("/editar/:id", (req, res) => {
	const id = req.params.id;
	db.query("SELECT * FROM usuarios WHERE id = ?", id, (error, result) => {
		if (error) throw error;
		res.render("editar", { usuario: result[0] });
	});
});

// Actualizar un usuario en la base de datos
app.post("/editar/:id", (req, res) => {
	const { nombre, email } = req.body;
	db.query("UPDATE usuarios SET nombre = ?, email = ?, WHERE ID = ?"[(nombre, email, id)], (error, result) => {
		if (error) throw error;
		res.redirect("/");
	});
});
