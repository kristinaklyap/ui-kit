import Input from "../components/Input/Input";
import useInput from "../hooks/use-input";
import { isEmailValid, isInputEmpty } from "../helpers/validators";
import Title from "../components/Title/Title";
import TextField from "../components/TextField/TextField";

const InputPage = () => {
  const {
    enteredValue: nameInput,
    // isValid: nameInputIsValid,
    hasError: nameInputHasError,
    onChangeHandler: nameInputOnChange,
    onBlurHandler: nameInputOnBlur,
    // reset: nameInputReset,
  } = useInput(isInputEmpty);

  const {
    enteredValue: emailInput,
    // isValid: emailInputIsValid,
    hasError: emailInputHasError,
    onChangeHandler: emailInputOnChange,
    onBlurHandler: emailInputOnBlur,
    // reset: emailInputReset,
  } = useInput(isEmailValid);

  return (
    <>
      <Title headingLevel={4} label={"Input Component Page"}/>
      <TextField
          label={"Fulfill inputs to see the functionality."}
          size={"p"}
          alignment={"to_left"}
      />
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
      />
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
    </>
  );
};
export default InputPage;
