import SettingHost from '../../models/SettingHost.model'

export const getSettingHost = async (id) => {
  const settingHostReturn = await SettingHost.findById(id);
  return settingHostReturn;
};
