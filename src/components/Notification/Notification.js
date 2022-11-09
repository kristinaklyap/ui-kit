import classes from "./Notification.module.scss";
import Button from "../Button/Button";
import PropTypes from "prop-types";

const Notification = (props) => {
  const { type, title, description, cancelConfig, approveConfig } = props;
  const notificationClasses = [classes.notification, classes[type]].join(" ");
  return (
    <div className={classes["notification-container"]}>
      <div className={classes["notification-bg"]}></div>
      <div className={notificationClasses}>
        <div className={classes["notification-content"]}>
          {title && <h3>{title}</h3>}
          {description && <p>{description}</p>}
        </div>
        {(cancelConfig || approveConfig) && (
          <div className={classes["notification-actions"]}>
            {[cancelConfig, approveConfig].map((item) => {
              return (
                item && (
                  <Button
                    key={item.label}
                    onClick={item.onClick && item.onClick}
                    label={item.label}
                    type={item.type}
                  />
                )
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
export default Notification;

Notification.propTypes = {
  /**
   * Choose your Notification type
   */
  type: PropTypes.oneOf(["success", "info", "error"]),
};
Notification.defaultProps = {
  type: "success",
  title: "Notification Title",
  description: "Notification Description",
  // cancelConfig: {
  //   onClick: null,
  //   label: "cancel",
  //   type: "button--primary",
  // },
  // approveConfig: {
  //   onClick: null,
  //   label: "Confirm",
  // },
};
