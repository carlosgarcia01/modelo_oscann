import SettingOscann from '../../models/setting_oscann.model';

const getSettingOscanns = async () => {
  return SettingOscann.find();
};

export default getSettingOscanns;
