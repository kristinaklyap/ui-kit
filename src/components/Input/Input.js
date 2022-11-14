import classes from "./Input.module.scss";
import PropTypes from "prop-types";

const Input = (props) => {
  const {
    name,
    type = "text",
    value,
    onChange,
    onBlur,
    errorLabel,
    label,
    hasError,
    sample,
  } = props;
  const hasErrorClasses = hasError && classes.has_error;
  const inputClasses = [classes.form_control, hasErrorClasses].join(" ");

  return (
    <div className={inputClasses}>
      <label htmlFor={name}>{label}</label>
      <input
        placeholder={sample}
        id={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {hasError && <p>{errorLabel}</p>}
    </div>
  );
};
export default Input;

Input.propTypes = {
  /**
   *Provide input name
   */
  name: PropTypes.string.isRequired,
  /**
   * Choose your input type
   */
  type: PropTypes.oneOf(["text", "email", "password"]),
  /**
   * Input value
   */
  value: PropTypes.string,

  /**
   * Input label
   */
  label: PropTypes.string,
  /**
   * Input placeholder
   */
  sample: PropTypes.string,
  /**
   * Input on change func
   */
  onChange: PropTypes.func,
  /**
   * Input on blur func
   */
  onBlur: PropTypes.func,
  /**
   * Boolean. Is there is a validation err?
   */
  hasError: PropTypes.bool,
  /**
   * Input error message
   */
  errorLabel: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
  label: "My input",
};
