import { Router } from 'express';
import Tags from '../models/Tags.js';

export default Router()
  .get('/', async (req, res, next) => {
    try {
      const tag = await Tags.getAllTags();

      res.send(tag);
    } catch (error) {
      next(error);
    }
  })

  .get('/tags', async (req, res, next) => {
    try {
      const tag = await Tags.getAllTags();

      res.send(tag);
    } catch (error) {
      next(error);
    }
  })

  .get('/tags/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const tag = await Tags.getResourceTags(id);

      res.send(tag);
    } catch (err) {
      next(err);
    }
  });
