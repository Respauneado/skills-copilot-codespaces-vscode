// Create web server 

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('./cors');
const authenticate = require('../authenticate');
const Comments = require('../models/comments');
const Dishes = require('../models/dishes');
const commentRouter = express.Router();

commentRouter.use(bodyParser.json());

commentRouter.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200);})
.get(cors.cors, (req, res, next) => {
    Comments.find(req.query)
    .populate('author')
    .then((comments) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(comments)
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) =>{
    if(req.body != null){
        req.body.author = req.user._id;
        Comments.create(req.body)
        .then((comment) => {
            Comments.findById(comment._id)
            .populate('author')
            .then((comment) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(comment)
            })
        }, (err) => next(err))
        .catch((err) => next(err));
    }
    else{
        err = new Error('Comment not found in request body');
        err.status = 404;
        return next(err);
    }
})
.put(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) =>{
    res.statusCode = 403;
    res.end('PUT operation not supported on /comments');
})
.delete(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) =>{
    Comments.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp)
    }, (err) => next(err))
    .catch((err) => next(err));
});

commentRouter.route('/:commentId')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200);})
.get(cors.cors, (req, res, next) => {
    Comments.findById(req.params.commentId)
    .populate('author')
    .then((comment) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(comment);
        }); // Agregar llave de cierre faltante
})
