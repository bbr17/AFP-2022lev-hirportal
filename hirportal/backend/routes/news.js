const express = require("express");
const newsController = require("../controllers/news");

const router = express.Router();

router.get("/", newsController.listNews);
router.get("/:id", newsController.getNews);
router.post("/", newsController.createNews);
router.put("/", newsController.updateNews);
router.delete("/:id", newsController.deleteNews);

module.exports = router;
