const express = require('express');
const router = express.Router();
const controllers = require('../controllers/index');

router.get('/', controllers.Home)

router.get('/ejercicios-javascript/Basico', controllers.EjerBasico)

module.exports = router;