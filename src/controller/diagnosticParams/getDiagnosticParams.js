import DiagnosticParams from "../../models/diagnostic_params.model";


export const getDiagnosticParams = async () => {
  return await DiagnosticParams.find();
};


