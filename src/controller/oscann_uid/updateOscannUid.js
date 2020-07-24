import OscannUid from '../../models/oscann_uid.model';

const updateOscannUid = async (id, oscannUid) => {
  const oscannUidUpdated = await OscannUid.findByIdAndUpdate(id, oscannUid, { new: true });
  return oscannUidUpdated;
};

export default updateOscannUid;
