import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

//DB
import './config/db.js';
//Routes
import authRouter from './routes/authRoutes.js';
import mailsendRouter from './routes/mailsendRoutes.js';

//DOCS
import  swaggerUI  from 'swagger-ui-express';
import swaggerSpec from './config/swagger.js';


dotenv.config();

const app = express();

app.use(bodyParser.json());


app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use('/api', authRouter);
app.use('/api', mailsendRouter);



app.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT}`);
});
