import { Schema, model } from "mongoose";
import WML_message from './WML_history.model'
import Patient from './Patient.model'
import Study from './study.model'
import User from './user.model'
import Hospital from './hospital.model'
import State from './state.model'

const WML_listSchema = new Schema({

id_work_list:String,
id_wml_message:{type:Schema.Types.ObjectId,ref:WML_message,required:true,{"por definir"}},
id_patient_local:{type:Schema.Types.ObjectId,ref:Patient,required:true},
id_patient_global:{type:Schema.Types.ObjectId,ref:Patient,required:true},
id_study:{type:Schema.Types.ObjectId,ref:Study,required:true},
id_user:{type:Schema.Types.ObjectId,ref:User,required:true},
id_hospital:{type:Schema.Types.ObjectId,ref:Hospital,required:true},
id_state:{type:Schema.Types.ObjectId,ref:State,required:true},
creation_date:{type:Date,required:true,default:new Date.now()},
update_date:Date
})

export default model('WMList', WML_listSchema);






