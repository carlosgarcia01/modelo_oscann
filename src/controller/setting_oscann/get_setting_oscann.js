import SettingOscann from '../../models/Setting_oscann.model';

const getSettingOscann = async (id) => {
  return SettingOscann.findById(id);
};

export default getSettingOscann;
