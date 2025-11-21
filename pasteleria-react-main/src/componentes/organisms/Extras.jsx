import React from 'react';
import Header from './Header';
import Footer from './Footer';


const Extras = () => (
  <>
    <Header />
    <main>
      <div className="container py-4">
        <h2>Extras</h2>
        <p>Contenido adicional de la web (promociones, blogs, etc.).</p>
      </div>
    </main>
    <Footer />
  </>
);

export default Extras;
