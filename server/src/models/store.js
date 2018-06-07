import mongoose from 'mongoose';
const { Schema } = mongoose;

const Store = mongoose.model(
  'Store',
  new Schema({
    shopId: { type: String, unique: true, dropDups: true },
  }),
);

export default Store;
