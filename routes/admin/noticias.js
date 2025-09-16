var express = require("express");
var router = express.Router();
var noticiasModel = require("../../models/noticiasModel");
var util = require("util");
var cloudinary = require("cloudinary").v2;
var uploader = util.promisify(cloudinary.uploader.upload);

router.get("/", async function (req, res, next) {
  var noticias = await noticiasModel.getNoticias();

  noticias = noticias.map((noticia) => {
    if (noticia.img_id) {
      const imagen = cloudinary.image(noticia.img_id, {
        width: 50,
        height: 50,
        crop: "fill",
      });
      return {
        ...noticia,
        imagen,
      };
    } else {
      return {
        ...noticia,
        imagen: "",
      };
    }
  });
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
    var img_id = "";

    if (req.files && Object.keys(req.files).length > 0) {
      var imagen = req.files.imagen;
      img_id = (await uploader(imagen.tempFilePath)).public_id;
    }

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

      await noticiasModel.insertNoticia({
        ...noticia,
        img_id,
      });
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
  let noticia = await noticiasModel.getNoticiaById(id);
  
  if (noticia.img_id) {
    await (cloudinary.uploader.destroy(noticia.img_id));
  }
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
    categorias,
  });
});

router.post("/editar", async (req, res, next) => {
  try {
    const categorias = await noticiasModel.getCategorias();
    let img_id = req.body.img_original || null;
    let borrar_img_vieja = false;

    // Si el usuario marca eliminar la imagen sin subir otra
    if (req.body.img_delete === "1") {
      img_id = null; // se eliminará la referencia en la DB
      borrar_img_vieja = !!req.body.img_original; // borrar en cloudinary si existe img_original
    } else {
      // Si viene un archivo nuevo, subirlo y borrar la vieja
      if (req.files && req.files.imagen) {
        const archivo = req.files.imagen;
        const uploadResult = await uploader(archivo.tempFilePath);
        img_id = uploadResult.public_id;
        borrar_img_vieja = !!req.body.img_original;
      }
    }

    // Eliminar la imagen vieja en Cloudinary si procede
    if (borrar_img_vieja && req.body.img_original) {
      try {
        await cloudinary.uploader.destroy(req.body.img_original);
      } catch (err) {
        console.error('Error eliminando imagen en Cloudinary:', err);
        // no detener el flujo por un fallo en la eliminación remota
      }
    }

    let noticia = {
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      contenido: req.body.contenido,
      id_categoria: req.body.id_categoria,
      img_id,
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
