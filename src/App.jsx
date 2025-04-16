import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Clinicians from './pages/Clinicians';
import Services from './pages/Services';
import Billing from './pages/Billing';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/clinicians" element={<Clinicians />} />
          <Route path="/services" element={<Services />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;