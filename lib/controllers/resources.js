import { Router } from 'express';
import Resources from '../models/Resources.js';
import ResourceTags from '../models/ResTags.js';
import ResourceLocations from '../models/ResLocations.js';

export default Router()
  .post('/', async (req, res, next) => {
    try {
      const resource = await Resources.insert(req.body);

      res.send(resource);
    } catch (error) {
      next(error);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const allResources = await Resources.getAll();

      res.send(allResources);
    } catch (error) {
      next(error);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const resource = await Resources.getById(id);

      res.send(resource);
    } catch (err) {
      next(err);
    }
  })

  .get('/tags', async (req, res, next) => {
    try {
      const allResourceTags = await ResourceTags.getAll();
      res.send(allResourceTags);
    } catch (error) {
      next(error);
    }
  })

  .get('/tags/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const allResourceTagsById = await ResourceTags.getResourceTagsByResourceId(id);

      res.send(allResourceTagsById);
    } catch (error) {
      next(error);
    }
  })

  .get('/locations', async (req, res, next) => {
    try {
      const allResourceLocations = await ResourceLocations.getAll();
      res.send(allResourceLocations);
    } catch (error) {
      next(error);
    }
  })

  .get('/locations/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const allResourceLocationsById = await ResourceLocations.getResourceLocationsByResourceId(id);

      res.send(allResourceLocationsById);
    } catch (error) {
      next(error);
    }
  })

  .put('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const { title, category, about, website, logo, located, tags } = req.body;

      const updatedResource = await Resources.update(id, {
        title,
        category,
        about,
        website,
        logo,
        located,
        tags,
      });

      res.send(updatedResource);
    } catch (err) {
      next(err);
    }
  })

  .delete('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const resource = await Resources.delete(id);

      res.send({
        message: `You have deleted ${resource.title}.`,
      });
    } catch (err) {
      next(err);
    }
  });
