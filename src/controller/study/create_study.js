import Study from "../../models/study.model";

export const createStudy = async (study) => {
  const newStudy = new Study(study);
  return  await newStudy.save();;
};

