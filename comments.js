// Create new server
const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");

// Import Post model
const Post = require("../models/Post");
const User = require("../models/User");
const Comment = require("../models/Comment");

