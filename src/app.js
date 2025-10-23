import express, { json } from 'express';
import dotenv from 'dotenv';

export const createApp = () => {
  const app = express();

  dotenv.config();
  
  app.use(json());

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  const PORT = process.env.PORT || 1234;
  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}