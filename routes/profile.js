const express = require("express");
const router = express.Router();
const pool = require("../db");
const auth = require("../middleware/auth");

// @route		POST api/profiles/
// @desc		register profile to logged in user
// @access	private
router.post("/", auth, (req, res) => {
  res.json(req.user);
});

// @route		GET api/profiles/self
// @desc		get profile data of the logged in user
// @access	private

module.exports = router;
