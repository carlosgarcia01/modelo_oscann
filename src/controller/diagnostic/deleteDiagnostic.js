import Diagnostic from '../../models/diagnostic.model';

export const deleteDiagnostic = async (idDiagnostic) => {
  return Diagnostic.findByIdAndDelete(idDiagnostic);
};

export const deleteDiagnosticIdGlobal = async (idDiagnostic) => {
  return Diagnostic.deleteOne({ id_global_diagnostic: idDiagnostic });
};
