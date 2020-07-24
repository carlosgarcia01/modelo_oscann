import SettingHost from '../../models/setting_host.model'

export const getSettingHosts = async () => {
  return await SettingHost.find();
};


