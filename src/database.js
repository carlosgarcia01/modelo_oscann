import mongoose from 'mongoose';
/* import dotenv from 'dotenv';
dotenv.config();
const { MONGO_USER,MONGO_PASSWORD,MONGO_OPTIONS } = process.env;
const db =`mongodb://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_OPTIONS}`; */

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost/oscann-suit', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('>>>> DB is Connected');
  } catch (e) {
    console.log('Something goes wrong!');
    console.log(e);
  }
}

export default connect;
