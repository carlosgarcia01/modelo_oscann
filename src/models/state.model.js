import { Schema, model } from "mongoose";

const StateSchema = new Schema({
  id_state: {
    type: String,
    required: true,
  },
  name:String,
  description:String
})

export default model('State', StateSchema);
