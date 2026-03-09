import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminLogin from "./pages/AdminLogin";
import RecoverPassword from "./pages/RecoverPassword";
import ResetPassword from "./pages/ResetPassword";
import ResetSuccess from "./pages/ResetSuccess";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<AdminLogin />} />
        <Route path="/recover" element={<RecoverPassword />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/success" element={<ResetSuccess />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;