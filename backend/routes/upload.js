const upload = require("../middleware/upload");
const express = require("express");
const router = express.Router();

router.post("/upload", upload.single("file"),(req, res) => {
    if (req.file === undefined) {
        res.send("you must select a file");
    }
    else {
        const imageUrl = `http://localhost:5000/file/${req.file.filename}`;
        res.send(imageUrl);
    }
});

module.exports = router;