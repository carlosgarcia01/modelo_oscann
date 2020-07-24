import SettingHost from '../../models/setting_host.model';

const deleteSettingHost = async (idSettingHost) => {
  return SettingHost.findByIdAndDelete(idSettingHost);
};

export default deleteSettingHost;
