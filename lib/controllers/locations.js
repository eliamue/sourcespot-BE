import { Router } from 'express';
import Locations from '../models/Locations.js';
import ResourceLocations from '../models/ResLocations.js';

export default Router()
  .post('/', async (req, res, next) => {
    try {
      let location = await Locations.findById(req.body.id);
      if(!location) {
        location = await Locations.insert(req.body.located);

        await ResourceLocations.insert({ resourceid: req.resource.id, locationid: location.id });
      }
      res.send(location);
    } catch (error) {
      next(error);
    }
  })

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
