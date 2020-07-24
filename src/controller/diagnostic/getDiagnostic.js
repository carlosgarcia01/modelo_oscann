import Diagnostic from '../../models/diagnostic.model';

export const getDiagnosticById = async (idDiagnostic) => {
  const DiagnosticReturn = await Diagnostic.findById(idDiagnostic);
  return DiagnosticReturn;
};

export const getDiagnosticIdGlobal = async (idDiagnostic) => {
  const DiagnosticReturn = await Diagnostic.findOne({ id_global_diagnostic: idDiagnostic });
  return DiagnosticReturn;
};
