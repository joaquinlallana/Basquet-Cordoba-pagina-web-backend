var express = require("express");
var router = express.Router();
var noticiasModel = require("../models/noticiasModel");
var cloudinary = require("cloudinary").v2;

router.get("/noticias", async function (req, res, next) {
  let noticias = await noticiasModel.getNoticias();

  noticias = noticias.map((noticia) => {
    if (noticia.img_id) {
      const imagen = cloudinary.image(noticia.img_id, {
        width: 300 ,
        height: 150,
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
  
  res.json(noticias);
});

module.exports = router;
