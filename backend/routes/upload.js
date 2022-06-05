const upload = require("../middleware/upload");
const express = require("express");
const router = express.Router();

router.post("/upload", upload.single("file"), async(req, res) => {
    if (req.file === undefined) {
        res.send("you must select a file");
    }
    const imageUrl = await `http://localhost:5000/file/${req.file.filename}`;
    res.send(imageUrl);
    // console.log(imageUrl);
});

module.exports = router;