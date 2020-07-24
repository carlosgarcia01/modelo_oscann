import SettingOscann from '../../models/Setting_oscann.model'

export  const updateSettingOscann = async (id, settingOscann,) => {
  return await SettingOscann.findByIdAndUpdate(id, settingOscann, { new: true });
};
