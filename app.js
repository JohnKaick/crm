const express = require('express');
const app = express();
const port = process.env.PORT || '3000';

app.use(express.static(path.join(__dirname, './build')))

app.listen(port, function () {
    console.log(`app listening on port ${port}`)
})