import Diagnostic from '../../models/diagnostic.model';

export const updateDiagnostic = async (id, diagnostic) => {
  return Diagnostic.findByIdAndUpdate(id, diagnostic, { new: true });
};

export const updateDiagnosticIdGlobal = async (id, diagnostic) => {
  return Diagnostic.findOneAndUpdate({ id_global_diagnostic: id }, diagnostic, { new: true });
};
