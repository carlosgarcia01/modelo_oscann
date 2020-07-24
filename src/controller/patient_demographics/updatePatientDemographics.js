import PatientDemographic from '../../models/patient_demographics';

const updatePatientDemographic = async (id, patientDemographic) => {
  return PatientDemographic.findByIdAndUpdate(id, patientDemographic, {
    new: true,
  });
};

export default updatePatientDemographic;
