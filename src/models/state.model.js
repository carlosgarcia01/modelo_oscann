import { Schema, model } from "mongoose";

const StateSchema = new Schema({
  name:String,
  description:String,
  update_date: Date,
  creation_date: {
    type: Date,
    default: Date.now(),
  },
})

export default model('State', StateSchema);
