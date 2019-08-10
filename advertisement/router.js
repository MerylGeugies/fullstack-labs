const { Router } = require('express');
const Ads = require('./model');

const router = new Router();

function adsList(request, response, next) {
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

function updateAd(request, response, next) {
  const { id } = request.params
  Ads
    .update(request.body, { where: { id }})
    .then(number => response.send({number}))
    .catch(next)
}  

function deleteAd(request, response, next) {
  const { id } = request.params
  Ads
    .destroy({ where: { id }})
    .then(number => response.send({ number }))
    .catch(next)
}

router.get('/', adsList)
router.post('/advertisement', createAds)
router.put('/advertisement/:id', updateAd)
router.delete('/advertisement/:id', deleteAd)

module.exports = router;