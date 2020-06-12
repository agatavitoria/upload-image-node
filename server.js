// server.js
const express = require('express'),
    app = express(),
    multer = require('multer'),
    path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.resolve(__dirname, 'public', 'img'));
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

const upload = multer({ storage });
app.use(express.static('public'));


app.post('/file/upload', upload.single('file'),
    (req, res) => res.json({
        image: req.file.filename
    })
);

app.listen(3000, () => console.log('App na porta 3000'));