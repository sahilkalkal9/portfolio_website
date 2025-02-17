import { useState } from 'react';
import './App.scss';
import Nav from './components/nav/nav';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import Footer from './components/footer/footer';
import About from './components/about/about';
import Projects from './components/projects/projects';
import PDFViewer from './components/resume/resume';

function App() {



  const [theme, setTheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')


  


  return (
    <>
      {/* <div id='overlayButtons' className="overlay-buttons">
        <div className="obuttons">
          <div onClick={() => setTheme(theme == "light" ? "dark" : "light")} className={`obutton obutton-${theme}`}>
            {
              theme == "light"
                ? <img src={require("./components/nav/moon.png")} alt="" className="obimg" />
                : <img src={require("./components/nav/sun.png")} alt="" className="obimg" />
            }
          </div>
        </div>
      </div> */}
      <div className={`App App-${theme}`}>
        <div className={`app-content app-content-${theme}`}>
          <Nav theme={theme} setTheme={setTheme} />
          <Routes>
            <Route path='/' element={<Home theme={theme} />} />
            <Route path='/about-me' element={<About theme={theme} />} />
            <Route path='/resume' element={<PDFViewer theme={theme} />} />
            <Route path='/projects' element={<Projects theme={theme} />} />
          </Routes>

          <Footer theme={theme} />
        </div>
      </div>
    </>
  );
}

export default App;
