import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
          <Route path="/VDreams-ProdBuild" element={<HomePage />} />
          <Route path="/VDreams-ProdBuild/our-story" element={<OurStoryPage />} />
          <Route path="/VDreams-ProdBuild/products" element={<ProductsPage />} />
          <Route path="/VDreams-ProdBuild/updates-reports" element={<UpdatesReportsPage />} /> 
          <Route path="/VDreams-ProdBuild/contact-us" element={<ContactUsPage />} />
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;
