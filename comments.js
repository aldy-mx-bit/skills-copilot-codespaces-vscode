// Create new server
const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");

// Bring in models
const Post = require("../models/Post");
const User = require("../models/User");
const Comment = require("../models/Comment");

// @route    POST /api/comments/:id
// @desc     Comment on a post
// @access   Private
router.post(
  "/:id",
  [
    auth,
    check("text", "Text is required").not().isEmpty(),
    check("name", "Name is required").not().isEmpty(),
    ],
    async (req, res) => {   
    const errors = validationResult(req);
    }
);
