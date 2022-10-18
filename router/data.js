const express = require("express");
const { postData,getData } = require("../module/postData");
const router = express.Router();

router.post("/post",postData);
router.get("/find",getData);

module.exports = router;