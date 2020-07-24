import SettingHost from '../../models/setting_host.model'

export const deleteSettingHost = async (id_settingHost) => {
  return await SettingHost.findByIdAndDelete(id_settingHost)
};

