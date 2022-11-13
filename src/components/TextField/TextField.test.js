import { prettyDOM, render } from "@testing-library/react";
import TextField from "./TextField";

test("renders TextField component with given args", () => {
  const label = "Sample heading :)";
  const tag = "h1";
  const weight = "semibold";
  const alignment = "to_center";
  const style = "italic";
  const size = "disclaimer";

  const element = render(
    <TextField
      label={label}
      tag={tag}
      weight={weight}
      style={style}
      size={size}
      alignment={alignment}
    />
  );
  const renderedEl = element.container.firstChild;
  const renderedElClasses = Array.from(renderedEl.classList);
  const dataSize = renderedEl.getAttribute("data-size");
  const dataWeight = renderedEl.getAttribute("data-weight");

  expect(renderedEl.tagName).toBe(tag.toUpperCase());
  expect(renderedElClasses.includes(alignment)).toBe(true);
  expect(renderedElClasses.includes(style)).toBe(true);
  expect(dataSize).toBe(size);
  expect(dataWeight).toBe(weight);
  expect(renderedEl.textContent).toBe(label);
});
