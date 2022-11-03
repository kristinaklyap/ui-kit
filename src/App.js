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
      <Title bordered={true} alignment='to_left' headingLevel={1} label={'My UI Kit'}/>
      <Title bordered={true} alignment='to_center'  headingLevel={2} label={'My UI Kit'}/>
      <Title bordered={true} alignment='to_right'  headingLevel={3} label={'My UI Kit'}/>
      <Title bordered={true} headingLevel={4} label={'My UI Kit'}/>
      <Title headingLevel={5} label={'My UI Kit'}/>
      <Title headingLevel={6} label={'My UI Kit'}/>
        <p>Lorem ipsum dolor sit amet</p>
        <button onClick={changeThemeHandler}>Switch theme</button>
    </div>
  );
}

export default App;
