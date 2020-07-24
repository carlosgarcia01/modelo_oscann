import SettingOscann from '../../models/Setting_oscann.model';

const deleteSettingOscann = async (idSettingOscann) => {
  return SettingOscann.findByIdAndDelete(idSettingOscann);
};

export default deleteSettingOscann;
