import { saveAs } from 'file-saver';
import { generateReport } from '../services/empresary.service';

export const Button = () => {

  const handleClick = async () => {
    const reportBlob = await generateReport();

    // Usar file-saver para guardar el archivo
    saveAs(reportBlob, 'empresary.xls');
  };

  return (
    <div>
      <button 
        className="border border-purple-700 rounded-md p-2" 
        onClick={handleClick}
      >
        Generar Reporte
      </button>
    </div>
  );
};