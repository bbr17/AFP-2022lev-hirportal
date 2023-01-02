const express = require("express");
const newsController = require("../controllers/news");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

router.get("/", authMiddleware, newsController.listNews);
router.get("/:id", authMiddleware, newsController.getNews);
router.post("/", authMiddleware, newsController.createNews);
router.put("/", authMiddleware, newsController.updateNews);
router.delete("/:id", authMiddleware, newsController.deleteNews);

module.exports = router;
