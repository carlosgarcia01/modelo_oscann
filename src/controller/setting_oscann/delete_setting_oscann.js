import SettingOscann from '../../models/setting_oscann.model';

const deleteSettingOscann = async (idSettingOscann) => {
  return SettingOscann.findByIdAndDelete(idSettingOscann);
};

export default deleteSettingOscann;
