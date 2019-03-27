import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Issue = new Schema({
  title: {
    type:string
  },
  responsible: {
    type:string
  },
  description: {
    type: string
  },
  severity: {
    type:string
  },
  status: {
    type:string,
    default: 'Open'
  }
});

export default mongoose.model('Issue', Issue);