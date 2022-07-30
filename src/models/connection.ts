import mongoose from 'mongoose';
import 'dotenv/config';

const MONGO_DB_URL = 'mongodb://localhost:27017/CarShop';

const options = {
  user: process.env.MONGO_INITDB_ROOT_USERNAME || '', 
  pass: process.env.MONGO_INITDB_DATABASE || '',
  autoIndex: false,
  dbName: process.env.MONGO_INITDB_DATABASE || 'CarShop', // Define qual banco de dados vou utilizar.
};

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGO_URI
    || MONGO_DB_URL,
) => mongoose.connect(mongoDatabaseURI, options);

export default connectToDatabase;
