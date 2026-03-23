import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Onboarding from "./pages/Onboarding";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/auth/:pathname" element={<Auth />} />
          <Route path="/profile/:pathname" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
