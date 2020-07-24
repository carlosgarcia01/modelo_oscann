import SettingHost from '../../models/setting_host.model';

const updateSettingHost = async (id, settingHost) => {
  return SettingHost.findByIdAndUpdate(id, settingHost, { new: true });
};

export default updateSettingHost;
