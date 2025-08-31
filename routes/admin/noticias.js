var express = require("express");
var router = express.Router();
var noticiasModel = require("../../models/noticiasModel");

router.get("/", async function (req, res, next) {
  var noticias = await noticiasModel.getNoticias();
  res.render("admin/noticias", {
    layout: "admin/layout",
    usuario: req.session.nombre,
    noticias,
  });
});

router.get("/agregar", async (req, res, next) => {
  try {
    var categorias = await noticiasModel.getCategorias();

    res.render("admin/agregar", {
      layout: "admin/layout",
      categorias,
    });
  } catch (error) {
    console.log(error);
    res.render("admin/agregar", {
      layout: "admin/layout",
      categorias: [],
    });
  }
});

router.post("/agregar", async (req, res, next) => {
  try {
    if (
      req.body.titulo != "" &&
      req.body.subtitulo != "" &&
      req.body.contenido != "" &&
      req.body.id_categoria != ""
    ) {
      const { titulo, subtitulo, contenido, id_categoria } = req.body;

      let noticia = {
        titulo,
        subtitulo,
        contenido,
        id_categoria: Number(id_categoria),
      };

      console.log("Noticia a insertar", noticia);

      await noticiasModel.insertNoticia(noticia);
      res.redirect("/admin/noticias");
    } else {
      const categorias = await noticiasModel.getCategorias();
      res.render("admin/agregar", {
        layout: "admin/layout",
        categorias,
        error: true,
        message: "Todos los campos son requeridos",
      });
    }
  } catch (error) {
    console.log(error);
    const categorias = await noticiasModel.getCategorias();
    res.render("admin/agregar", {
      layout: "admin/layout",
      categorias,
      error: true,
      message: "No se cargo la noticia",
    });
  }
});

router.get("/eliminar/:id", async (req, res, next) => {
  var id = req.params.id;
  await noticiasModel.deleteNoticiaById(id);
  res.redirect("/admin/noticias");
});

router.get("/editar/:id", async (req, res, next) => {
  let id = req.params.id;
  const categorias = await noticiasModel.getCategorias();
  let noticia = await noticiasModel.getNoticiaById(id);
  res.render("admin/editar", {
    layout: "admin/layout",
    noticia,
    categorias
  });
});

router.post("/editar", async (req, res, next) => {
  try {
    const categorias = await noticiasModel.getCategorias();

    let noticia = {
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      contenido: req.body.contenido,
      id_categoria: req.body.id_categoria,
    };

    let id = req.body.id_noticia;

    await noticiasModel.editNoticiaById(id, noticia);
    res.redirect("/admin/noticias");
  } catch (error) {
    console.log(error);
    res.render("admin/editar", {
      layout: "admin/layout",
      error: true,
      message: "No se logro editar la noticia",
    });
  }
});

module.exports = router;
