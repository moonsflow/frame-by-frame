import { Router } from 'express';
import giphy from 'giphy-api';

const router = new Router();


router.route('/giphy/:search')
  .get(function(req, res) {
    giphy.search({
      q: req.params.search,
      fmt: req.query.fmt || 'json',
      limit: req.query.limit || 50,
      rating: req.query.rating || '',
      offset: req.query.offset || '0'
    }, function(err, result) {
      response.send(result);
    });
  });


export default router;