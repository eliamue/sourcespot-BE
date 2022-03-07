import { Router } from 'express';
import Categories from '../models/Categories.js';

export default Router()
  .post('/', async (req, res, next) => {
    try {
      const category = await Categories.findById(req.body.category_id);

      res.send(category);
    } catch (error) {
      next(error);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const allCategories = await Categories.getAll();

      res.send(allCategories);
    } catch (error) {
      next(error);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const { category_id } = req.params;
      const category = await Categories.findById(category_id);

      res.send(category);
    } catch (err) {
      next(err);
    }
  });
