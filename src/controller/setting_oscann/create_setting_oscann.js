import SettingOscann from '../../models/Setting_oscann.model';

const settingOscann = async (idSettingOscann) => {
  const newsettingOscann = new SettingOscann(idSettingOscann);
  return newsettingOscann.save();
};

export default settingOscann;
