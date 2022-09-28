const express = require('express');
const { Fabric } = require('../models');

const { authenticate, permit } = require('./../middleware/authenticate');

module.exports = app => {
  app.get('/fabrics', authenticate, permit('user', 'admin'), async (req, res) => {
    try {
      const fabrics = await Fabric.findAll();
      res.json(fabrics);
    } catch (e) {
      res.status(400).json(e.message);
    }
  });
};
