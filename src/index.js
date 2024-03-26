import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/root/App';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Test from './components/Test';
import Signin from './components/Signin';
import Results from './components/Results';
import TryGrid from './components/TryGrid';
import Signup from './components/Signup';
import YourData from './components/YourData';
import ProtectedRoutes from './components/root/ProtectedRoutes';
import Packages from './components/Packages';
import Error from './components/Error';
import Contact from './components/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path='test' element={<Test />} />
          <Route path='packages' element={<Packages />} />
          <Route path='contact' element={<Contact />} />
          <Route path='signin' element={<Signin />} />
          <Route path='signup' element={<Signup />} />
          <Route path='error' element={<Error />} />

          <Route path="*" element={<h1>Not Found</h1>} />

          <Route element={<ProtectedRoutes />}>
            <Route path='yourdata' element={<YourData />} />
            <Route path='grid' element={<TryGrid />} />
            <Route path='results' element={<Results />} />
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

