import DiagnosticParams from "../../models/diagnostic_params.model";


export  const updateDiagnosticParams = async (id, diagnosticParams) => {
  return await DiagnosticParams.findByIdAndUpdate(id, diagnosticParams, { new: true });
};

