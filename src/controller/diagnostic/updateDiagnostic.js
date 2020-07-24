import Diagnostic from '../../models/diagnostic.model';

export  const updateDiagnostic = async (id, diagnostic) => {
  return await Diagnostic.findByIdAndUpdate(id, diagnostic, { new: true });
};

export  const updateDiagnosticIdGlobal = async (id,diagnostic) => {
  return await Diagnostic.findOneAndUpdate({ "id_global_diagnostic":id }, diagnostic, { new: true });
};
