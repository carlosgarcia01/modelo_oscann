import DiagnosticParams from '../../models/diagnostic_params.model';

const getDiagnosticParams = async () => {
  return DiagnosticParams.find();
};

export default getDiagnosticParams;
