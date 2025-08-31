var pool = require("./bd");

async function getNoticias() {
  var query = "SELECT * FROM noticias ORDER BY id_noticia DESC";
  var rows = await pool.query(query);
  return rows;
}

async function insertNoticia(noticia) {
  try {
    var query = "INSERT INTO noticias SET ?";
    var row = await pool.query(query, [noticia]);
    return row;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getCategorias() {
  try {
    var query = "SELECT id_categoria, nombre FROM categorias";
    var rows = await pool.query(query);
    return rows;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function deleteNoticiaById(id) {
  var query = "DELETE FROM noticias WHERE id_noticia = ?";
  var rows = await pool.query(query, [id]);
  return rows;
}

async function editNoticiaById(id, noticia) {
  try {
    var query = "UPDATE noticias SET ? WHERE id_noticia = ?";
    var rows = await pool.query(query, [noticia, id]);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getNoticiaById(id) {
  var query = "SELECT * FROM noticias WHERE id_noticia = ?";
  var rows = await pool.query(query, [id]);
  return rows[0];
}

module.exports = {
  getNoticias,
  insertNoticia,
  getCategorias,
  deleteNoticiaById,
  editNoticiaById,
  getNoticiaById
};
