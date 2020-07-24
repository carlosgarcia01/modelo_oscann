import DiagnosticParams from '../../models/diagnostic_params.model';

const getDiagnosticParamsById = async (idDiagnosticParams) => {
  const DiagnosticParamsReturn = await DiagnosticParams.findById(idDiagnosticParams);
  return DiagnosticParamsReturn;
};

export default getDiagnosticParamsById;
