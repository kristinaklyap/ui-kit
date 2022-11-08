import {useState} from "react";

import './App.scss';
import Title from "./components/Title/Title";
import Avatar from "./components/Avatar/Avatar";
import Icon from "./components/Icon/Icon";
import Button from "./components/Button/Button";

function App() {
    const [theme, setTheme] = useState('dark');
    const changeThemeHandler = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark')
    }
    return (
        <div className={`App ${theme}`}>
            <Title bordered={true} alignment='to_center' headingLevel={1} label={'My UI Kit'}/>
            <Avatar emoji={'cat'}/>
            <Icon />
            <p>Lorem ipsum dolor sit amet</p>
            <Button icon={'beer'} type={'button--secondary'} size={'button--medium'} label={'Switch mode'}   onClick={changeThemeHandler}/>
            <Button shape='circle' icon={'facebook'} type={'button--secondary'} size={'button--medium'} label={'Switch mode'}   onClick={changeThemeHandler}/>
            <Button shape='circle' icon={'lock'} type={'button--secondary'} size={'button--medium'} label={'Switch mode'}   onClick={changeThemeHandler}/>
            <Button shape='circle' icon={'beer'} type={'button--secondary'} size={'button--medium'} label={'Switch mode'}   onClick={changeThemeHandler}/>
        </div>
    );
}

export default App;
