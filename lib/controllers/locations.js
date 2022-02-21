import { Router } from 'express';
import Locations from '../models/Locations.js';

export default Router()
  .post('/', async (req, res, next) => {
    try {
      const location = await Locations.insertLocation(req.body);

      res.send(location);
    } catch (error) {
      next(error);
    }
  })

  .get('/locations', async (req, res, next) => {
    try {
      const location = await Locations.getAllLocations();

      res.send(location);
    } catch (error) {
      next(error);
    }
  })

  .get('/locations/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const location = await Locations.getById(id);

      res.send(location);
    } catch (err) {
      next(err);
    }
  });
