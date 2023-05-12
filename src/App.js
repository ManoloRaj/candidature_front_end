import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { Formulaire_identite } from './pages/AGEX/Formulaire_identite';
import { Formulaire_experience } from './pages/AGEX/Formulaire_experience';
import { Formulaire_marche } from './pages/AGEX/Formulaire_marche';
import { Formulaire_final } from './pages/AGEX/Formulaire_final';
import { Formulaire_identite_ci } from './pages/CI/Formulaire_identite_ci';
import { Formulaire_experience_ci } from './pages/CI/Formulaire_experience_ci';
import { Synthese_ci } from './pages/CI/Synthese_ci';


function App() {
  return (
    <div className="App">

      <Router basename="/formulaire_ami">
        <Routes>
          {/* formulaire AGEX */}
          <Route path="" element={<Formulaire_identite />} />
          <Route path="/formulaire_identite_agex" element={<Formulaire_identite />} />
          <Route path="/formulaire_experience/:idIdentite/:AgexName" element={<Formulaire_experience />} />
          <Route path="/formulaire_marche/:idIdentite/:idExperience/:AgexName" element={<Formulaire_marche />} />
          <Route path="/formulaire_final/:idIdentite" element={<Formulaire_final />} />



          {/* formulaire CI-TMNC
          <Route path="/:mode" element={<Formulaire_identite_ci />} /> */}
          <Route path="/formulaire_identite_ci/:mode" element={<Formulaire_identite_ci />} />
          <Route path="/formulaire_experience_ci" element={<Formulaire_experience_ci />} />
          <Route path="/synthese_ci" element={<Synthese_ci />} />


        </Routes>
      </Router >
    </div>
  );
}

export default App;
