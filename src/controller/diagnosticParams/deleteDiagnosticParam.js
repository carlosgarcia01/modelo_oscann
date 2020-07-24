import DiagnosticParams from '../../models/diagnostic_params.model';

const deleteDiagnosticParams = async (idDiagnosticParams) => {
  return DiagnosticParams.findByIdAndDelete(idDiagnosticParams);
};

export default deleteDiagnosticParams;
