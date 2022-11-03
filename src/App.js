import {useState} from "react";

import './App.scss';
import Title from "./components/Title/Title";

function App() {
    const [theme, setTheme] = useState('dark');
    const changeThemeHandler = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark')
    }
  return (
    <div className={`App ${theme}`}>
      <Title bordered={true} alignment='to_center'  headingLevel={1} label={'My UI Kit'}/>
        <p>Lorem ipsum dolor sit amet</p>
        <button onClick={changeThemeHandler}>Switch theme</button>
    </div>
  );
}

export default App;
