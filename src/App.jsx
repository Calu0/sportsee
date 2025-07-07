import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Profile from './pages/Profile';
import HomeRedirect from './components/HomeRedirect';
import ProfileRedirect from './components/ProfileRedirect';
import NotFound from './pages/NotFound';
// Importez vos autres pages ici

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomeRedirect />} />
          <Route path="/profil" element={<ProfileRedirect />} />
          <Route path="/profil/:id" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
