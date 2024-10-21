import { Route, Routes } from "react-router-dom";
import { Reports } from "./pages/Reports";

export default function App() {
  return (
    <>
    <Routes>
      <Route path="/*" element={<Reports />} />
    </Routes>
    </>
  )
}