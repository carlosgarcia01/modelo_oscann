import Diagnostic from '../../models/diagnostic.model';

export const getDiagnosticById = async (id_diagnostic) => {
  const DiagnosticReturn = await Diagnostic.findById(id_diagnostic);
  return DiagnosticReturn;
};

export const getDiagnosticIdGlobal = async (id_diagnostic) => {
  const DiagnosticReturn = await Diagnostic.findOne({ "id_global_diagnostic":id_diagnostic });
  return DiagnosticReturn;
};
