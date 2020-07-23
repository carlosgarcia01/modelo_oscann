import express  from "express";
import { connect } from "./dataBase";
import dotenv from 'dotenv';
import morgan from 'morgan';
dotenv.config();
connect();

app.set('port',process.env.PORT || 3000);


app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());




app.get('/', (req, res) =>{
  res.json({
    message: 'Hello World'
  })
});

app.listen(3000, () => console.log(`server on port ${process.env.PORT}`));
