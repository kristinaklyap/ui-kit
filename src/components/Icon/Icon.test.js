import { render } from "@testing-library/react";
import Icon from "./Icon";

test("renders Icon component with given args", () => {
  const color = "forest-dark";
  const type = "checkmark";
  const size = "small";

  const myIcon = render(<Icon color={color} type={type} size={size} />);
  const renderedEl = myIcon.container.firstChild;
  const renderedElClasses = Array.from(renderedEl.classList);

  const iconType = renderedEl.getAttribute("data-icon");

  expect(renderedElClasses.includes(color)).toBe(true);
  expect(renderedElClasses.includes(size)).toBe(true);
  expect(iconType).toBe(type);
});
