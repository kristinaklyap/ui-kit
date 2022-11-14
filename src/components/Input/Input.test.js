import { prettyDOM, render, fireEvent } from "@testing-library/react";
import Input from "./Input";

test("renders Input component with given ars", () => {
  const type = "password";
  const name = "password";
  const value = "custom_password";
  const label = "Provide your password";
  const sample = "type here...";

  const onChangeHandler = (e) => `Your ${name} is: ${e.target.value}`;

  const myInput = render(
    <Input onChange={onChangeHandler} type={type} name={name} label={label} sample={sample} />
  );

  const renderedEl = myInput.container.firstChild;
  const inputLabel = renderedEl.querySelector("label");
  const labelFor = inputLabel.getAttribute("for");
  const input = renderedEl.querySelector("input");

  fireEvent.change(input, { target: { value: value } });
  const inputType = input.getAttribute("type");
  const inputPlaceholder = input.getAttribute("placeholder");
  const inputId = input.getAttribute("id");
  const inputValue = input.value;

  expect(inputType).toBe(type);
  expect(inputPlaceholder).toBe(sample);
  expect(inputId).toBe(name);
  expect(labelFor).toBe(name);
  expect(inputLabel.textContent).toBe(label);
  expect(inputValue).toBe(value);
});
