import SettingHost from '../../models/setting_host.model';

const getSettingHost = async (id) => {
  return SettingHost.findById(id);
};

export default getSettingHost;
