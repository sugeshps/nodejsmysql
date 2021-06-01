const { checkUserInput } = require("./formvalidate.controller");
const router = require("express").Router();

router.post("/",checkUserInput);
module.exports = router;