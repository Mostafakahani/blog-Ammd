const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const dbRouter = require('./api/routes/dbRouter');
const authRouter = require('./api/routes/authRouter');
const postRouter = require('./api/routes/postRouter');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/db', dbRouter);
app.use('/api/auth', authRouter);
app.use('/api/posts', postRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
