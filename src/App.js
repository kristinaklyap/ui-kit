import { useState } from "react";

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

function App() {
  const [theme, setTheme] = useState("dark");
  const changeThemeHandler = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  const {
    enteredValue: nameInput,
    isValid: nameInputIsValid,
    hasError: nameInputHasError,
    onChangeHandler: nameInputOnChange,
    onBlurHandler: nameInputOnBlur,
    reset: nameInputReset,
  } = useInput(isInputEmpty);

  const {
    enteredValue: emailInput,
    isValid: emailInputIsValid,
    hasError: emailInputHasError,
    onChangeHandler: emailInputOnChange,
    onBlurHandler: emailInputOnBlur,
    reset: emailInputReset,
  } = useInput(isEmailValid);

  return (
    <div className={`App ${theme}`}>
      <Title bordered={true} alignment="to_center" headingLevel={1} label={"My UI Kit"} />
      <Avatar emoji={"cat"} />
      <Input
        name={"user-name"}
        type={"text"}
        value={nameInput}
        onChange={nameInputOnChange}
        onBlur={nameInputOnBlur}
        label={"Your name"}
        sample={"Joe"}
        errorLabel={"Input cannot be empty"}
        hasError={nameInputHasError}
      />{" "}
      <Input
        name={"user-email"}
        type={"email"}
        value={emailInput}
        onChange={emailInputOnChange}
        onBlur={emailInputOnBlur}
        label={"Your email"}
        sample={"email@example.com"}
        errorLabel={"Wrong email. Should be like: email@example.com"}
        hasError={emailInputHasError}
      />
      {/*      <Notification
        description={"My description"}
        cancelConfig={{
          label: "Cancel",
          onClick: changeThemeHandler,
          type: "button--secondary",
        }}
        approveConfig={{
          label: "Confirm",
          onClick: changeThemeHandler,
        }}
      />*/}
      <TextField size={"p"} weight={"bold"} alignment={"to_center"} style={"underline"} />
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
