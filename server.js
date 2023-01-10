const express = require('express');
const app = express();
const helmet = require('helmet');
const connect = require('./database/connection');
const PORT = process.env.PORT || 3001;
const orderAPI = require('./routes/orderRouter');
const clientAPI = require('./routes/clientRouter');

app.use(helmet());
app.use(express.json());

connect();

app.use('/client', clientAPI);
app.use('/order', orderAPI);

app.listen(PORT, () => {
    console.log(`Listenning on http://localhost:${PORT}`);
});