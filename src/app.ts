import express, { Application } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

dotenv.config();

const app:Application = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

import routesV1 from './routes/v1/index';

routesV1(app);

const PORT: number | string = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:  false,
    useCreateIndex: true
  }).then(() => {
      app.listen(PORT, () => {
          console.log(`running on ${PORT}`);
      });
      console.log('Connected to mongodb');
  }).catch((e) => {
      console.log('mongodb error' , e);
  })