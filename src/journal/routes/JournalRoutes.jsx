import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";

const JournalRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default JournalRoutes;
