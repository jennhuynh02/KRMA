import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../main/footer';

const Splash = () => (
  <div className="splash-page-full">
    <div className="splash-page-header">
      <Link to="/enter">Enter</Link>
    </div>
    <section className="splash-text-container">
      <div className="splash-text-main">
        <h1>KRMA</h1>
        <h2> &#34;Kindness, like a boomerang, always returns&#34; </h2>
      </div>
      <div className="what-is-krma">
        <a href="#instructions" className="button scrolly">What is KRMA</a>
      </div>
    </section>
    <section id="instructions">
      <div>
        <span className="splash-instructions-logo"></span>
        <span></span>
      </div>
      <ul>
        <li>


        </li>
      </ul>
    </section>
    {/* <Footer /> */}
  </div>
);

export default Splash;
