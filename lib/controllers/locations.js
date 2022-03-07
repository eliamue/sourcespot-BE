import { Router } from 'express';
import Locations from '../models/Locations.js';
import ResLocations from '../models/ResLocations.js';

export default Router()
  .get('/', async (req, res, next) => {
    try {
      const allLocations = await Locations.getAll();

      res.send(allLocations);
    } catch (error) {
      next(error);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const location = await Locations.findById(id);

      res.send(location);
    } catch (err) {
      next(err);
    }
  });
