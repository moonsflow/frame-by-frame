import { Router } from 'express';

const giphy = require('giphy-api')();

const router = new Router();


router.route('/giphy/:search')
  .get((req, res) => {
    giphy.search({
      q: req.params.search,
      fmt: req.query.fmt || 'json',
      limit: req.query.limit || 10,
      rating: req.query.rating || '',
      offset: req.query.offset || '0',
    }, (err, result) => {
      res.send(result);
    });
  });

export default router;
