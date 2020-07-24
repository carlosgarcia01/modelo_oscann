import OscannUid from '../../models/oscann_uid.model';

const createOscannUid = async (oscannUidObj) => {
  const newOscannUid = new OscannUid(oscannUidObj);
  const oscannUidReturn = await newOscannUid.save();
  return oscannUidReturn;
};

export default createOscannUid;
