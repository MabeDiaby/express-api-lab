const express = require('express');
const Gif = require('../models/gif');

const GifRouter = express.Router();

GifRouter.get('/', (req, res, next) => {
    Gif.find({})
    .then(gif => res.json(gif))
    .catch(next)
})

GifRouter.get('/:id', (req, res, next) => {
    Gif.findById(req.params.id)
    .then(gif => res.json(gif))
    .catch(next)
})

GifRouter.post('/', (req, res, next) => {
    Gif.create(req.body)
    .then(() => res.redirect('/gifs'))
    .catch(next)
})

GifRouter.put('/:id', (req, res, next) => {
    Gif.findOneAndUpdate({_id: req.params.id},req.body ,{new: true})
    .then(() => res.redirect(303, '/gifs'))
    .catch(next)
})

GifRouter.delete('/:id', (req, res, next) =>{
    Gif.findOneAndDelete({
        _id: req.params.id
    })
    .then(() => res.redirect(303, '/gifs'))
    .catch(next)
})

module.exports = GifRouter