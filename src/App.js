// import logo from './logo.svg';
import './App.css';
// import Demo from './Demo';
// import Product from './components/Product';
import ThemeSwitch from './components/ThemeSwitch';
import { useState } from 'react';
import { ThemeContext } from "./context";
import AppRouter from './AppRouter';
import { BrowserRouter } from 'react-router-dom';
import Menu from './components/Menu';
import Currency from './components/Currency';

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <BrowserRouter>
      <ThemeContext.Provider value={theme}>
        <Menu />
        <Currency />
        <ThemeSwitch changeTheme={(thm) => setTheme(thm)} />
        <AppRouter />
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
