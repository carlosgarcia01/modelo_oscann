import OscannUid from '../../models/oscann_uid.model';

const getOscannUid = async (id) => {
  const oscannUidReturn = await OscannUid.findById(id);
  return oscannUidReturn;
};

export default getOscannUid;
