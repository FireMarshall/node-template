import mongoose from 'mongoose';
import { config } from '../config/config';

export const connect = async (url = config.dbURL) => {
    return mongoose.connect(url, { useNewUrlParser: true });
}