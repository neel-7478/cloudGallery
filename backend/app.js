var cors = require('cors')
const express = require("express");
const Grid = require('gridfs-stream');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const upload = require("./routes/upload");
const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Initializing gfs
let gfs;
const mongoURI = "mongodb://localhost:27017/gallery?readPreference=primary&directConnection=true&ssl=false";

const conn = mongoose.createConnection(mongoURI);

conn.on('open', () => {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection("photos");
    console.log("connection made successfully");
});

app.use("/file", upload);

app.get("/", (req, res) => {
gfs.files.find().toArray((err, files) => {
        if (!files || files.length === 0) {
            res.send("No file to render");
        }
        else {
            return res.json(files)
            // return res.send("No")
        }
    })
})

app.get("/file/:filename", async (req, res) => {
    try {
        let file = await gfs.files.findOne({ filename: req.params.filename });
        const readStream = gfs.createReadStream(file.filename);
        readStream.pipe(res);
    } catch (error) {
        res.send('file not found');
    }
})

const port = 5000;
app.listen(port, () => {
    console.log(`application is listening at port number ${port}`);
})
