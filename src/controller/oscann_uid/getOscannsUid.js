import OscannUid from '../../models/oscann_uid.model';

const getOscannsUid = async () => {
  const oscannUidsReturn = await OscannUid.find();
  return oscannUidsReturn;
};

export default getOscannsUid;
