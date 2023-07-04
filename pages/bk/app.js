const express = require('express');
const dbRouter = require('./api/routes/dbRouter');
const authRouter = require('./api/routes/authRouter');
const otherRouter = require('./api/routes/otherRouter');
const app = express();
const cors = require('cors');
const port = 3001;

app.use(cors());
app.use(express.json());
app.use('/db', dbRouter); // مسیرهای مربوط به دیتابیس را به روتر dbRouter متصل می‌کنیم
app.use('/auth', authRouter); // مسیرهای احراز هویت را به روتر authRouter متصل می‌کنیم
app.use('/other', otherRouter); // مسیرهای دیگر را به روتر otherRouter متصل می‌کنیم

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
