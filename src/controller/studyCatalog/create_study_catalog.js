import StudyCatalog from "../../models/study_catalog.model";

export const createStudyCatalog = async (studyCatalog) => {
  const newStudyCatalog = new StudyCatalog(studyCatalog);
  return  await newStudyCatalog.save();;
};

