import { useEmpresary } from "../hooks/useEmpresary";

export const Table = () => {
    const data = useEmpresary();
  return (
    <div>
      <table className="border border-blue-700 justify-center">
        <thead>
          <tr className="border border-red-400 justify-center flex  gap-6">
            <th>Fecha Operacion</th>
            <th>Producto</th>
            <th>Tipo</th>
            <th>Cantidad</th>
            <th>Descipcion</th>
            <th>Proveedor</th>
            <th>Fecha Vencimiento</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item,index)=>(
                <tr key={index} className="flex  justify-center gap-6">
                    <td>{item.fechaOperacion}</td>
                    <td>{item.producto}</td>
                    <td>{item.tipoTransaccion}</td>
                    <td>{item.cantidad}</td>
                    <td>{item.descripcion}</td>
                    <td>{item.proveedor}</td>
                    <td>{item.fechaVencimiento}</td>
                </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};
