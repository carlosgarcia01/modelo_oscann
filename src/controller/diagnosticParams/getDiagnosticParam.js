import DiagnosticParams from '../../models/diagnostic_params.model'

export const getDiagnosticParamsById = async (id_diagnosticParams) => {
  const DiagnosticParamsReturn = await DiagnosticParams.findById(id_diagnosticParams);
  return DiagnosticParamsReturn;
};

