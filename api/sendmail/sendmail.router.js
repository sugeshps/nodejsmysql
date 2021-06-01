const { sendMail } = require("./sendmail.controller");
const router = require("express").Router();

router.post("/",sendMail);
 
module.exports = router;