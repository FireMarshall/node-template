import express from 'express';
import { connect } from './utils/db';
import { config } from './config/config';
import morgan from 'morgan';
import { urlencoded, json } from 'body-parser';
import { router } from './routes/router';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/api', router);

export const start = async () => {
    try {
        await connect();
        app.listen(config.port, () => {
            console.log(`REST API on http://localhost:${config.port}/api`);
        });
    } catch (err) {
        console.log(err);
    }
}
