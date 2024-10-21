import axios from "axios";

export const fillAllEmpresary = async () => {
  const { data } = await axios.get("http://localhost:8080/getEmpresary");
  console.log(data);
  return data;
};

export const generateReport = async () => {
  const response = await axios.get("http://localhost:8080/report", {
    responseType: 'blob'
  });
  return response.data;
};