import classes from "./TextField.module.scss";
import PropTypes from "prop-types";

const TextField = (props) => {
  const { tag = "p", size, weight, alignment, style, label } = props;

  const textFieldClasses = [classes.textField, classes[alignment], classes[style]].join(" ");
  const Tag = tag;
  return (
    <Tag data-size={size} data-weight={weight} className={textFieldClasses}>
      {label}
    </Tag>
  );
};
export default TextField;

TextField.propTypes = {
  /**
   * Choose the tag
   */
  tag: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p"]),
  /**
   * Choose the font weight
   */
  weight: PropTypes.oneOf(["light", "regular", "medium", "semibold", "bold"]),
  /**
   * Choose the text alignment
   */
  alignment: PropTypes.oneOf(["to_left", "to_center", "to_right"]),
  /**
   * Choose the text style
   */
  style: PropTypes.oneOf(["italic", "underline"]),
  /**
   * Choose the size
   */
  size: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p", "disclaimer"]),
  /**
   * Set text label
   */
  label: PropTypes.string.isRequired,
};
TextField.defaultProps = {
  label: "My TextField component",
};
