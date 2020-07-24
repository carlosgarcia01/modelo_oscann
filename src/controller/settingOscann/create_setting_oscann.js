import SettingOscann from "../../models/Setting_oscann.model";

export const settingOscann = async (settingOscann) => {
  const newsettingOscann = new SettingOscann(settingOscann);
  return await newsettingOscann.save();;
};

