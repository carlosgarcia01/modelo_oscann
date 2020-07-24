import SettingHost from '../../models/setting_host.model';

const settingHost = async (idSettingHost) => {
  const newSettingHost = new SettingHost(idSettingHost);
  const settingHostReturn = await newSettingHost.save();
  return settingHostReturn;
};

export default settingHost;
