import './App.css';
import { Page1 } from './Page1';
import { AppProvider } from './context';
import { Routes, Route } from "react-router-dom";
import { Nav } from './components/Nav';

function App() {

  return (
    <>
        <Nav />
        <Routes>
          <Route path="/"
            element=
            {
              <AppProvider>
                <Page1 />
              </AppProvider>
            } />
        </Routes>
    </>
  );
}

export default App;
