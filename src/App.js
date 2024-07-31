import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';


function App() {
  return (
    <div className="font-Inter font">
      <BrowserRouter>
        <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/get-a-quotation" element={<GetQuotation />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;