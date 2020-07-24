import DiagnosticParams from '../../models/diagnostic_params.model';

const createDiagnosticParams = async (diagnosticParams) => {
  const newDiagnosticParams = new DiagnosticParams(diagnosticParams);
  const DiagnosticParamsReturn = await newDiagnosticParams.save();
  return DiagnosticParamsReturn;
};

export default createDiagnosticParams;
