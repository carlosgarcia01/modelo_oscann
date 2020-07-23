import { Schema, model } from "mongoose";

const StateSchema = new Schema({
  name:String,
  description:String,
  id_state: {
    type: String,
    required: true,
  },
  creation_date: {
    type: Date,
    default: new Date.now(),
  },
  update_date: Date,
})

export default model('State', StateSchema);
