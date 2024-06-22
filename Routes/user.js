// Initialize express router
const express = require("express");
const router = express.Router();
const { login, renewToken, signup } = require("../Controller/user");
const {
  controllerAsyncHandler,
  middlewareAsyncHandler,
} = require("../utils/asyncHandler");

// User end points.
router.post('/login', controllerAsyncHandler(login));

router.post('/signup', controllerAsyncHandler(signup));

router.get('/renewToken', controllerAsyncHandler(renewToken));

module.exports = router;
