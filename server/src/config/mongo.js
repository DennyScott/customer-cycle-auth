import mongoose from 'mongoose';

// const mongoUri = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@ds133920.mlab.com:33920/customercycle`; //TODO: We should make localhost so they can see it at axiom
const mongoUri = `mongodb://localhost:27017/customercycle`;

let db;

const connectMongoose = () => {
  mongoose.connect(mongoUri, {
    useMongoClient: true,
  });

  db = mongoose.connection;
  //Bind connection to error event (to get notification of connection errors)
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  console.log('mongoose connected');
};

export { connectMongoose };
