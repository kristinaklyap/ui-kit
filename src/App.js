import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.scss";
import Title from "./components/Title/Title";
import Avatar from "./components/Avatar/Avatar";
import Icon from "./components/Icon/Icon";
import Button from "./components/Button/Button";
import Quote from "./components/Quote/Quote";
import Notification from "./components/Notification/Notification";
import TextField from "./components/TextField/TextField";
import Input from "./components/Input/Input";
import useInput from "./hooks/use-input";
import { isInputEmpty, isEmailValid } from "./helpers/validators";
import Homepage from "./pages/Homepage";
import AvatarPage from "./pages/AvatarPage";
import ButtonPage from "./pages/ButtonPage";
import InputPage from "./pages/InputPage";
import NotificationPage from "./pages/NotificationPage";
import IconPage from "./pages/IconPage";
import TextFieldPage from "./pages/TextFieldPage";
import QuotePage from "./pages/QuotePage";
import TitlePage from "./pages/TitlePage";
import Header from "./layout/header/Header";

function App() {
  const [theme, setTheme] = useState("dark");
  const changeThemeHandler = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <div className={`App ${theme}`}>
      {/*header here*/}
      <Header changeThemeHandler={changeThemeHandler} />
      <main>
        <Routes>
          <Route index path="/" element={<Homepage />} />
          <Route path="/avatar" element={<AvatarPage />} />
          <Route path="/button" element={<ButtonPage />} />
          <Route path="/input" element={<InputPage />} />
          <Route path="/notification" element={<NotificationPage />} />
          <Route path="/icon" element={<IconPage />} />
          <Route path="/textfield" element={<TextFieldPage />} />
          <Route path="/quote" element={<QuotePage />} />
          <Route path="/title" element={<TitlePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
