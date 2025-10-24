import express, { json } from 'express';
import dotenv from 'dotenv';
import { createBasicRouter } from './modules/basics/basics.router.js';
import { corsMiddleware } from './middleware/cors.js';

export const createApp = ({ basicsModel }) => {
  const app = express();

  dotenv.config();
  
  app.use(json());
  app.use(corsMiddleware());

  app.use('/basics', createBasicRouter({ basicsModel }));

  const PORT = process.env.PORT || 1234;

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}