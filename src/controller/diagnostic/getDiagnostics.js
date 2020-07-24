import Diagnostic from '../../models/diagnostic.model';

export const getDiagnostics = async () => {
  return await Diagnostic.find();
};


