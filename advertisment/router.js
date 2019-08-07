const { Router } = require('express');
const Ads = require('./model');

const router = new Router();

function adsList(request, respone, next) {
  Ads
    .findAll()
    .then(ads => response.send(ads))
    .catch(next)
}

function createAds(request, response, next) {
  Ads
    .create(request.body)
    .then(ads => response.send(ads))
    .catch(next)
}

router.get('/', adsList)
router.post('/advertisment', createAds)

module.exports = router;