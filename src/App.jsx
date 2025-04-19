import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Clinicians from './pages/Clinicians';
import Services from './pages/Services';
import Billing from './pages/Billing';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy'; // Import the new component
import ScrollToTop from './components/ScrollToTop'; // Import ScrollToTop

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Add ScrollToTop component here */}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/clinicians" element={<Clinicians />} />
          <Route path="/services" element={<Services />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} /> {/* Add route for Privacy Policy */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;