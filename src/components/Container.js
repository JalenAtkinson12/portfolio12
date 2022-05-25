import React, {useState} from 'react';
import Tabs from './Tabs';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';

export default function Container() {
    const [currentPage, setCurrentPage] = useState('Home');


    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home/>;
        }
        if (currentPage === 'About') {
            return <About/>;
        }
        if (currentPage === 'Projects') {
            return <Projects/>;
        }
        return <Contact/>
    };
      const handlePageChange = (page) => setCurrentPage(page);

      return(
          <div>
              <Tabs currentPage={currentPage} handlePageChange={handlePageChange} />
               {renderPage()}
          </div>
      );
}