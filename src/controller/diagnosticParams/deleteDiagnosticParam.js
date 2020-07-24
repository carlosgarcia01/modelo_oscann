import DiagnosticParams from '../../models/diagnostic_params.model'

export const deleteDiagnosticParams = async (id_diagnosticParams) => {
  return await DiagnosticParams.findByIdAndDelete(id_diagnosticParams)
};

