import { Router } from 'express';

const giphy = require('giphy-api')();

const router = new Router();

function getParams(query) {
  return {
    fmt: query.fmt || 'json',
    limit: query.limit || 10,
    rating: query.rating || '',
    offset: query.offset || '0',
  };
}


router.route('/giphy/:search')
  .get((req, res) => {
    let params = getParams(req.query);

    if (req.params.search === 'trending') {
      giphy.trending(params, (err, result) => {
        res.send(result);
      });
    } else {
      params.q = req.params.search;
      giphy.search(params, (err, result) => {
        res.send(result);
      });
    }
  });

export default router;
