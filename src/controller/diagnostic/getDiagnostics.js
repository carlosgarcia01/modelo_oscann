import Diagnostic from '../../models/diagnostic.model';

const getDiagnostics = async () => {
  return Diagnostic.find();
};

export default getDiagnostics;
