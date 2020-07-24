import SettingOscann from '../../models/setting_oscann.model';

const updateSettingOscann = async (id, settingOscann) => {
  return SettingOscann.findByIdAndUpdate(id, settingOscann, { new: true });
};

export default updateSettingOscann;
