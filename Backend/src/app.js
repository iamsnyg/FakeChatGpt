// import e from 'express';
import express from 'express';
import morgan from 'morgan';
import connectDB from './db/db.js';
import userRoute from './routes/user.routes.js';

connectDB();
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', userRoute);

app.get('/', (req, res) => {
    res.send('Hello World');
});

export default app;