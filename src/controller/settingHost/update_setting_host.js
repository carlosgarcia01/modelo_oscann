import SettingHost from '../../models/setting_host.model'

export  const updateSettingHost = async (id, settingHost,) => {
  return await SettingHost.findByIdAndUpdate(id, settingHost, { new: true });
};
