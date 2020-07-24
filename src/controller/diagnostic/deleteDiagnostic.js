import Diagnostic from '../../models/diagnostic.model';

export const deleteDiagnostic = async (id_diagnostic) => {
  return await Diagnostic.findByIdAndDelete(id_diagnostic)
};

export const deleteDiagnosticIdGlobal = async (id_diagnostic) => {
  return await Diagnostic.deleteOne({ "id_global_diagnostic":id_diagnostic })
};
