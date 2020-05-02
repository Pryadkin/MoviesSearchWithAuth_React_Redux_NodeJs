const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = express();

app.use('/api/auth', require('./routes/auth.routes'));

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
  } catch (err) {
    console.log('Server Error', err.message);
    process.exit();
  }
}

start();

const PORT = config.get('port') || 5000;

app.listen(PORT, () => console.log(`App has been started on ${PORT}`))

