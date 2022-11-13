import { prettyDOM, render } from "@testing-library/react";
import Notification from "./Notification";

test("renders Notification component with given ars", () => {
  const type = "info";
  const title = "Wise words..";
  const description = ".. from wise men - description";
  const cancelConfig = {
    onClick: () => alert("Cancel btn"),
    label: "cancel button",
  };
  const approveConfig = {
    onClick: () => alert("Cancel btn"),
    label: "approve button",
  };

  const myNotification = render(
    <Notification
      type={type}
      title={title}
      description={description}
      cancelConfig={cancelConfig}
      approveConfig={approveConfig}
    />
  );
  const renderedEl = myNotification.container.firstChild;

  const notificationTitle = renderedEl.querySelector("h3").textContent;
  const notificationDescription = renderedEl.querySelector("p").textContent;
  const notificationCancelBtn = renderedEl.querySelectorAll("button")[0];
  const notificationApproveBtn = renderedEl.querySelectorAll("button")[1];

  expect(notificationTitle).toBe(title);
  expect(notificationDescription).toBe(description);
  expect(notificationCancelBtn.textContent).toBe(cancelConfig.label);
  expect(notificationApproveBtn.textContent).toBe(approveConfig.label);
});
