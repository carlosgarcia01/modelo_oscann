import  Diagnostic  from "../../models/diagnostic.model";

export const createDiagnostic = async (diagnostic) => {
  const newDiagnostic = new Diagnostic(diagnostic);
  const DiagnosticReturn = await newDiagnostic.save();
  return DiagnosticReturn;
};

