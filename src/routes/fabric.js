const express = require('express');

const { authenticate, permit } = require('./../middleware/authenticate');

module.exports = app => {
  app.get(
    '/fabric/:id',
    authenticate,
    permit('user', 'admin'),
    async (req, res) => {
      try {
        const flight = await models.flight.findById(req.params.id);
        const trip = await models.trip.findById(flight.trip_id);
        if (trip.isUserAuthorizedToView(req.user)) {
          const flights = await flight.markAsSelected();
          if (flights.error) {
            res.status(400).json({ error: flights.error });
          }
          res.json(filterFlightGroupData(flights));
        } else {
          res.status(401).send();
        }
      } catch (e) {
        res.status(400).json(e);
      }
    }
  );
};
