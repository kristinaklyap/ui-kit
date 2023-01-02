import {useState} from "react";
import {Route, Routes, Navigate} from "react-router-dom";

import "./App.scss";
import AvatarPage from "./pages/AvatarPage";
import ButtonPage from "./pages/ButtonPage";
import InputPage from "./pages/InputPage";
import NotificationPage from "./pages/NotificationPage";
import IconPage from "./pages/IconPage";
import TextFieldPage from "./pages/TextFieldPage";
import QuotePage from "./pages/QuotePage";
import TitlePage from "./pages/TitlePage";
import Header from "./layout/header/Header";
import TextField from "./components/TextField/TextField";

function App() {
    const [theme, setTheme] = useState("light");
    const changeThemeHandler = () => {
        theme === "dark" ? setTheme("light") : setTheme("dark");
    };

    return (
        <div className={`App ${theme}`}>
            {/*header here*/}
            <Header changeThemeHandler={changeThemeHandler}/>
            <main className={`padding-right-2 padding-left-2`}>
                <Routes>
                    <Route index path="/" element={<Navigate to={"/avatar"} replace/>}/>
                    <Route index path="/avatar" element={<AvatarPage/>}/>
                    <Route path="/button" element={<ButtonPage/>}/>
                    <Route path="/input" element={<InputPage/>}/>
                    <Route path="/notification" element={<NotificationPage/>}/>
                    <Route path="/icon" element={<IconPage/>}/>
                    <Route path="/textfield" element={<TextFieldPage/>}/>
                    <Route path="/quote" element={<QuotePage/>}/>
                    <Route path="/title" element={<TitlePage/>}/>
                </Routes>
            </main>
            <footer>
                <TextField tag={'h6'} size={'disclaimer'} weight={'light'} label={'® Created by Kristinka Klyap'}/>
            </footer>
        </div>
    );
}

export default App;
