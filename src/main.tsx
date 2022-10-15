import LandingPage from "pages/landing";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
    </Routes>
  );
};

export { App };
