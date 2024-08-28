const express = require('express');
const router = express.Router();
// Routes imports
const getPosts = require('../controllers/getPosts')
const createPost = require('../controllers/createPosts')
const getPostId = require('../controllers/getPostId')
const getSearchPost = require('../controllers/searchPosts')
const getUser = require('../controllers/postAdminLog')
const regUser = require('../controllers/postAdminReg')
const adminPage = require('../controllers/getDashboard')
const editPosts = require('../controllers/editPosts')
const deletePost = require('../controllers/deletePost')


router.use('/', getPosts);
router.use('/', createPost);
router.use('/', getPostId);
router.use('/', getSearchPost);
router.use('/', getUser);
router.use('/', regUser);
router.use('/', adminPage);
router.use('/', editPosts);
router.use('/', deletePost);

module.exports = router