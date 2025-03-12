import { useState } from "react";
import "./App.css";
import comp from "./companies.json";
import tech from "./technologies.json";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";
import NotFound from "./pages/NotFound";

function App() {
  const [companies, setCompanies] = useState(comp);
  const [technologies, setTechnologies] = useState(tech);
  return (
    <div className="App">
      <h1>LAB | React Stack Tracker</h1>
      <Routes>
        <Route path="/" element={<HomePage companies={companies} />} />
        <Route
          path="/company/:companySlug"
          element={<CompanyPage companies={companies} />}
        />
        <Route path="/tech/:slug" element={<TechnologyPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
