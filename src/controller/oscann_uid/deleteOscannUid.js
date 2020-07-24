import OscannUid from '../../models/oscann_uid.model';

const deleteOscannUid = async (idOscannUid) => {
  const deletedOscannUid = await OscannUid.findByIdAndDelete(idOscannUid);
  return deletedOscannUid;
};

export default deleteOscannUid;
