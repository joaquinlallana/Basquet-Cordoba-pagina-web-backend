var express = require("express");
var router = express.Router();
var usuariosModel = require("../../models/usuariosModel");

router.get("/", (req, res) => {
  res.render("admin/login", { layout: "admin/layout" });
});

router.post("/", async (req, res) => {
  try {
    var usuario = req.body.usuario;
    var password = req.body.password;

    var data = await usuariosModel.getUsuarios(usuario, password);

    if (data != undefined) {
      req.session.id_usuario = data.id;
      req.session.nombre = data.usuario;
      res.redirect("/admin/novedades");
    } else {
      res.render("admin/login", {
        layout: "admin/layout",
        error: true,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.render("admin/login", { layout: "admin/layout" });
});

module.exports = router;
