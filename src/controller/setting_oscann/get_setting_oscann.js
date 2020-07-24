import SettingOscann from '../../models/setting_oscann.model';

const getSettingOscann = async (id) => {
  return SettingOscann.findById(id);
};

export default getSettingOscann;
