import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/website-pages/home-page';
import UpdatesReportsPage from './pages/website-pages/updates-reports';
import OurStoryPage from './pages/website-pages/our-story';
import ProductsPage from './pages/website-pages/products';
import ContactUsPage from './pages/website-pages/contact-us-page';

function App() {
  return (

    <Router >
      <div>
        <Routes >
          <Route path="/" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/our-story" element={<OurStoryPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/updates-reports" element={<UpdatesReportsPage />} /> 
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;
