import DiagnosticParams from "../../models/diagnostic_params.model";

export const createDiagnosticParams = async (diagnosticParams) => {
  const newDiagnosticParams = new DiagnosticParams(diagnosticParams);
  const DiagnosticParamsReturn = await newDiagnosticParams.save();
  return DiagnosticParamsReturn;
};


