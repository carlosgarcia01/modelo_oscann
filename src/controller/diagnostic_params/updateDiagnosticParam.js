import DiagnosticParams from '../../models/diagnostic_params.model';

const updateDiagnosticParams = async (id, diagnosticParams) => {
  return DiagnosticParams.findByIdAndUpdate(id, diagnosticParams, { new: true });
};

export default updateDiagnosticParams;
