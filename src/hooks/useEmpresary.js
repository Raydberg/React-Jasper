import { useEffect, useState } from "react";
import { fillAllEmpresary } from "../services/empresary.service";

export const useEmpresary = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fillAllEmpresary();
      setData(result);
    };

    fetchData();
  }, []);
  return data;
};
