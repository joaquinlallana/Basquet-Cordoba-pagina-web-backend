var express = require('express');
var router = express.Router();


router.get('/', (req, res) => {
    res.render('admin/novedades', { layout: 'admin/layout', usuario: req.session.nombre });
});

module.exports = router;