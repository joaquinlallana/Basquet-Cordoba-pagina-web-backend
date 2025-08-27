var pool = require('./bd');

async function getNoticias(){
    var query = "SELECT * FROM noticias ORDER BY id_noticia DESC";
    var rows = await pool.query(query);
    return rows;
}


module.exports = { getNoticias }