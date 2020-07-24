import SettingHost from "../../models/setting_host.model";

export const settingHost = async (settingHost) => {
  const newSettingHost = new SettingHost(settingHost);
  const settingHostReturn = await newSettingHost.save();
  return settingHostReturn;
};

