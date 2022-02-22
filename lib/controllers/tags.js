import { Router } from 'express';
import Tags from '../models/Tags.js';
// import ResourceTags from '../models/ResTags.js';

export default Router()
  .post('/', async (req, res, next) => {
    try {
      const tag = await Tags.insert(req.body);
      // let tag = await Tags.findById(req.body.id);
      // if(!tag) {
      //   tag = await Tags.insert(req.body.tag);

      //   await ResourceTags.insert({ resourceid: req.resource.id, tagid: tag.id });
      // }
      // const tags = await Promise.all(req.body?.tagsArray?.map(async (tagObj) => {
      //   let tag = await Tags.findById(tagObj.id);
      //   if (!tag) {
      //     tag = await Tags.insert(req.body);
      //   }
      //   await ResourceTags.insert({ resourceid: req.resource.id, tagid: tagObj.id });
      //   return tag;
      // }));

      res.send(tag);
    } catch (error) {
      next(error);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const allTags = await Tags.getAll();

      res.send(allTags);
    } catch (error) {
      next(error);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const tag = await Tags.getById(id);

      res.send(tag);
    } catch (err) {
      next(err);
    }
  })

  // .post('/', async (req, res, next) => {
  //   try {
  //     let resource = await Tags.getById(id);
  //     const tags = await Tags.insert(req.body);
  //     await ResourceTags.insert({ resourceid: resource.id, tagid: tags.id });
  //     res.send(tags);
  //   } catch (error) {
  //     next(error);
  //   }
  // });
