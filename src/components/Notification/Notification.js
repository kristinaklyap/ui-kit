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
            {[cancelConfig, approveConfig].map(
              (item) =>
                item && (
                  <Button
                    key={item.label}
                    onClick={item.onClick && item.onClick}
                    label={item.label}
                  />
                )
            )}
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

  /**
   * Provide the title
   */
  title: PropTypes.string,

  /**
   * Provide the description
   */
  description: PropTypes.string,

  /**
   * Provide the config for the first button
   */
  cancelConfig: PropTypes.PropTypes.shape({
    onClick: PropTypes.func,
    label: PropTypes.string,
  }),
  /**
   * Provide the config for the second button
   */
  approveConfig: PropTypes.PropTypes.shape({
    onClick: PropTypes.func,
    label: PropTypes.string,
  }),
};

Notification.defaultProps = {
  type: "success",
  title: "Notification Title",
  description: "Notification Description",
};
