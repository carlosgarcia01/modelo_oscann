import SettingOscann from '../../models/Setting_oscann.model'

export const deleteSettingOscann = async (id_settingOscann) => {
  return await SettingOscann.findByIdAndDelete(id_settingOscann)
};

