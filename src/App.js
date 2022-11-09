import { useState } from "react";

import "./App.scss";
import Title from "./components/Title/Title";
import Avatar from "./components/Avatar/Avatar";
import Icon from "./components/Icon/Icon";
import Button from "./components/Button/Button";
import Quote from "./components/Quote/Quote";

function App() {
  const [theme, setTheme] = useState("dark");
  const changeThemeHandler = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  return (
    <div className={`App ${theme}`}>
      <Title bordered={true} alignment="to_center" headingLevel={1} label={"My UI Kit"} />
      <Avatar emoji={"cat"} />
      <Icon />
      <p>Lorem ipsum dolor sit amet</p>
      <Button
        icon={"beer"}
        type={"button--secondary"}
        size={"button--medium"}
        label={"Switch mode"}
        onClick={changeThemeHandler}
      />
      <Quote
        size={"like-h6"}
        mode="italic"
        bordered={true}
        alignment={"to_left"}
        content={"Wise words from wise man"}
      />{" "}
    </div>
  );
}

export default App;
