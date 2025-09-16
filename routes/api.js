var express = require("express");
var router = express.Router();
var noticiasModel = require("../models/noticiasModel");
var cloudinary = require("cloudinary").v2;

var nodemailer = require("nodemailer");

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

router.post('/contacto', async (req, res) => {
  const mail = {
    to: 'joaquinlallana@gmail.com',
    subject: 'Contacto desde la web',
    html: `${req.body.nombre} se contacto a traves del formulario de la web y quiere mas informacion a este correo: ${req.body.email} <br> Ademas, hizo el siguiente comentario: ${req.body.mensaje} <br> Su telefono es: ${req.body.telefono}`
  }

  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD
    }
  });

  await transport.sendMail(mail)
  res.status(201).json({
    error: false,
    message: 'Mensaje enviado correctamente'
  })

})

module.exports = router;
