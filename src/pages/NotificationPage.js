import Notification from "../components/Notification/Notification";

const NotificationPage = () => {
  const onClickHandler = (e) => alert(`Clicked "${e.target.textContent}" button`);
  return (
    <>
      <Notification
        description={"My description"}
        cancelConfig={{
          label: "Cancel",
          onClick: onClickHandler,
          type: "button--secondary",
        }}
        approveConfig={{
          label: "Confirm",
          onClick: onClickHandler,
        }}
      />
    </>
  );
};
export default NotificationPage;
