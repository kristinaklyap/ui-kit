import Input from "../components/Input/Input";
import useInput from "../hooks/use-input";
import { isEmailValid, isInputEmpty } from "../helpers/validators";

const InputPage = () => {
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
    <>
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
