import dotenv from 'dotenv';
dotenv.config();

import { MongoConnection } from './database/db';
import express from 'express';
import router from './routes';

console.log(process.env.DB_PASSWORD)
const app = express();
app.use(express.json());

const db = new MongoConnection();
db.connect();

app.use(router);



app.listen(5000, () => {
  console.log('Express listening')
});