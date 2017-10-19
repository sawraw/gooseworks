'use strict';

const express = require('express');
const mime = require('mime');
const router = express.Router();
const models = require('../../db/models');
const StyleGuide = models.StyleGuide;
module.exports = router;

router.get('/', function (req, res, next) {
  StyleGuide.findAll({ where: req.query })
  .then(styleGuides => res.json(styleGuides))
  .catch(next);
});