import SettingOscann from '../../models/Setting_oscann.model';

const getSettingOscanns = async () => {
  return SettingOscann.find();
};

export default getSettingOscanns;
