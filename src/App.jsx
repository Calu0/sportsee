import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Profile from './pages/Profile';
// Importez vos autres pages ici

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/profil/:id" element={<Profile />} />
          {/* <Route path="*" element={<NotFound />} /> */}


        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
