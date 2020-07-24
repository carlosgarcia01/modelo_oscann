import SettingOscann from '../../models/Setting_oscann.model'

export const getSettingOscann = async (id) => {
  return await SettingOscann.findById(id);;
};
