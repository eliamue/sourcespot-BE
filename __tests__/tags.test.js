// import pool from '../lib/utils/pool.js';
// import setup from '../data/setup.js';
// import request from 'supertest';
// import app from '../lib/app.js';
// import Tags from '../lib/models/Tags.js';

// describe('sourcespot-BE routes', () => {
//   beforeEach(() => {
//     return setup(pool);
//   });

//   afterAll(() => {
//     pool.end();
//   });

//   it('gets all tags', async () => {
//     const tag1 = await Tags.insert({
//       tag: 'eye care',
//       resourceid: 1
//     });

//     const tag2 = await Tags.insert({
//       tag: 'photophobia',
//       resourceid: 1
//     });
//     const tag3 = await Tags.insert({
//       tag: 'legal',
//       resourceid: 1
//     });
//     const tag4 = await Tags.insert({
//       tag: 'brain fog',
//       resourceid: 1
//     });

//     const res = await request(app).get('/api/v1/tags');

//     expect(res.body).toEqual([tag1, tag2, tag3, tag4]);
//   });

//   it('gets one resource by id', async () => {
//     const resource = await Tags.insert({
//       title: 'f.lux',
//       category: 'Accessibility',
//       about:
//         'Eye-care software that adapts the color of your computer display.',
//       website: 'https://justgetflux.com/',
//       logo: 'https://tamezatu.com/wp-content/uploads/2015/05/flux.png',
//       located: [],
//       tags: [
//         'photophobia',
//         'eye-care',
//         'blue-light filter',
//         'adaptive display',
//         'computer filter',
//         'light sensitivity',
//         'vision',
//         'technology',
//         'desktop application',
//         'free',
//         'sensory processing',
//         'tinted',
//       ],
//     });

//     const res = await request(app).get(`/api/v1/resources/${resource.id}`);

//     expect(res.body).toEqual(resource);
//   });

//   it('updates a resource', async () => {
//     const resource = await Tags.insert({
//       title: 'Brain Injury Alliance',
//       category: 'Advocacy',
//       about:
//         'Resource facilitation, education, outreach, events, & case management, plus state-specific chapters.',
//       website: 'https://usbia.org/',
//       logo: 'https://biacolorado.org/wp-content/uploads/2011/12/USBIA-Logo.jpg',
//       located: [],
//       tags: [
//         'newsletter',
//         'case manager',
//         'support group',
//         'check-in',
//         'referrals',
//         'support services',
//       ],
//     });

//     const res = await request(app)
//       .put(`/api/v1/resources/${resource.id}`)
//       .send({
//         title: 'MN Brain Injury Alliance',
//         website: 'https://www.braininjurymn.org/',
//         logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQarrQg3SfqDlfnSQfliaolc8bbkjxJtH063GVjDESB4mCisUx9JdYPosoazFrR0JjYCV4&usqp=CAU',
//         located: ['MN'],
//       });
//     expect(res.body).toEqual({
//       ...resource,
//       title: 'MN Brain Injury Alliance',
//       website: 'https://www.braininjurymn.org/',
//       logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQarrQg3SfqDlfnSQfliaolc8bbkjxJtH063GVjDESB4mCisUx9JdYPosoazFrR0JjYCV4&usqp=CAU',
//       located: ['MN'],
//     });
//   });

//   it('deletes a specific existing resource', async () => {
//     const resource = await Tags.insert({
//       title: 'f.lux',
//       category: 'Accessibility',
//       about:
//         'Eye-care software that adapts the color of your computer display.',
//       website: 'https://justgetflux.com/',
//       logo: 'https://tamezatu.com/wp-content/uploads/2015/05/flux.png',
//       located: [],
//       tags: [
//         'photophobia',
//         'eye-care',
//         'blue-light filter',
//         'adaptive display',
//         'computer filter',
//         'light sensitivity',
//         'vision',
//         'technology',
//         'desktop application',
//         'free',
//         'sensory processing',
//         'tinted',
//       ],
//     });

//     const res = await request(app).delete(`/api/v1/resources/${resource.id}`);

//     expect(res.body).toEqual({
//       message: `You have deleted ${resource.title}.`,
//     });
//   });
// });
