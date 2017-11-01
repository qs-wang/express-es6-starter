import express from 'express';

let router = new express.Router();

router.get('/', (req, res) => {
  res.status(200).send('Hello, world!');
});

export default router;
