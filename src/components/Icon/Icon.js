import classes from "../Icon/Icon.module.scss";
import PropTypes from "prop-types";

const Icon = (props) => {
  const { type = "beer", size = "medium", color = "grey" } = props;
  const iconClasses = [classes.icon, classes[size], classes[color]].join(" ");

  return <span className={iconClasses} data-icon={type} aria-label={`${type} icon`}></span>;
};
export default Icon;

Icon.propTypes = {
  /**
   * Choose your fav icon type
   */
  type: PropTypes.oneOf([
    "beer",
    "checkmark",
    "cancel",
    "facebook",
    "instagram",
    "lock",
    "play",
    "twitter",
  ]),

  /**
   * Choose the color of icon
   */
  color: PropTypes.oneOf(["black", "white", "grey", "grey-dark", "forest", "forest-dark"]),

  /**
   * Choose the size
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

Icon.defaultProps = {
  type: "beer",
  color: "grey",
  size: "medium",
};
