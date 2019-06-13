import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
// eslint-disable-next-line import/no-named-as-default-member
// eslint-disable-next-line import/no-named-as-default
import indexRouter from './routes/index';
import sequalizeSync from './util/sequelizeConnector';

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
app.use(express.static(path.join(__dirname, '../public')));

// Establish a connection with the database
sequalizeSync();

app.use('/api', indexRouter);

export default app;
