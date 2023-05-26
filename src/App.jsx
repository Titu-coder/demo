import './App.css';
import { useState, useEffect } from 'react';
import NavBar from './Components/NavBar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import ReactFullpage from '@fullpage/react-fullpage';
import WhatWeDo from './Pages/WhatWeDo';

function App() {
  const [data, setData] = useState(1000);
  const [enableFullPage, setEnableFullPage] = useState(false);

  // Callback function to receive data from the child component
  const handleDataFromChild = (dataFromChild) => {
    setData(dataFromChild);
  };

  useEffect(() => {
    const handleResize = () => {
      setEnableFullPage(window.innerWidth > 768);
    };

    handleResize(); // Check initial screen size

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (enableFullPage) {
      if (window.fullpageApi) {
        if (data > 1000) {
          window.fullpageApi.setAllowScrolling(false);
        } else {
          window.fullpageApi.setAllowScrolling(true);
        }
      }
    }
  }, [data, enableFullPage]);

  return (
    <>
      <NavBar fullpageApi={window.fullpageApi} sendDataToParent={handleDataFromChild} />
      {enableFullPage ? (
        <ReactFullpage
          scrollingSpeed={1000}
          render={({ fullpageApi }) => {
            window.fullpageApi = fullpageApi;

            return (
              <div id="app-container" className=''>
                <ReactFullpage.Wrapper>
                  <div className="section">
                    <Home />
                  </div>
                  <div className="section">
                    <WhatWeDo/>
                  </div>
                  <div className="section">
                    <About />
                  </div>
                  <div className="section">
                    <Contact />
                  </div>
                </ReactFullpage.Wrapper>
              </div>
            );
          }}
        />
      ) : (
        <div id="app-container" className=''>
          <div className="section">
            <Home />
          </div>
          <div className="section">
            <WhatWeDo/>
          </div>
          <div className="section">
            <About />
          </div>
          <div className="section">
            <Contact />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
