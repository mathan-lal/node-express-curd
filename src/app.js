import express from 'express';
const app = express();
import userRoute from './routes/user.route.js';

app.use(express.json());
app.use('/user', userRoute);

export {app};