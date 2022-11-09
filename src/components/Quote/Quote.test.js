import { prettyDOM, render } from "@testing-library/react";
import Quote from "./Quote";

test("renders Quote component with given ars", () => {
  const alignment = "to_left";
  const content = "Wise words..";
  const size = "like-h1";
  const bordered = true;
  const mode = "bold";

  const myQuote = render(
    <Quote alignment={alignment} content={content} size={size} bordered={bordered} mode={mode} />
  );
  const renderedEl = myQuote.container.firstChild;
  const renderedElClasses = Array.from(renderedEl.classList);

  const modeAttr = renderedEl.getAttribute("data-mode");
  const sizeAttr = renderedEl.getAttribute("data-size");

  // console.log(prettyDOM(renderedEl));
  expect(renderedElClasses.includes(alignment)).toBe(true);
  expect(renderedElClasses.includes("bordered")).toBe(true);
  expect(renderedEl).not.toBeEmptyDOMElement();
  expect(modeAttr).toBe(mode);
  expect(sizeAttr).toBe(size);
});
