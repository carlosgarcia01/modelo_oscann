import SettingHost from '../../models/setting_host.model';

const getSettingHosts = async () => {
  return SettingHost.find();
};

export default getSettingHosts;
