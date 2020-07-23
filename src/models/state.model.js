import { Schema, model } from "mongoose";

const StateSchema = new Schema({
  id_state: {
    type: String,
    required: true,
  },
  name:String,
  description:String,
  creation_date: {
    type: Date,
    default: new Date.now(),
  },
  update_date: Date,
})

export default model('State', StateSchema);
