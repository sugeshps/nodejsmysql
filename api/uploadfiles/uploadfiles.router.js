const { uploadFiles } = require("./uploadfiles.controller");
const router = require("express").Router();
router.post("/",uploadFiles);
module.exports = router;