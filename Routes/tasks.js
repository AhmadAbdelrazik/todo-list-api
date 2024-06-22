const express = require("express");
const router = express.Router();
const {
  create,
  deleteOne,
  readAll,
  readOne,
  updateOne,
} = require("../Controller/tasks");
const authorize = require("../Middleware/Authorization");
const {
  controllerAsyncHandler,
  middlewareAsyncHandler,
} = require("../utils/asyncHandler");
const { handleIntParam } = require("../Middleware/paramHandler");


router.param("id", handleIntParam);

router.use(middlewareAsyncHandler(authorize));

// Create
router.post("/add", controllerAsyncHandler(create));

// Read
router.get("/all", controllerAsyncHandler(readAll));
router.get("/:id", controllerAsyncHandler(readOne));

// Update
router.put("/:id", controllerAsyncHandler(updateOne));

// Delete
router.delete("/:id", controllerAsyncHandler(deleteOne));
