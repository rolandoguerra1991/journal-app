import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AuthRoutes from "../auth/routes/AuthRoutes";
import JournalRoutes from "../journal/routes/JournalRoutes";
import CheckingAuth from "../ui/components/CheckingAuth";

export const AppRouter = () => {
  const {status} = useSelector(state => state.auth);

  useEffect(() => {
    
  }, [])
  

  if (status === 'checking') {
    return <CheckingAuth />
  }

  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/*" element={<JournalRoutes />} />
    </Routes>
  );
};
