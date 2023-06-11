import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from '../Routes/index';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import db from './db';


mongoose.connect(db.remoteURI);

mongoose.connection.on('connected', () =>{
    console.log(`Connected to MongoDB`);
});

mongoose.connection.on('disconnected', () =>{
    console.log('Disconnected from MongoDB');
});


let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json()); 


app.use('/', indexRouter);

export default app;