import SettingOscann from '../../models/Setting_host.model'

export const getSettingOscanns = async () => {
  return await SettingOscann.find();
};


