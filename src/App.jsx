import { BrowserRouter as Router } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {
  NavBar,
  About,
  Projects,
  Skills,
  Experience,
  Education,
  Footer,
} from '../src/components/index';

import './index.css';
import './App.css';

function App() {
  return (
    <>
      <Analytics />
      <ToastContainer />
      <Router>
        <div className="bg-lightDesert">
          <NavBar />
          <About/>
          <div class="w-full h-1 bg-darkDesert"></div>
          <Education/>
          <div class="w-full h-1 bg-darkDesert"></div>
          <Skills/>
          <div class="w-full h-1 bg-darkDesert"></div>
          <Projects/>
          <div class="w-full h-1 bg-darkDesert"></div>
          <Experience/>
          <div class="w-full h-1 bg-darkDesert"></div>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
