import classes from "../Quote/Quote.module.scss";
import PropTypes from "prop-types";

const Quote = (props) => {
  const { alignment = "to_center", size = "like-p", content, bordered, mode } = props;
  const isBordered = bordered && "bordered";
  const quoteClasses = [classes.quote, classes[isBordered], classes[alignment]].join(" ");

  return (
    <div data-mode={mode} data-size={size} className={quoteClasses}>
      <span>{content}</span>
    </div>
  );
};
export default Quote;

Quote.propTypes = {
  /**
   * Choose the Quote alignment
   */
  alignment: PropTypes.oneOf(["to_center", "to_left", "to_right"]),
  /**
   * Choose the Quote font size
   */
  size: PropTypes.oneOf([
    "like-disclaimer",
    "like-p",
    "like-h6",
    "like-h5",
    "like-h4",
    "like-h3",
    "like-h2",
    "like-h1",
  ]),
  /**
   * Should the Quote component have top&borrom borders?
   */
  bordered: PropTypes.bool,
  /**
   * Choose the Quote alignment
   */
  mode: PropTypes.oneOf(["italic", "bold"]),
};

Quote.defaultProps = {
  alignment: "to_center",
  content: "Don't try to be original. Just try to be good",
  size: "like-p",
};
