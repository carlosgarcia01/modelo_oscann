import SettingOscann from '../../models/Setting_oscann.model';

const updateSettingOscann = async (id, settingOscann) => {
  return SettingOscann.findByIdAndUpdate(id, settingOscann, { new: true });
};

export default updateSettingOscann;
